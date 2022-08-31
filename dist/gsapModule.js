import Vue from 'vue'
import { gsap } from 'gsap'

Vue.directive('gsap', (el, binding) => {
  const options = { ...binding.value }
  const modifiers = binding.modifiers

  if (modifiers.set) {
    gsap.set(el, options)
  }

  if (modifiers.to) {
    gsap.to(el, options)
  }

  if (modifiers.from) {
    gsap.from(el, options)
  }

  if (modifiers.fromTo) {
    gsap.fromTo(el, { ...binding.value[0] }, { ...binding.value[1] })
  }
})

export default ({ app }, inject) => {
  inject('gsap', gsap)

      if (process.client) {
          const { ScrollTrigger } = require('gsap/ScrollTrigger')
          inject('ScrollTrigger', ScrollTrigger)
          gsap.registerPlugin(ScrollTrigger)

          const { ExpoScaleEase } = require('gsap/EasePack')
          inject('ExpoScaleEase', ExpoScaleEase)
          gsap.registerPlugin(ExpoScaleEase)
      }
}