
import store from '../../store/store'
export default {
  data () {
    return {
      redPacket:'0',
      details:[
        {
          // type:'分享产品',
          // itime:'2018-10-11 18:42:20',
          // bonus:'+1500'
        },
      ],
      transfromType:{
        1:'入金',
        2:'出金'
      },
    }
  },

  components: {
  },

  methods: {
    async mountedHttp(){
      let _this = this;
      let bonusListData = await _this.bonusListHttp();
      _this.handelbonusListData(bonusListData.content);
    },
    async bonusListHttp(){
      let _this = this;
      let bonusListData = await _this.$Http.get('/rest/bonus/list',{},{token:store.state.token});
      console.log(bonusListData);
      return bonusListData;
    },
    handelbonusListData(bonusList){
      let _this = this;
      _this.redPacket = bonusList.bonus/100;
      _this.details = bonusList.list.map((item) => {
        if(item.itime){
          item.itime = _this.$dayjs(item.itime).format('YYYY-MM-DD HH:mm:ss');
        }
        item.bonus = item.type == '1' ? '+'+item.bonus/100 : '-'+item.bonus/100;
        item.title = item.type == '1' ? '抽奖' : '提现';
        item.type = _this.transfromType[item.type];
        return item;
      })
    },
  },

  created () {
    // 调用应用实例的方法获取全局数据
  },
  onShow () {
    // `this` 指向 vm 实例
    let _this = this;
    _this.mountedHttp()
  }
}