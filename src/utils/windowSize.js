import Vue from 'vue'

const windowSize = Vue.observable({
  width: window.innerWidth,
  height: window.innerHeight
})

function updateWindowSize () {
  windowSize.width = window.innerWidth
  windowSize.height = window.innerHeight
}

window.addEventListener('resize', updateWindowSize)

export default windowSize
