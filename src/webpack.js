// Libraries
import fancybox from './lib/fancybox'

// Scripts
import smoothScroll from './ts/smooth-scroll'
import currentTab from './ts/current-tab'
import animation from './ts/animation'
import waved from './ts/waved'
import movement from './ts/movement'
import listing from './ts/listing'
import filter from './ts/filter'
import questionnaire from './ts/questionnaire'
import formSubmit from './ts/form-submit'
import formInputs from './ts/form-inputs'
import maskTel from './ts/mask-tel'
import preloader from './ts/preloader'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', () => {
  fancybox.init()
  smoothScroll.init()
  currentTab.init()
  waved.init()
  movement.init()
  listing.init()
  filter.init()
  questionnaire.init()
  formSubmit.init()
  formInputs.init()
  maskTel.init()
  preloader.init()
  animation.init()
})
