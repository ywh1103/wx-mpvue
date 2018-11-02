import store from '../../store/store'
import contacts from '@/components/contacts'
import state from '@/components/state'
export default {
  data () {
    return {
      motto: 'Hello World',
      isActive:true,
      cientNum:0,
      selectTag:{
        all:true,
        none:false,
        done:false,
      },
      groupsIndex:{
        a:'0',
        b:'1',
        c:'2',
        d:'3',
        e:'4',
        f:'5',
        g:'6',
        h:'7',
        i:'8',
        j:'9',
        k:'10',
        l:'11',
        m:'12',
        n:'13',
        o:'14',
        p:'15',
        q:'16',
        r:'17',
        s:'18',
        t:'19',
        u:'20',
        v:'21',
        w:'22',
        x:'23',
        y:'24',
        z:'25',
        '#':'26',
      },
      stateNum:'',
      scrollIntoView:'A',
      groups: [{
        groupName: 'A',
        users: [
          // {
          //   name: '阿码1',
          //   phone:'13298329131',
          //   headImgUrl: require('../../assets/image/avatar.png'),
          //   agentId: 2,
          // }
        ]
      },
      {
        groupName: 'B',
        users: []
      },
      {
        groupName: 'C',
        users: []
      },
      {
        groupName: 'D',
        users: []
      },
      {
        groupName: 'E',
        users:[],
      },
      {
        groupName: 'F',
        users: []
      },
      {
        groupName: 'G',
        users: []
      },
      {
        groupName: 'H',
        users: []
      },
      {
        groupName: 'I',
        users:[],
      },
      {
        groupName: 'J',
        users:[],
      },
      {
        groupName: 'K',
        users:[],
      },
      {
        groupName: 'L',
        users:[],
      },
      {
        groupName: 'M',
        users:[],
      },
      {
        groupName: 'N',
        users:[],
      },
      {
        groupName: 'O',
        users:[],
      },
      {
        groupName: 'P',
        users:[],
      },
      {
        groupName: 'Q',
        users:[],
      },
      {
        groupName: 'R',
        users:[],
      },
      {
        groupName: 'S',
        users:[],
      },
      {
        groupName: 'T',
        users: []
      },
      {
        groupName: 'U',
        users:[],
      },
      {
        groupName: 'V',
        users:[],
      },
      {
        groupName: 'W',
        users:[],
      },
      {
        groupName: 'X',
        users: []
      },
      {
        groupName: 'Y',
        users:[],
      },
      {
        groupName: 'Z',
        users:[],
      },
      {
        groupName: '#',
        users:[],
      },
    ],
    lists:[
      // {
      //   avatarUrl:require('../../assets/image/avatar.png'),
      //   name:'宋梓媚',
      //   action:'查看了您分享的随e保页面',
      //   date:'2018-10-25 22:38',
      // },
      // {
      //   avatarUrl:require('../../assets/image/avatar.png'),
      //   name:'宋梓媚',
      //   action:'查看了您分享的随e保页面',
      //   date:'2018-10-24 22:38',
      // },
      // {
      //   avatarUrl:require('../../assets/image/avatar.png'),
      //   name:'宋梓媚1',
      //   action:'查看了您分享的随e保页面',
      //   date:'2018-10-7 22:38',
      // },
    ],
      content:[
      //   {
      //   "id": 1,
      //   "agentId": 2,
      //   "openId": "",
      //   "headImgUrl": null,
      //   "nickname": "test",
      //   "name": "name",
      //   "firstChar": "n",
      //   "sex": "1",
      //   "phone": "18017119596",
      //   "birthday": "1999-01-01",
      //   "idNumber": "2222222222233211",
      //   "itime": "2018-10-22T10:18:12.000+0000",
      //   "butType": "0"
      // },{
      //   "id": 1,
      //   "agentId": 2,
      //   "openId": "",
      //   "headImgUrl": null,
      //   "nickname": "test",
      //   "name": "aame",
      //   "firstChar": "a",
      //   "sex": "1",
      //   "phone": "18017119596",
      //   "birthday": "1999-01-01",
      //   "idNumber": "2222222222233211",
      //   "itime": "2018-10-22T10:18:12.000+0000",
      //   "butType": "1"
      // },{
      //   "id": 1,
      //   "agentId": 2,
      //   "openId": "",
      //   "headImgUrl": null,
      //   "nickname": "test",
      //   "name": "ayme",
      //   "firstChar": "a",
      //   "sex": "1",
      //   "phone": "18017119596",
      //   "birthday": "1999-01-01",
      //   "idNumber": "2222222222233211",
      //   "itime": "2018-10-22T10:18:12.000+0000",
      //   "butType": "1"
      // },{
      //   "id": 1,
      //   "agentId": 2,
      //   "openId": "",
      //   "headImgUrl": null,
      //   "nickname": "test",
      //   "name": "syme",
      //   "firstChar": "s",
      //   "sex": "1",
      //   "phone": "18017119596",
      //   "birthday": "1999-01-01",
      //   "idNumber": "2222222222233211",
      //   "itime": "2018-10-22T10:18:12.000+0000",
      //   "butType": "0"
      // },{
      //   "id": 1,
      //   "agentId": 2,
      //   "openId": "",
      //   "headImgUrl": null,
      //   "nickname": "test",
      //   "name": "fyme",
      //   "firstChar": "f",
      //   "sex": "1",
      //   "phone": "18017119596",
      //   "birthday": "1999-01-01",
      //   "idNumber": "2222222222233211",
      //   "itime": "2018-10-22T10:18:12.000+0000",
      //   "butType": "1"
      // },{
      //   "id": 1,
      //   "agentId": 2,
      //   "openId": "",
      //   "headImgUrl": null,
      //   "nickname": "test",
      //   "name": "ayme",
      //   "firstChar": "a",
      //   "sex": "1",
      //   "phone": "18017119596",
      //   "birthday": "1999-01-01",
      //   "idNumber": "2222222222233211",
      //   "itime": "2018-10-22T10:18:12.000+0000",
      //   "butType": "0"
      // },{
      //   "id": 1,
      //   "agentId": 2,
      //   "openId": "",
      //   "headImgUrl": null,
      //   "nickname": "test",
      //   "name": "asyme",
      //   "firstChar": "a",
      //   "sex": "1",
      //   "phone": "18017119596",
      //   "birthday": "1999-01-01",
      //   "idNumber": "2222222222233211",
      //   "itime": "2018-10-22T10:18:12.000+0000",
      //   "butType": "1"
      // },{
      //   "id": 1,
      //   "agentId": 2,
      //   "openId": "",
      //   "headImgUrl": null,
      //   "nickname": "test",
      //   "name": "hyme",
      //   "firstChar": "h",
      //   "sex": "1",
      //   "phone": "18017119596",
      //   "birthday": "1999-01-01",
      //   "idNumber": "2222222222233211",
      //   "itime": "2018-10-22T10:18:12.000+0000",
      //   "butType": "0"
      // },{
      //   "id": 1,
      //   "agentId": 2,
      //   "openId": "",
      //   "headImgUrl": null,
      //   "nickname": "test",
      //   "name": "tyme",
      //   "firstChar": "t",
      //   "sex": "1",
      //   "phone": "18017119596",
      //   "birthday": "1999-01-01",
      //   "idNumber": "2222222222233211",
      //   "itime": "2018-10-22T10:18:12.000+0000",
      //   "butType": "0"
      // }
    ],
    transfromTag:{
      all:'all',
      none:'0',
      done:'1'
    },
    stateNumShow:false,
    }
  },

  components: {
    contacts,
    state
  },

  methods: {
    async mountedHttp(){
      let _this = this;
      let customerListData = await _this.customerListHttp();
      
    },
    tabSwitch(boole){
      let _this = this;
      _this.isActive = boole;
    },
    selectTagFunc(tag){
      let _this = this;
      _this.selectTag={
        all:false,
        none:false,
        done:false,
      }
      _this.selectTag[tag] = true;
      for(var i=0;i<_this.groups.length;i++){
        _this.groups[i].users =[];
      }
      for (let i of _this.content){
        console.log(i);
        if(i.butType == _this.transfromTag[tag]){
          _this.groups[_this.groupsIndex[i.firstChar.toLowerCase()]].users.push(i)
        }
        //全部
        if(tag == 'all'){
          _this.groups[_this.groupsIndex[i.firstChar.toLowerCase()]].users.push(i)
        }
      }
    },
    //客户动态
    async actionListHttp(){
      let _this = this;
      let data = {};
      let actionListData = await _this.$Http.post('/rest/customer/action/list',data,{token:store.state.token});
      console.log(actionListData);
      // let test = [
      //   {
      //     headImgUrl:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKQNUgjtVPmhic6ksyABLnbpEicLVYhwV9skd64Dq6TFO3fZWcNMwAicicez4BTHCuRibM9ZVEqAqnD8RA/132",
      //     action:"1",
      //     itime:"2018-11-01T02:03:18.000+0000",
      //     productName:"随e宝",
      //   },
      //   {
      //     headImgUrl:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKQNUgjtVPmhic6ksyABLnbpEicLVYhwV9skd64Dq6TFO3fZWcNMwAicicez4BTHCuRibM9ZVEqAqnD8RA/132",
      //     action:"1",
      //     itime:null,
      //     productName:"随e宝",
      //   }
      // ]
      var day = _this.$dayjs().format('YYYY-MM-DD');//今天的日期；
      var lastDay = _this.$dayjs(day).subtract(1, 'days').format('YYYY-MM-DD');//昨天日期
      _this.lists = actionListData.content.map((item) => {
        // _this.lists = test.map((item) => {
        // item.itime = this.$dayjs(item.itime).format('YYYY-MM-DD HH:mm');
        if(item.itime){
          if(_this.$dayjs(this.$dayjs(item.itime).format('YYYY-MM-DD')).isSame(day)){
            item.itime = this.$dayjs(item.itime).format('HH:mm');
          } else if(_this.$dayjs(this.$dayjs(item.itime).format('YYYY-MM-DD')).isSame(lastDay)){
            item.itime = '昨天 ' + this.$dayjs(item.itime).format('HH:mm');
          }else{
            item.itime = this.$dayjs(item.itime).format('YYYY-MM-DD HH:mm');
          }
        }
        item.action = item.action == '1' ? '浏览' : item.action == '2' ? '购买' : '未知';
        return item;
      })
      return actionListData;
    },
    //跳转到客户详情
    gotoClientDetail(id){
      let _this = this;
      store.commit('changeCustomerId',id);
      wx.navigateTo({
        url:'/pages/client-detail/main'
      })
    },
    async customerListHttp(){
      let _this = this;
      let customerListData = await _this.$Http.get('/rest/customer/list',{},{token:store.state.token});
      console.log(customerListData);
      _this.cientNum = customerListData.content.length;
      _this.content = customerListData.content;
      //全部客户
      for(var i=0;i<_this.groups.length;i++){
        _this.groups[i].users =[];
      }
      for (let i of _this.content){
        console.log(i);
        _this.groups[_this.groupsIndex[i.firstChar.toLowerCase()]].users.push(i);
      }
      return customerListData;
    },
  },
  watch:{
    isActive(newVal,oldVal){
      let _this = this;
      console.log(newVal)
      console.log(oldVal)
      if(!newVal){
        _this.actionListHttp();
      }else{
        _this.customerListHttp();
      }
    },
  },
  created () {
    // 调用应用实例的方法获取全局数据
  },
  onShow () {
    // `this` 指向 vm 实例
    let _this = this;
    console.log(store.state.actionInfo);
    _this.stateNum = store.state.actionInfo.customerActionDay;
    if(store.state.actionInfo.customerActionDay > 0){
      _this.stateNumShow = true;
    }
    _this.mountedHttp();
  }
}