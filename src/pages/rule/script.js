
export default {
  data () {
    return {
    }
  },

  components: {
  },

  methods: {
    iknow(){
      wx.navigateBack({
        delta: 1
      })
    },
  },

  created () {
    // 调用应用实例的方法获取全局数据
  },
  onShow () {
    // `this` 指向 vm 实例
  }
}