<template>
  <font-awesome-icon
    :icon="[type, name]"
    :class="[
      `text-${color}`,
      {
        'text-xl': large,
        'text-2xl': xLarge,
        'text-4xl': xxLarge,
        'mr-2': left
      }
    ]"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: 'AppIcon',
  props: {
    name: { type: String, default: 'ban' },
    type: { type: String, default: 'fas' },
    color: { type: String, default: 'light' },
    large: { type: Boolean, default: false },
    xLarge: { type: Boolean, default: false },
    xxLarge: { type: Boolean, default: false },
    left: { type: Boolean, default: false }
  }
}
</script>