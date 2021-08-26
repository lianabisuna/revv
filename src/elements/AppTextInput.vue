<template>
  <div class="flex flex-col space-y-1">
    <label v-if="label" for="" class="text-light font-semibold">{{label}} <span class="text-red-500">*</span></label>
    <component
      :is="form"
      :type="type"
      :placeholder="placeholder"
      class="min-h-12 text-lg rounded-md bg-dark border-2 border-neutral-d-7 text-light px-2 py-1 placeholder-neutral focus:outline-none focus:border-primary"
      rows="4"
    ></component>
  </div>
</template>

<script>
export default {
  name: 'AppIcon',
  props: {
    form: { type: String, default: 'input' },
    label: { type: String, default: '' },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
  }
}
</script>