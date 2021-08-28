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
    <Newsletter />
    <Footer />
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
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

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
    Contact,
    Newsletter,
    Footer
  }
}
</script>
