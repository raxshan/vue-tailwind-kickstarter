import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'

const cache = new InMemoryCache({})

import {
  createApolloClient,
  restartWebsockets
} from 'vue-cli-plugin-apollo/graphql-client'

// Install the vue plugin
Vue.use(VueApollo)

// Name of the localStorage item
const AUTH_TOKEN = 'apollo-token'

function decideEndpoint () {
  return (
    localStorage.getItem('endpointUrl') ||
    // put a 1 after the first segment of the frontend domain
    // https://abc.elastaink.com becomes https://abs1.elastalink.com
    'https://' +
      window.location.host +
      // .split('.')
      // .map((part, index) => (index === 0 ? part + '1' : part))
      // .join('.') +
      '/graphql'
  )
}

// Http endpoint
const httpEndpoint = decideEndpoint()

console.log('using endpoint: ', httpEndpoint)

// Config
const defaultOptions = {
  // You can use `https` for secure connection (recommended in production)
  httpEndpoint,
  // You can use `wss` for secure connection (recommended in production)
  // Use `null` to disable subscriptions
  wsEndpoint: null,
  // process.env.VUE_APP_GRAPHQL_WS || 'wss://mypc1.elastalink.com/graphql',
  // LocalStorage token
  tokenName: AUTH_TOKEN,
  // Enable Automatic Query persisting with Apollo Engine
  persisting: false,
  // Use websockets for everything (no HTTP)
  // You need to pass a `wsEndpoint` for this to work
  websocketsOnly: false,
  // Is being rendered on the server?
  ssr: false,

  // Override default apollo link
  // note: don't override httpLink here, specify httpLink options in the
  // httpLinkOptions property of defaultOptions.
  // link: myLink

  // Override default cache
  cache: cache,

  // Override the way the Authorization header is set
  getAuth: (/*tokenName: string*/) => {
    return sessionStorage.getItem(AUTH_TOKEN)
  }

  // Additional ApolloClient options
  // apollo: { ... }

  // Client local data (see apollo-link-state)
  // clientState: { resolvers: { ... }, defaults: { ... } }
}

persistCache({
  cache,
  storage: window.localStorage
})

// Call this in the Vue app file
export function createProvider (options = {}) {
  // await before instantiating ApolloClient, else queries might run before the cache is persisted

  // Create apollo client
  const { apolloClient, wsClient } = createApolloClient({
    ...defaultOptions,
    ...options
  })
  apolloClient.wsClient = wsClient

  // Create vue apollo provider
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        // fetchPolicy: 'cache-and-network',
        fetchPolicy: 'cache-and-network'
      }
    },
    errorHandler (error) {
      // eslint-disable-next-line no-console
      console.log(
        '%cError',
        'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
        error.message
      )
    }
  })

  return apolloProvider
}

// Manually call this when user log in
export async function onLogin (apolloClient, token) {
  if (typeof sessionStorage !== 'undefined' && token) {
    sessionStorage.setItem(AUTH_TOKEN, token)
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
  try {
    await apolloClient.resetStore()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (login)', 'color: orange;', e.message)
  }
}

// Manually call this when user log out
export async function onLogout (apolloClient) {
  if (typeof sessionStorage !== 'undefined') {
    sessionStorage.removeItem(AUTH_TOKEN)
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
  try {
    await apolloClient.resetStore()
    window.location.href = '/' // redirect to home screen and reload
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (logout)', 'color: orange;', e.message)
  }
}
