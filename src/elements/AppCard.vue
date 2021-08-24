<template>
  <div class="flex flex-col border hover:border-transparent px-5 py-12 rounded-xl space-y-2 hover:bg-primary group hover:text-light">
    <div class="flex">
      <div
        :class="[`
          bg-${color}
          flex items-center justify-center flex-shrink rounded-md h-10 w-10
        `]"
      >
        <AppIcon large :name="icon" />
      </div>
    </div>
    <div class="text-2xl font-bold">{{ title }}</div>
    <div class="text-lg font-semibold text-dark-l-6 group-hover:text-light ">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: 'AppCard',

  props: {
    icon: { type: String, default: '' },
    color: { type: String, default: 'neutral' },
    title: { type: String, default: '' },
    description: { type: String, default: '' }
  }
}
</script>