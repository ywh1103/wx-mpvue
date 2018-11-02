
// import  DConfirm from '@/components/confirm';
import store from '../../store/store'
export default {
  data () {
    return {
      agentInfo:{
        imgUrl:require('../../assets/image/avatar.png'),
        name:'杨文慧'
      },
      totleInfo:{
        money:'0',
        people:'0'
      },
      newAdd:false,
      newPeople:'1110',
      newPeopleShow:false,
      // shareProduct:'保温杯版',
      signShow:false,
      pageView:'0',
      buyAmount:'0',
      isNew:true,
      isDayShare:false,
      isDayCheck:false,
      popNumber:'5',
      isFirstSign:false,
      isFirstuck:false,
      isFirstShare:false,
      taskInfo:{},
      products:[],
      actionStep:0,
      limitImgUrl:'',
    }
  },

  components: {
  },

  methods: {
    async mountedHttp(){
      let _this = this;
      let actionInfoData = await _this.actionInfoHttp();
      let taskInfoData = await _this.taskInfoHttp();
      let productListData = await _this.productListHttp();
      _this.products = productListData.content;
    },
    async sign(type,state,num){
      console.log(type)
      let _this = this;
      let reqData = {
        subtype:type
      }
      await _this.goldAddHttp(reqData,state,num);
      await _this.actionInfoHttp();
    },
    gotoShare(){
      wx.navigateTo({
        url:'/pages/product/main'
      })
    },
    gotoLimit(){
      wx.navigateTo({
        url:'/pages/limit/main'
      })
    },
    gotoLuck(){
      wx.navigateTo({
        url:'/pages/coin/main'
      })
    },
    goToPage(page){
      console.log(page);
      wx.navigateTo({
        url:'/pages/'+page+'/main'
    })
    },
    async actionInfoHttp(){
      let _this = this;
      let actionInfoData = await _this.$Http.get('/rest/agent/action/info',{},{token:store.state.token});
      console.log(actionInfoData);
      store.commit('changeActionInfo',actionInfoData.content);
      _this.totleInfo.money = actionInfoData.content.goldAmount;
      _this.totleInfo.people = actionInfoData.content.customerAction;
      _this.pageView = actionInfoData.content.pageView;
      _this.buyAmount = actionInfoData.content.buyAmount;
      if(actionInfoData.content.goldReceive > 0){
        _this.newAdd = true;
      }else{
        _this.newAdd = false;
      }
      if(actionInfoData.content.customerActionDay > 0){
        _this.newPeopleShow = true;
        _this.newPeople = actionInfoData.content.customerActionDay;
      }else{
        console.log('customerActionDay111')
        _this.newPeopleShow = false;
      }
      return actionInfoData;
    },
    async taskInfoHttp(){
      let _this = this;
      let taskInfoData = await _this.$Http.get('/rest/agent/task/info',{},{token:store.state.token});
      console.log(taskInfoData);
      let taskInfo = taskInfoData.content;
      _this.taskInfo = taskInfoData.content;
      _this.limitImgUrl = taskInfo.imageUrl;
      _this.isFirstSign = taskInfo.firstCheck == '1' ? true : false;
      _this.isFirstuck = taskInfo.firstLuck == '1' ? true : false;
      _this.isFirstShare = taskInfo.firstShare == '1' ? true : false;
      _this.isDayShare = taskInfo.dayShare == '1' ? true : false;
      _this.isDayCheck = taskInfo.dayCheck == '1' ? true : false;
      if(taskInfo.firstCheck == 1 && taskInfo.firstLuck == 1 && taskInfo.firstShare == 1){
        _this.isNew = false;
      }
      if(taskInfo.limitTimeBuy == 1 && taskInfo.limitTimeShare == 0){
        _this.actionStep = 1;
      }else if(taskInfo.limitTimeBuy == 0 && taskInfo.limitTimeShare == 1){
        _this.actionStep = 1;
      }else if(taskInfo.limitTimeBuy == 1 && taskInfo.limitTimeShare == 1){
        _this.actionStep = 2;
      }
      return taskInfoData;
    },
    async productListHttp(){
      let _this = this;
      let productListData = await _this.$Http.get('/rest/product/list',{},{token:store.state.token});
      console.log(productListData);
      return productListData;
    },
    async goldAddHttp(data,state,num){
      let _this = this;
      let goldAddData = await _this.$Http.post('/rest/gold/add',data,{token:store.state.token});
      console.log(goldAddData);
      _this[state] = true;
      if(state == 'isFirstSign'){
        _this.isDayCheck = true;
      }
      if(state == 'isDayCheck'){
        _this.isFirstSign = true;
      }
      _this.signShow = true;
      _this.popNumber = goldAddData.content;
      // if(num){
      //   _this.popNumber = num;
      // }else{
      //   _this.popNumber = 5;
      // }
      setTimeout(() => {
        _this.signShow = false;
      }, 2000);
      return goldAddData;
    },
    // getUserInfo(){
    //   wx.login({
    //     success:() => {
    //       wx.getUserInfo({
    //         success:(res) => {
    //           console.log(res)
    //           this.agentInfo.imgUrl = res.userInfo.avatarUrl;
    //         }
    //       })
    //     }
    //   })
    // },
  },

  created () {
    // 调用应用实例的方法获取全局数据
  },
  onShow () {
    // `this` 指向 vm 实例
    // this.getUserInfo();
    let _this = this;
    console.log(store.state)
    this.agentInfo.imgUrl = store.state.userinfo.avatarUrl;
    this.agentInfo.name = store.state.agentName;
    _this.mountedHttp();
  }
}