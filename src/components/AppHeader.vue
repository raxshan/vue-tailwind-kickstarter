<template>
  <section id="header" class="bg-white px-6 z-10">
    <div class="flex h-auto my-1">
      <div class="my-auto">
        <router-link class="cursor-pointer" to="/">
          <img class="h-10 md:h-12" src="../assets/logo.png" alt />
        </router-link>
      </div>
      <div class="flex-grow text-right my-auto">
        <div class="hidden md:inline-block">
          <router-link class="px-3" to="/">Home</router-link>
          <router-link v-if="me" class="px-3" to="/dashboard">Dashboard</router-link>

          <router-link v-if="!me" to="/signup" class="px-3">Register</router-link>
          <div v-if="!me" class="inline-flex py-2">
            <router-link v-if="!me" to="/signin" class="btn btn-primary leading-5">Sign In</router-link>
          </div>
        </div>
      </div>

      <div v-if="me" class="ml-4 flex items-center md:ml-6">
        <button
          class="p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500"
          aria-label="Notifications"
        >
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        <!-- Profile dropdown -->
        <div class="ml-3 relative">
          <div>
            <button
              class="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
            >
              <img class="h-8 w-8 rounded-full" src="../assets/avatar.jpg" alt />
            </button>
          </div>

          <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10">
            <div class="py-1 rounded-md bg-white shadow-xs">
              <a
                href="#"
                id="sign-out"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
              >Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* slide */

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}

/* slide-fade */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

/* bounce */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
