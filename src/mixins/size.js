export const size = {
  computed: {
    sizeObj () {
      const obj = {}
      obj.width = this.size.width + 'px'
      obj.height = this.size.height + 'px'
      return obj
    }
  }
}
