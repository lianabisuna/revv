<template>
  <div
    :class="[
      'flex flex-col relative rounded-xl min-h-96 z-10',
      active ? 'bg-dark text-light' : 'bg-light text-dark transform scale-90',
      { 'opacity-50': !active }
    ]"
    v-on="$listeners"
  >
    <div v-if="active" class="absolute w-full -top-8">
      <div class="rounded-full h-24 w-24 border-light border-8 mx-auto">
        <img
          :src="require(`@/assets/images/${avatar}`)"
          :alt="name"
          class="object-cover h-full w-full rounded-full"
        >
      </div>
    </div>
    <div class="flex flex-col mt-8 p-8 space-y-5 flex-grow">
      <AppIcon xx-large name="quote-left" :color="active ? 'primary-l-5' : 'primary'" />
      <div
        :class="[
          'text-xl md:text-2xl font-extrabold flex-grow',
          active ? 'min-h-56' : 'clamp-5 max-h-40 h-40'
        ]"
      >
        {{message}}
      </div>
      <div
        :class="[
          'pt-5 text-lg font-bold',
          active ? 'text-primary-l-5' : 'text-primary'
        ]"
      >
        <div>{{name}}</div>
        <div>{{designation}}<span v-if="company">, {{company}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMessageCard',

  props: {
    avatar: { type: String, default: '' },
    name: { type: String, default: '' },
    designation: { type: String, default: '' },
    company: { type: String, default: '' },
    message: { type: String, default: '' },
    active: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
  .clamp-5 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
</style>