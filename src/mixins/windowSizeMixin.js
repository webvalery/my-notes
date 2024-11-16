export default {
  data () {
    return {
      windowWidth: window.innerWidth
    }
  },
  computed: {
    isDesktopWidth () {
      return this.windowWidth >= 1366
    },
    isTabletWidth () {
      return this.windowWidth >= 768 && this.windowWidth < 1366
    },
    isMobileWidth () {
      return this.windowWidth < 768
    }
  },
  created () {
    window.addEventListener('resize', this.updateWindowWidth)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.updateWindowWidth)
  },
  methods: {
    updateWindowWidth () {
      this.windowWidth = window.innerWidth
    }
  }
}
