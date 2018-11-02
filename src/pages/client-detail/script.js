
import store from '../../store/store'
export default {
  data () {
    return {
      headImgUrl:require('../../assets/image/avatar.png'),
      name:'',
      nickname:'',
      phone:'',
      states:[
        // {
        //   title:'查看了您分享的随e保',
        //   date:'2018-10-9',
        //   time:'23:42',
        //   details:[
        //     {
        //       detail:'住院保额：10万',
        //     },
        //     {
        //       detail:'门诊保额：5万'
        //     }
        //   ],
        // },
        // {
        //   title:'购买了一份保单',
        //   date:'2018-10-9',
        //   time:'23:42',
        // }
      ],
      id:'',
    }
  },

  components: {
  },

  methods: {
    async mountedHttp(){
      let _this = this;
      let customerInfoData = await _this.customerInfoHttp();
      _this.handelCustomerInfoData(customerInfoData.content);
      let actionListData = await _this.actionListHttp();
      _this.handelactionListData(actionListData.content);
    },
    async customerInfoHttp(){
      let _this = this;
      let customerInfoData = await _this.$Http.get(`/rest/customer/info/${store.state.customerId}`,{},{token:store.state.token});
      console.log(customerInfoData);
      _this.id = customerInfoData.content.id;
      return customerInfoData;
    },
    handelCustomerInfoData(customerInfo){
      let _this = this;
      _this.headImgUrl = customerInfo.headImgUrl;
      _this.name = customerInfo.name;
      _this.nickname = customerInfo.nickname;
      _this.phone = customerInfo.phone;
    },
    //客户动态
    async actionListHttp(){
      let _this = this;
      let data = {
        customerId:store.state.customerId
      };
      let actionListData = await _this.$Http.post('/rest/customer/action/list',data,{token:store.state.token});
      console.log(actionListData);
      return actionListData;
    },
    handelactionListData(actionList){
      let _this = this;
      var day = _this.$dayjs().format('YYYY-MM-DD');//今天的日期；
      var lastDay = _this.$dayjs(day).subtract(1, 'days').format('YYYY-MM-DD');//昨天日期
      _this.states = actionList.map((item) => {
        item.action = item.action == '1' ? '浏览' : item.action == '2' ? '购买' : '未知';
        // item.itime = _this.$dayjs(item.itime).format('YYYY-MM-DD HH:mm:ss');
        if(item.itime){
          if(_this.$dayjs(this.$dayjs(item.itime).format('YYYY-MM-DD')).isSame(day)){
            item.itime = this.$dayjs(item.itime).format('HH:mm');
          } else if(_this.$dayjs(this.$dayjs(item.itime).format('YYYY-MM-DD')).isSame(lastDay)){
            item.itime = '昨天 ' + this.$dayjs(item.itime).format('HH:mm');
          }else{
            item.itime = this.$dayjs(item.itime).format('YYYY-MM-DD HH:mm');
          }
        }
        return item;
      })
    },
    //编辑信息
    gotoClientInfo(){
      wx.navigateTo({
        url:'/pages/client-info/main'
      })
    },
    //已购保单
    gotoPolicy(){
      store.commit('changeCustomerId',this.id);
      wx.navigateTo({
        url:'/pages/client-policy/main'
      })
    },
  },

  created () {
    // 调用应用实例的方法获取全局数据
  },
  onShow () {
    // `this` 指向 vm 实例
    let _this = this;
    // return
    console.log(store.state.customerId)
    _this.mountedHttp();
  }
}