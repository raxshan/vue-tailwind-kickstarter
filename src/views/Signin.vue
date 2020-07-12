<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />

    <main class="flex-grow bg-gray-200">
      <div class="flex items-center justify-center mt-16 mx-6">
        <div class="box">
          <h2 class="text-primary font-extrabold text-center">Signin</h2>

          <form class="mt-4" method="POST" action>
            <label class="block mb-3">
              <span class="text-sm">E-Mail Address</span>
              <input
                type="email"
                name="email"
                class="form-input mt-1 block w-full rounded-md"
                value
                required
                autocomplete="email"
                autofocus
              />
            </label>

            <label class="block mb-3">
              <span class="text-sm">Password</span>
              <input
                id="password"
                type="password"
                class="form-input mt-1 block w-full rounded-md"
                name="password"
                required
                autocomplete="current-password"
              />
            </label>

            <div class="flex justify-between items-center mb-4">
              <div class="mr-8">
                <label>
                  <input
                    type="checkbox"
                    class="form-checkbox text-primary bg-gray-200 border-gray-300"
                    name="remember"
                    id="remember"
                  />
                  <span class="ml-2 text-sm">Remember Me</span>
                </label>
              </div>

              <div>
                <a
                  class="block text-sm hover:underline"
                  href="http://localhost:8000/password/reset"
                >Forgot Your Password?</a>
              </div>
            </div>

            <div>
              <button type="submit" class="w-full btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default {
  name: "SignIn",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
