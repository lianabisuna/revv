import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/index.css'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBan, faWrench, faMobileAlt, faFont, faEdit, faGlobe, faLaptopCode, faBrush, faBullhorn, faDesktop, faPhoneAlt, faEnvelope, faQuoteLeft, faChevronLeft, faChevronRight, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Font Awesome
library.add(faBan, faWrench, faMobileAlt, faFont, faEdit, faGlobe, faLaptopCode, faBrush, faBullhorn, faDesktop, faPhoneAlt, faEnvelope, faQuoteLeft, faChevronLeft, faChevronRight, faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedin, faChevronDown, faChevronUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Automatic global registration of base components
const requireComponent = require.context(
  // The relative path of the components folder
  './elements',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /App[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
