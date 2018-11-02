import store from '../../store/store'
export default {
  data () {
    return {
      coinNumber:'0',
      paddingCoin:0,
      isDisabled:false,
      popMoney:'0',
      myMoney:'0',
      popShow:false,
      redpacketShow:false
    }
  },

  components: {
  },

  methods: {
    //抽奖
    async lottery(type){
      console.log(type);
      let _this = this;
      let goldDrawData = await _this.goldDrawHttp(type);
      _this.popMoney = goldDrawData.content/100;
      _this.popShow = true;
      let goldAddData = await _this.goldAddHttp();
      let actionInfoData = await _this.actionInfoHttp();
      _this.coinNumber = actionInfoData.content.goldAmount;
    },
    //领取金币
    async receiveGold(){
      let _this = this;
      await _this.goldReceiveHttp();
      let actionInfoData = await _this.actionInfoHttp();
      _this.coinNumber = actionInfoData.content.goldAmount;
    },
    //金币明细
    gotoCoinDetail(){
      let _this = this;
      wx.navigateTo({
        url:'/pages/coin-detail/main'
      })
    },
    //我的红包
    async myRedPacket(){
      let _this = this;
      let bonusListData = await _this.bonusListHttp();
      _this.myMoney = bonusListData.content.bonus/100;
      _this.redpacketShow = true;
    },
    //提现规则
    gotoRule(){
      wx.navigateTo({
        url:'/pages/rule/main'
      })
    },
    //红包明细
    gotoBonusDetail(){
      wx.navigateTo({
        url:'/pages/packet-detail/main'
      })
    },
    // 提现
    gotoDraw(){
      wx.navigateTo({
        url:'/pages/packet-withdraw/main'
      })
    },
    close(type){
      let _this = this;
      _this[type] = false;
    },
    async goldReceiveHttp(){
      let _this = this;
      let goldReceiveData = await _this.$Http.post('/rest/gold/receive',{},{token:store.state.token});
      console.log(goldReceiveData);
      _this.isDisabled = true;
      _this.paddingCoin = 0;
      return goldReceiveData;
    },
    async goldAddHttp(){
      let _this = this;
      let data = {
        subtype:'2'//抽奖
      };
      let goldAddData = await _this.$Http.post('/rest/gold/add',data,{token:store.state.token});
      console.log(goldAddData);
    },
    async goldDrawHttp(type){
      let _this = this;
      let data = {
        type:type
      };
      let goldDrawData = await _this.$Http.post('/rest/gold/draw',data,{token:store.state.token});
      console.log(goldDrawData);
      return goldDrawData;
    },
    async actionInfoHttp(){
      let _this = this;
      let actionInfoData = await _this.$Http.get('/rest/agent/action/info',{},{token:store.state.token});
      console.log(actionInfoData);
      store.commit('changeActionInfo',actionInfoData.content);
      return actionInfoData;
    },
    async bonusListHttp(){
      let _this = this
      let bonusListData = await _this.$Http.get('/rest/bonus/list',{},{token:store.state.token});
      console.log(bonusListData);
      return bonusListData;
    },
  },

  created () {
    // 调用应用实例的方法获取全局数据
  },
  onShow () {
    // `this` 指向 vm 实例
    let _this = this;
    console.log(store);
    // wx.showToast({
    //   title: "网络出错，稍后再试",
    //   icon: "none"
    // });
    // return;
    _this.coinNumber = store.state.actionInfo.goldAmount;
    _this.paddingCoin = store.state.actionInfo.goldReceive;
    if(_this.paddingCoin <= 0){
      _this.isDisabled = true
    }else{
      _this.isDisabled = false;
    }
  }
}