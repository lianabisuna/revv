<template>
  <div>
    <AppButton text="Button"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppButton from '@/components/AppButton.vue'

export default {
  name: 'Home',
  components: {
    AppButton
  }
}
</script>
