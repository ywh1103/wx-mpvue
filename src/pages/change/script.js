import store from '../../store/store'
export default {
  data () {
    return {
      changeInfo:'',
      placeholderText:'请输入联系电话',
      type:'',
      regularObj:{
        name:/^[a-zA-Z.,· \u4e00-\u9fa5]{2,40}$/,
        phone:/^1\d{10}$/,
      },
      transfromType:{
        '姓名':'name',
        '联系电话':'phone',
        '身份证号码':'idNumber'
      },
    }
  },

  components: {
  },

  methods: {
    save(type){
      let _this = this;
      console.log(type);
      if(type == 'idNumber'){
        if(!isCardNo(_this.changeInfo)){
          wx.showToast({
            title:'请填写正确的信息',
            icon:'none',
          })
          return;
        }
      }else{
        if(!this.regularObj[type].test(this.changeInfo)){
          wx.showToast({
              title:'请填写正确的信息',
              icon:'none',
          })
          return;
        }
      }
      console.log('save');
      let data = {
        'id':store.state.customerId,
      }
      data[type] = _this.changeInfo;
      _this.edithHttp(data);

    },
    deleteFunc(){
      console.log(9)
      let _this = this;
      _this.changeInfo = '';
    },
    async edithHttp(data){
      let _this = this;
      let editData = await _this.$Http.post('/rest/customer/edit',data,{token:store.state.token});
      console.log(editData);
      wx.navigateBack({
        delta: 1
      })
      return editData;
    },
  },

  created () {
    // 调用应用实例的方法获取全局数据
  },
  onShow () {
    // `this` 指向 vm 实例
    let _this = this;
    _this.changeInfo = '';
    _this.placeholderText = '请输入'+store.state.placeholderText;
    _this.type = _this.transfromType[store.state.placeholderText];
  }
}
// 验证身份证
var powers = new Array(
  "7",
  "9",
  "10",
  "5",
  "8",
  "4",
  "2",
  "1",
  "6",
  "3",
  "7",
  "9",
  "10",
  "5",
  "8",
  "4",
  "2"
);
var parityBit = new Array(
  "1",
  "0",
  "X",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2"
);
function isCardNo(_id) {
  _id = _id.toUpperCase();
  if (_id.length != 18) {
    return false;
  }
  // var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  // return pattern.test(card);
  _id = _id + "";
  var _num = _id.substr(0, 17);
  var _parityBit = _id.substr(17);
  var _power = 0;
  for (var i = 0; i < 17; i++) {
    //校验每一位的合法性

    if (_num.charAt(i) < "0" || _num.charAt(i) > "9") {
      return false;
      break;
    } else {
      //加权

      _power += parseInt(_num.charAt(i)) * parseInt(powers[i]);
      // //设置性别
      // if (i == 16 && parseInt(_num.charAt(i)) % 2 == 0) {
      //     sex = "female";
      // } else {
      //     sex = "male";
      // }
    }
  }
  //取模
  var mod = parseInt(_power) % 11;
  if (parityBit[mod] == _parityBit) {
    return true;
  }
  return false;
}
//根据身份证号获取生日、年龄、性别
function IdCard(UUserCard, num) {
  if (num == 1) {
    //获取出生日期410727199311033228
    var birth =
      UUserCard.substring(6, 10) +
      "-" +
      UUserCard.substring(10, 12) +
      "-" +
      UUserCard.substring(12, 14);
    return birth;
  }
  if (num == 2) {
    //获取性别
    if (parseInt(UUserCard.substr(16, 1)) % 2 == 1) {
      //男
      return "男";
    } else {
      //女
      return "女";
    }
  }
  if (num == 3) {
    //获取年龄
    var myDate = new Date();
    var month = myDate.getMonth() + 1;
    var day = myDate.getDate();
    var age = myDate.getFullYear() - UUserCard.substring(6, 10) - 1;
    if (
      UUserCard.substring(10, 12) < month ||
      (UUserCard.substring(10, 12) == month &&
        UUserCard.substring(12, 14) <= day)
    ) {
      age++;
    }
    return age;
  }
}