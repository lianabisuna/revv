<template>
  <header id="home" class="w-full bg-white">
    <div class="max-w-7xl mx-auto px-4 md:px-0">
      <div class="flex items-center h-20 justify-between">
        <!-- Site branding -->
        <div class="flex-shrink-0">
          <AppLogo />
        </div>

        <!-- Site navigation -->
        <nav class="flex-grow">
          <!-- Desktop -->
          <div class="hidden md:block">
            <ul class="flex justify-end gap-10 items-center">
              <li
                v-for="(route,key) in routes"
                :key="key"
              >
                <AppTextButton @click="scrollTo(route.to)">{{route.name}}</AppTextButton>
              </li>
            </ul>
          </div>
          <!-- Mobile -->
          <div class="block md:hidden">
            <div class="flex justify-end gap-10 items-center">
              <!-- Toggle -->
              <button @click="isActive = !isActive" class="flex items-center justify-center">
                <AppIcon x-large :name="isActive ? 'chevron-up' : 'chevron-down'" color="dark" />
              </button>
              <!-- Menu -->
              <nav v-if="isActive" class="top-24 flex-col absolute left-0 right-0 z-50">
                <div class="mx-4 rounded-md bg-white">
                  <ul class="items-center p-3">
                    <li
                      v-for="(route,key) in routes"
                      :key="key"
                      class="px-4 py-4"
                    >
                      <AppTextButton @click="scrollTo(route.to)">{{route.name}}</AppTextButton>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    isActive: false,
    routes: [
      { name: 'Home', to: 'home' },
      { name: 'Features', to: 'features' },
      { name: 'Team', to: 'team' },
      { name: 'Reviews', to: 'reviews' },
      { name: 'Contact', to: 'contact' }
    ]
  }),
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id)
      element.scrollIntoView({behavior: "smooth"})
      this.isActive = false
    }
  }
}
</script>