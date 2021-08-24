<template>
  <div class="w-full mb-10">
    <div class="max-w-7xl mx-auto px-4 md:px-0">
      <div class="flex place-content-center py-5 bg">
        <ul class="grid grid-cols-3 md:flex gap-5 py-5 mx-0">
          <li
            v-for="(partner,key) in partners"
            :key="key"
            class="flex items-center justify-center"
          >
            <img
              :src="require(`@/assets/images/${partner.file}`)"
              :alt="partner.name"
              class="h-14 w-14 object-contain filter grayscale opacity-60 hover:opacity-100"
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partners',
  data: () => ({
    partners: [
      { name: 'CSS', file: 'css.png' },
      { name: 'Tailwind', file: 'tailwind.png' },
      { name: 'Vue', file: 'vue.png' },
      { name: 'HTML', file: 'javascript.png' }
    ]
  })
}
</script>