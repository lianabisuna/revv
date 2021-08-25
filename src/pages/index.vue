<template>
  <div>
    <Header />
    <Banner />
    <Partners />
    <Features />
    <Team />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Partners from '@/components/Partners'
import Features from '@/components/Features'
import Team from '@/components/Team'

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    Partners,
    Features,
    Team
  }
}
</script>
