<template>
  <div>
    <Header />
    <Banner />
    <Partners />
    <Features />
    <Team />
    <Contact />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Partners from '@/components/Partners'
import Features from '@/components/Features'
import Team from '@/components/Team'
import Contact from '@/components/Contact'

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    Partners,
    Features,
    Team,
    Contact
  }
}
</script>
