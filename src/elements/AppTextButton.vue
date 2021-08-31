<template>
  <span
    :class="[
      'hover:text-primary cursor-pointer font-semibold',
      small ? 'text-sm' : 'text-lg',
      active ? 'text-primary' : 'text-dark-l-5'
    ]"
    v-on="$listeners"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'AppTextButton',
  props: {
    small: { type: Boolean, default: false },
    active: { type: Boolean, default: false }
  }
}
</script>