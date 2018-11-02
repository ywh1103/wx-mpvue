
import store from '../../store/store'
export default {
  data () {
    return {
      withdrawMoney:'',
      allMoney:'0',
      errorTip:true,
      isDisabled:false,
      popShow:false,
      isSuccess:false,
    }
  },

  components: {
  },

  methods: {
    async mountedHttp(){
      let _this = this;
      let bonusListData = await _this.bonusListHttp();
      _this.allMoney = bonusListData.content.bonus/100;
    },
    withdrawInput(){
      let _this = this;
      console.log(_this.withdrawMoney);
      if(_this.withdrawMoney>_this.allMoney){
        _this.errorTip = false;
        _this.isDisabled = true;
      }else{
        _this.errorTip = true;
        _this.isDisabled = false;
      }
    },
    //全部提取
    all(){
      let _this = this;
      _this.withdrawMoney = _this.allMoney;
    },
    //确认体现
    async insureDraw(){
      let _this = this;
      let data = {
        bonus:_this.withdrawMoney
      };
      _this.popShow = true;
      let bonusDrawData = await _this.bonusDrawHttp(data);
      _this.isSuccess = true;
    },
    close(){
      let _this = this;
      _this.popShow = false;
    },
    async bonusListHttp(){
      let _this = this;
      let bonusListData = await _this.$Http.get('/rest/bonus/list',{},{token:store.state.token});
      console.log(bonusListData);
      return bonusListData;
    },
    async bonusDrawHttp(data){
      let _this = this;
      let bonusDrawData = await _this.$Http.post('/rest/bonus/draw',data,{token:store.state.token});
      console.log(bonusDrawData);
      return bonusDrawData;
    },
  },

  created () {
    // 调用应用实例的方法获取全局数据
  },
  onShow () {
    // `this` 指向 vm 实例
    let _this = this;
    _this.mountedHttp();
  }
}