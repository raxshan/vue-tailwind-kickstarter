<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />

    <div class="flex flex-grow">
      <SideNav />

      <main class="flex-1 bg-gray-200 px-6">
        <div class="flex flex-col h-full container">
          <h1 class="font-bold pt-8">Page Template</h1>

          <AppFooter />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import SideNav from "../components/SideNav";

export default {
  name: "PageTemplate",
  components: {
    AppHeader,
    AppFooter,
    SideNav
  }
};
</script>
