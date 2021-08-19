<template>
  <header class="w-full shadow-sm bg-purple-400">
    <div class="max-w-7xl mx-auto bg-green-500 px-4 md:px-0">
      <div class="flex items-center h-20 justify-between bg-pink-400">
        <!-- Site branding -->
        <div class="flex flex-shrink-0">
          <AppLogo />
        </div>

        <!-- Site navigation -->
        <nav class="flex flex-grow">
          <ul class="flex flex-grow justify-end gap-10 items-center">
            <li
              v-for="(route,key) in routes"
              :key="key"
            >
              <AppTextButton :to="route.to">{{route.name}}</AppTextButton>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    routes: [
      { name: 'Home', to: 'home' },
      { name: 'Features', to: 'features' },
      { name: 'Team', to: 'team' },
      { name: 'Reviews', to: 'reviews' },
      { name: 'Contact', to: 'contact' }
    ]
  })
}
</script>