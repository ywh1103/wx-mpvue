import store from '../../store/store'
export default {
  data () {
    return {
      policyList:[
        // {
        //   productName:'康e保好医生',
        //   status:'保障中',
        //   policyholderName:'王慧萍',
        //   proposalDate:'2018-07-23 09:34:22',
        //   effectiveDate:'2018-08-24 00:00:00',
        //   expiredDate:'2019-08-23 23:59:59'
        // },
        // {
        //   productName:'康e保定制版',
        //   status:'已失效',
        //   policyHolderName:'王慧萍',
        //   proposalDate:'2018-07-23 09:34:22',
        //   effectiveDate:'2018-08-24 00:00:00',
        //   expiredDate:'2019-08-23 23:59:59'
        // },
      ],
    }
  },

  components: {
  },

  methods: {
    async mountedHttp(){
      let _this = this;
      let listData = await _this.listHttp();
      _this.policyList = listData.content.map((item) => {
        if(item.proposalDate){
          item.proposalDate = _this.$dayjs(item.proposalDate).format('YYYY-MM-DD HH:mm:ss');
        }
        if(item.effectiveDate){
          item.effectiveDate = _this.$dayjs(item.effectiveDate).format('YYYY-MM-DD');
        }
        if(item.expiredDate){
          item.expiredDate = _this.$dayjs(item.expiredDate).format('YYYY-MM-DD');
        }
        item.status = item.status == 1 ? '保障中' : item.status == 2 ? '已失效' : '未知';
        return item;
      })
    },
    async listHttp(){
      let _this = this;
      let listData = await _this.$Http.get(`/rest/customer/product/list/${store.state.customerId}`,{},{token:store.state.token});
      console.log(listData);
      return listData;
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
  },
  onShow () {
    // `this` 指向 vm 实例
    let _this = this;
    // return;
    _this.mountedHttp();
  }
}