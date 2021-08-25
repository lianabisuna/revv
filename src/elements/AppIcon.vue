<template>
  <font-awesome-icon
    :icon="[type, name]"
    :class="[
      `text-${color}`,
      {
        'text-xl': large,
        'mr-2': left
      }
    ]"
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
    left: { type: Boolean, default: false }
  }
}
</script>