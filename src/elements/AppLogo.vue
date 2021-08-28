<template>
  <router-link
    to="/"
    class="flex items-center"
  >
    <img
      src="@/assets/images/logo.png"
      alt="logo"
      class="object-contain h-7 mr-3"
    >
    <div
      :class="[
        'text-2xl font-black tracking-tighter uppercase',
        dark ? 'text-light' : 'text-dark'
      ]"
    >
      Revv
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'AppLogo',
  props: {
    dark: { type: Boolean, default: false }
  }
}
</script>