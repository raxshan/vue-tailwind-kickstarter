<template>
  <div
    :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
    class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-primary overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"
  >
    <nav class="mt-10">
      <router-link
        to="/dashboard"
        class="flex items-center mt-4 py-2 px-3 border-l-4 border-gray-200 bg-gray-600 bg-opacity-25 text-white"
      >
        <i class="fas fa-chart-pie mr-3"></i>
        Dashboard
      </router-link>

      <router-link
        to="/ui-elements"
        class="block items-center mt-4 py-2 px-3 border-l-4 border-primary text-gray-300 hover:border-gray-200 hover:bg-gray-600 hover:bg-opacity-25 hover:text-white"
      >
        <i class="fas fa-toolbox mr-3"></i> UI Elements
      </router-link>

      <router-link
        to="/tables"
        class="block items-center mt-4 py-2 px-3 border-l-4 border-primary text-gray-300 hover:border-gray-200 hover:bg-gray-600 hover:bg-opacity-25 hover:text-white"
      >
        <i class="fas fa-th mr-3"></i> Tables
      </router-link>

      <router-link
        to="/forms"
        class="block items-center mt-4 py-2 px-3 border-l-4 border-primary text-gray-300 hover:border-gray-200 hover:bg-gray-600 hover:bg-opacity-25 hover:text-white"
      >
        <i class="fas fa-edit mr-3"></i> Forms
      </router-link>

      <router-link
        to="/page-template"
        class="block items-center mt-4 py-2 px-3 border-l-4 border-primary text-gray-300 hover:border-gray-200 hover:bg-gray-600 hover:bg-opacity-25 hover:text-white"
      >
        <i class="fas fa-keyboard mr-3"></i> Page Template
      </router-link>
    </nav>
  </div>
</template>