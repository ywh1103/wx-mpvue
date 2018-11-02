
import store from '../../store/store'
export default {
  data () {
    return {
      coin:'0',
      details:[
        // {
        //   type:'分享产品',
        //   itime:'2018-10-11 18:42:20',
        //   gold:'+1500'
        // },
      ],
      transfromType:{
        1:'分享产品',
        2:'购买保单',
        3:'抽奖'
      },
    }
  },

  components: {
  },

  methods: {
    async mountedHttp(){
      let _this = this;
      let goldListData = await _this.goldListHttp();
      _this.handelGoldList(goldListData.content);
      console.log(_this.details);
    },
    async goldListHttp(){
      let _this = this;
      let goldListData = await _this.$Http.get('/rest/gold/list',{},{token:store.state.token});
      console.log(goldListData);
      return goldListData;
    },
    handelGoldList(goldList){
      let _this = this;
      _this.coin = goldList.gold;
      _this.details = goldList.list.map((item) => {
        item.type = _this.transfromType[item.type];
        if(item.itime){
          item.itime = _this.$dayjs(item.itime).format('YYYY-MM-DD HH:mm:ss');
        }
        item.gold = item.gold>0?'+'+item.gold:item.gold;
        return item;
      });
    },
  },

  created () {
    // 调用应用实例的方法获取全局数据
  },
  onShow () {
    // `this` 指向 vm 实例
    let _this = this;
    // let list = [{
    //   "id": null,
    //   "agentId": 2,
    //   "type": 1,
    //   "subType": null,
    //   "receive": null,
    //   "productId": null,
    //   "sourceUser": null,
    //   "gold": 15,
    //   "itime": null
    // }, {
    //   "id": null,
    //   "agentId": 2,
    //   "type": 3,
    //   "subType": null,
    //   "receive": null,
    //   "productId": null,
    //   "sourceUser": null,
    //   "gold": -10,
    //   "itime": null
    // }]
    // _this.details = list.map((item) => {
    //   item.type = _this.transfromType[item.type];
    
    //   return item;
    // })
    // console.log(_this.details)
    _this.mountedHttp();
  }
}