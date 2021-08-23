<template>
  <div>
    <Header />
    <Banner />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Banner from '@/components/Banner'

export default {
  name: 'Home',
  components: {
    Header,
    Banner
  }
}
</script>
