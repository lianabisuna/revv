<template>
  <div>
    <Header />
    <Banner />
    <Partners />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Partners from '@/components/Partners'

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    Partners
  }
}
</script>
