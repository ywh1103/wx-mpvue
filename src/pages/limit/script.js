import store from '../../store/store'
export default {
  data () {
    return {
      limitActivity:[
        {
          activityTitle:'首次分享x产品到朋友圈',
          coinNum:'5',
          status:'未完成'
        },
        {
          activityTitle:'好友首次通过链接购买x产品',
          coinNum:'20',
          status:'未完成'
        }
      ],
      productName:'',
      productId:'',
      agentId:'',
    }
  },

  components: {
  },

  methods: {
    async mountedHttp(){
      let _this = this;
      let taskInfoData = await _this.taskInfoHttp();
      _this.handelTaskInfoData(taskInfoData.content);
    },
    // 6.取得代理人任务数据
    async taskInfoHttp(){
      let _this = this;
      let taskInfoData = await _this.$Http.get('/rest/agent/task/info',{},{token:store.state.token});
      console.log(taskInfoData);
      return taskInfoData;
    },
    handelTaskInfoData(taskInfo){
      let _this = this;
      _this.limitActivity[0].activityTitle=`首次分享${taskInfo.productName}产品到朋友圈`;
      _this.limitActivity[1].activityTitle=`好友首次通过链接购买${taskInfo.productName}产品`;
      _this.limitActivity[0].status=taskInfo.limitTimeShare==1?'已完成':'未完成';
      _this.limitActivity[1].status=taskInfo.limitTimeBuy==1?'已完成':'未完成';
      _this.productName = taskInfo.productName;
      _this.productId = taskInfo.productId;
      console.log('store.state.agentInfo.agentId');
      console.log(store.state.agentInfo.agentId)
      _this.agentId = store.state.agentInfo.agentId;
    },
  },

  created () {
    // 调用应用实例的方法获取全局数据;
  },
  onShow () {
    // `this` 指向 vm 实例
    let _this = this;
    _this.mountedHttp();
  }
}