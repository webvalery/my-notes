export default {
  props: {
    value: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: 'Введите значение'
    },
    placeholder: {
      type: String,
      default: 'Введите значение'
    },
    maxLength: {
      type: Number,
      default: null
    },
    message: {
      type: String,
      default: null
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentLength () {
      return this.value ? this.value.length : 0
    },
    hasMaxLength () {
      return this.maxLength !== null
    },
    hasInputInfo () {
      return this.error || this.hasMaxLength
    }
  },
  methods: {
    handleInputChange (e) {
      this.$emit('input', e.target.value)
    },
    handleFocusInput (e) {
      this.$refs.input.focus()
    }
  }
}
