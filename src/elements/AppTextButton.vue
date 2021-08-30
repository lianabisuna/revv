<template>
  <span
    :class="[
      'text-dark-l-5  hover:text-primary cursor-pointer font-semibold',
      small ? 'text-sm' : 'text-lg',
      { 'text-primary': active }
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