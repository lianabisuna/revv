<template>
  <header class="w-full border-b">
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
                <AppTextButton :to="route.to">{{route.name}}</AppTextButton>
              </li>
            </ul>
          </div>
          <!-- Mobile -->
          <div class="block md:hidden">
            <div class="flex justify-end gap-10 items-center">
              <!-- Toggle -->
              <span
                class="bg-neutral h-6 w-6 rounded-full"
                @click="isActive = !isActive"
              ></span>
              <!-- Menu -->
              <nav v-if="isActive" class="top-24 flex-col absolute left-0 right-0">
                <div class="mx-4 rounded-md border">
                  <ul class="items-center p-3">
                    <li
                      v-for="(route,key) in routes"
                      :key="key"
                      class="px-4 py-4"
                    >
                      <AppTextButton :to="route.to">{{route.name}}</AppTextButton>
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
  })
}
</script>