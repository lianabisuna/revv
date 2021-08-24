<template>
  <div>
    <Header />
    <Banner />
    <Partners />
    <Features />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Partners from '@/components/Partners'
import Features from '@/components/Features'

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    Partners,
    Features
  }
}
</script>
