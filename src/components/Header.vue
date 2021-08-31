<template>
  <header
    id="header"
    :class="[
      'w-full bg-white z-50',
      topPage ? 'bg-opacity-90 fixed' : 'bg-white'
    ]"
  >
    <div
      :class="[
        'max-w-7xl mx-auto px-4 md:px-0',
        { 'hidden': !toggleHeader }
      ]"
    >
      <div
        :class="[
          'flex items-center justify-between',
          topPage ? 'h-14' : 'h-20'
        ]"
      >
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
                <AppTextButton
                  :active="activeView===route.to"
                  @click="scrollTo(route.to)"
                >
                  {{route.name}}
                </AppTextButton>
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
                      <AppTextButton
                        :active="activeView===route.to"
                        @click="scrollTo(route.to)"
                      >
                        {{route.name}}
                      </AppTextButton>
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
    ],
    prevScroll: 0,
    toggleHeader: true,
    topPage: false,
    activeView: 'home'
  }),
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id)
      element.scrollIntoView({behavior: "smooth"})
      this.isActive = false
    },
    onScroll() {
      let win = window,
          doc = document.documentElement,
          scrollPos = win.pageYOffset || doc.scrollTop,
          navHeight = document.getElementById('header').offsetHeight
      // If current position is at the topmost,
      // set header to full height and full opacity
      if (scrollPos == 0) {
        this.topPage = false
        return
      }
      // If user scrolls down,
      // do not show header
      if (scrollPos > this.prevScroll && scrollPos > navHeight) {
        this.toggleHeader = false
      }
      // If user scrolls up,
      // show header but smaller
      else if (scrollPos < this.prevScroll) {
        this.toggleHeader = true
      }
      
      this.topPage = true
      // Set previous scroll to current scroll position
      this.prevScroll = scrollPos
    },
    activateNav() {
      // Get all sections with an ID
      const sections = document.querySelectorAll("section[id]")
      // Get current scroll position
      let scrollY = window.pageYOffset
      // Loop through the sections to get height, height from top and ID
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
        let sectionId = current.getAttribute("id");
        // If our current scroll position enters the space where current section on screen is,
        // set active section id
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          this.activeView = sectionId
        }
      })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('scroll', this.activateNav)
  }
}
</script>