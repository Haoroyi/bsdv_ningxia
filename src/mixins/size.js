export const size = {
  computed: {
    sizeObj() {
      const obj = {}
      this.size.width ? obj.width = this.size.width + 'px' : obj.width = '100%'
      this.size.height ? obj.height = this.size.height + 'px' : obj.height = '100%'
      // obj.width = this.size.width + 'px'
      // obj.height = this.size.height + 'px'
      return obj
    }
  }
}
