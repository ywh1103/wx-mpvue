import store from '../../store/store'
export default {
  data () {
    return {
      productList:[],
      agentInfo:{},
      openType:'',
      sessionFrom:'',
      toastDisabled:true,
      count:'3',
      countDownTime:3,
      myInterval:null,
      showToast:true,
    }
  },

  components: {
  },

  methods: {
    btnClick(productId){
      let _this = this;
      _this.sessionFrom=`${productId},${_this.agentInfo.agentId}`;
      _this.openType='contact';
    },
    btnClick1(){
      // this.openType='contact';
      wx.showToast(
        {
            title:'111111',
            icon:'none'
        }
      )
      
    },
    async mountedHttp(){
      let _this = this;
      let productListData = await _this.productListHttp();
      _this.productList = productListData.content;
      console.log(_this.productList);
      let agentInfoData = await _this.agentInfoHttp();
      _this.agentInfo = agentInfoData.content;
      _this.productList = _this.productList.map((item) => {
        Object.assign(item,agentInfoData.content);
        return item;
      });
      console.log(_this.productList);
    },
    async productListHttp(){
      let _this = this;
      let productListData = await _this.$Http.get('/rest/product/list',{},{token:store.state.token});
      console.log(productListData);
      return productListData
    },
    // 取得代理人信息
    async agentInfoHttp(){
      let _this = this;
      let agentInfoData = await _this.$Http.get('/rest/agent/base/info',{},{token:store.state.token});
      console.log(agentInfoData);
      return agentInfoData;
    },
    //我知道了
    iKnow(){
      let _this = this;
      wx.setStorage({
        key:"productTag",
        data:"one"
      });
      _this.showToast = false;
    },
    doLoop(){
      let _this = this;
      _this.countDownTime--
      if (_this.countDownTime > 0 && _this.countDownTime < 10) {
          _this.count =_this.countDownTime;
      } else if (_this.countDownTime >= 10) {
          _this.count =_this.countDownTime;
      } else {
          _this.toastDisabled = false;
          clearInterval(_this.myInterval); // 清除js定时器
          _this.count = 3;
          _this.countDownTime = 3; // 重置时间
      }
  },
  },

  created () {
    // 调用应用实例的方法获取全局数据
  },
  onShow () {
    // `this` 指向 vm 实例
    let _this = this;
    wx.getStorage({
      key: 'productTag',
      success (res) {
        console.log(res.data);
        _this.showToast = false;
      },
      fail(error){
        console.log(error);
        _this.myInterval = setInterval(function() {
          _this.doLoop();
        }, 1000); // 一秒执行一次
      }
    })
    _this.mountedHttp();
  }
}