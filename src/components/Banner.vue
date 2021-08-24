<template>
  <section class="relative h-screen w-full">
    <!-- Background -->
    <div class="wrapper absolute h-full w-full">
      <img src="@/assets/images/office.jpg" alt="banner" class="image h-full w-full object-cover">
    </div>
    <!-- Banner content -->
    <div class="max-w-7xl mx-auto px-4 md:px-5 h-full absolute left-0 right-0 w-full -top-5">
      <div class="flex flex-wrap content-center h-full">
        <!-- Banner copy -->
        <div class="w-full md:w-8/12 mx-auto">
          <div class="flex flex-col space-y-5">
            <div class="text-5xl md:text-6xl font-black text-center text-light">Let the <span class="text-primary-l-3">landing page</span> take your brand to the next level</div>
            <div class="text-lg font-semibold text-center text-neutral-l-8">In dapibus sodales molestie. Maecenas interdum est sit amet velit dignissim pretium. Praesent lectus dolor, tristique ac arcu id, sodales efficitur felis.</div>
            <div class="flex flex-col md:flex-row md:mx-auto gap-y-3 md:gap-x-3">
              <AppButton large background="light" color="primary">Learn more</AppButton>
              <AppButton large transparent background="primary">Try it now</AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped>
  .wrapper {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 92%);
  }

  .image {
    filter:sepia(50%) hue-rotate(140deg) saturate(5) brightness(25%);
  }
</style>