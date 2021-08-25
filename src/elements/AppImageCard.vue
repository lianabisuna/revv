<template>
  <div
    :class="[
      'relative rounded-lg h-full w-full group cursor-pointer inline-block overflow-hidden',
      focus ? 'bg-neutral' : 'bg-primary'
    ]"
  >
    <img
      :src="require(`@/assets/images/${file}`)"
      alt=""
      :class="[
        'object-contain w-full h-full block mt-5 filter transform scale-125 group-hover:scale-150',
        active ? 'scale-150 grayscale-0' : 'grayscale group-hover:grayscale-0'
      ]"
    >
    <div v-if="active" class="absolute bottom-0 w-full px-2 py-5">
      <div class="text-center">
        <div class="text-lg md:text-xl text-light font-bold">{{name}}</div>
        <div class="text-base md:text-lg text-light font-semibold">{{role}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppImageCard',

  props: {
    file: { type: String, default: '' },
    name: { type: String, default: '' },
    role: { type: String, default: '' },
    active: { type: Boolean, default: false },
    focus: { type: Boolean, default: false }
  }
}
</script>