<template>
  <button class="text-white bg-blue-500 px-3 py-2 rounded-md mt-10">{{ text }}</button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: String
  }
}
</script>