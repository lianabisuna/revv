<template>
  <button class="relative bg-blue-5 text-black-10 px-3 py-2 rounded-md mt-10 m-10">{{text}}</button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: String
  }
}
</script>