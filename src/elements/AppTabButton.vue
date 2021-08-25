<template>
  <button
    type="button"
    :class="[
      'font-semibold px-2 rounded-md w-max',
      active ? `bg-${background}` : `border border-${background}`,
      active ? 'text-light' : `text-${background}`,
      active
        ? `hover:bg-${background}-d-1 hover:border-${background}-d-2`
        : `hover:text-${background}-d-2 hover:border-${background}-d-2`,
      large ? '' : 'w-full md:min-w-32 text-base py-2.5',
      {
        'py-4 text-lg w-full md:min-w-40': large,
        'rounded-full': chip
      }
    ]"
    v-on="$listeners"
  >
    <div class="flex items-center justify-center px-2">
      <AppIcon
        left
        :name="icon"
        :color="active ? 'light' : background"
      />
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'AppTabButton',
  props: {
    background: { type: String, default: 'primary' },
    color: { type: String, default: 'light' },
    large: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    chip: { type: Boolean, default: false },
    icon: { type: String, default: 'ban' },
  }
}
</script>