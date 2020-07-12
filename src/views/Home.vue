<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex-1 bg-gray-200 px-6">
      <div class="flex flex-col h-full container">
        <div class="px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <!--Left Col-->
          <div
            class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
          >
            <p class="uppercase tracking-loose w-full">What business are you?</p>
            <h1 class="my-4 text-5xl font-bold leading-tight">Kick Start to sell yourself!</h1>
            <p class="leading-normal text-2xl mb-8">
              This is a basic vue template using
              <a
                class="underline"
                href="https://tailwindcss.com"
                target="_blank"
              >tailwindcss</a>. You are ready to start building your application!
            </p>

            <router-link v-if="!me" to="/signup" class="btn btn-primary shadow-lg">Register</router-link>
          </div>
          <!--Right Col-->
          <div class="w-full md:w-3/5 py-6 text-center">
            <img class="w-full md:w-4/5 z-50" src="../assets/hero.png" />
          </div>
        </div>
      </div>
    </main>
    <!-- END Main -->

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default {
  name: "Home",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
