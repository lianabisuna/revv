<template>
  <span
    class="text-dark-l-5 hover:text-primary cursor-pointer font-semibold"
    v-on="$listeners"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'AppTextButton'
}
</script>