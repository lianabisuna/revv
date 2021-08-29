<template>
  <div id="features" class="w-full">
    <div class="max-w-7xl mx-auto px-4 md:px-16 py-14">
      <div class="flex flex-col space-y-8">
        <div class="w-full md:w-8/12 space-y-2">
          <div class="text-4xl md:text-5xl font-black">Bring your business online</div>
          <div class="text-lg font-semibold text-dark-l-6">Phasellus interdum enim eget orci interdum, id suscipit justo venenatis. Morbi sit amet sollicitudin arcu.</div>
        </div>
        <div class="flex flex-col sm:flex-row flex-wrap space-y-5 md:space-y-0">
          <div
            v-for="(feature,key) in features"
            :key="key"
            class="flex md:w-1/3 md:p-5"
          >
            <AppCard
              :icon="feature.icon"
              :title="feature.title"
              :description="feature.description"
              :color="feature.color"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features',

  data: () => ({
    features: [
      { icon: 'wrench', color: 'yellow-600', title: 'Free lifetime updates', description: 'Morbi commodo commodo hendrerit. Donec varius vestibulum viverra.' },
      { icon: 'mobile-alt', color: 'pink-600', title: 'Responsive layout', description: 'Vestibulum tincidunt id augue ac porttitor. Maecenas eleifend lacinia justo et faucibus.' },
      { icon: 'font', color: 'purple-600', title: 'Google font support', description: 'Praesent justo ipsum, pulvinar quis leo pretium, varius rhoncus enim.' },
      { icon: 'edit', color: 'blue-600', title: 'Easy to customize', description: 'Proin eu faucibus ligula. Phasellus consequat quam a ex maximus commodo.' },
      { icon: 'globe', color: 'green-600', title: 'Browser compatibility', description: 'Phasellus hendrerit erat vitae consequat rhoncus. Curabitur viverra tellus ac metus maximus sollicitudin.' },
      { icon: 'laptop-code', color: 'red-600', title: 'Maintainable code base', description: 'Aliquam condimentum, nisi vitae aliquam sagittis, lorem lorem dapibus velit, a convallis metus.' }
    ]
  })
}
</script>