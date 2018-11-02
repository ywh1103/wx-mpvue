import store from '../../store/store'
export default {
  data () {
    return {
      headImgUrl:require('../../assets/image/avatar.png'),
      name:'',
      phone:'',
      idNumber:'',
      sexIndex:'',
      sexArr:['男','女'],
      birthdayDate:'',
    }
  },

  components: {
  },

  methods: {
    async mountedHttp(){
      let _this = this;
      let customerInfoData = await _this.customerInfoHttp();
      _this.handelCustomerInfoData(customerInfoData.content);
    },
    handlePickerChange (e) {    
      console.log(e)
      let _this = this;
      _this.sexIndex = e.target.value;
    },
    bindDateChange(e){
      console.log(e);
      let _this = this;
      _this.birthdayDate = e.target.value;
    },
    //修改信息
    gotoChange(type){
      let _this = this;
      store.commit('changePlaceholder',type);
      wx.navigateTo({
        url:'/pages/change/main'
      })
    },
    async customerInfoHttp(){
      let _this = this;
      let customerInfoData = await _this.$Http.get(`/rest/customer/info/${store.state.customerId}`,{},{token:store.state.token});
      console.log(customerInfoData);
      return customerInfoData;
    },
    handelCustomerInfoData(customerInfo){
      let _this = this;
      _this.headImgUrl = customerInfo.headImgUrl;
      _this.name = customerInfo.name;
      _this.idNumber = customerInfo.idNumber;
      _this.phone = customerInfo.phone;
      _this.sexIndex = customerInfo.sex;
      _this.birthdayDate = customerInfo.birthday;
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