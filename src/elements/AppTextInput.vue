<template>
  <div class="flex flex-col space-y-1">
    <label v-if="label" for="" class="text-light font-semibold">{{label}} <span class="text-red-500">*</span></label>
    <component
      required
      :is="form"
      :type="type"
      :placeholder="placeholder"
      :class="[
        'min-h-12 text-lg rounded-md placeholder-neutral focus:outline-none focus:border-primary',
        dark ? 'bg-dark border-2 border-neutral-d-7 text-light' : 'bg-light borde-2 border-neutral-d-7 text-dark',
        large ? 'px-5 py-4' : 'py-1 px-2'
      ]"
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
    dark: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
  }
}
</script>