<template>
  <div>
    <Header />
    <Banner />
    <Partners />
    <Features />
    <Team />
    <Reviews />
    <Numbers />
    <Contact />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Partners from '@/components/Partners'
import Features from '@/components/Features'
import Team from '@/components/Team'
import Reviews from '@/components/Reviews'
import Numbers from '@/components/Numbers'
import Contact from '@/components/Contact'

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    Partners,
    Features,
    Team,
    Reviews,
    Numbers,
    Contact
  }
}
</script>
