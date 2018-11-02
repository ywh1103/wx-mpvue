import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      // userinfo:{
      //   avatarUrl:"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLcSzldKnicbspvlPYz99g9ohOwBj4ZHJgVasMxxMa3m4bV2aH8LLOmPVbHnYYuR3bHkvqt8JXn7pQ/132",
      //   city:"",
      //   country:"China",
      //   gender:2,
      //   language:"zh_CN",
      //   nickName:"小任性💋💋",
      //   province:"Shanghai",
      // },
      // agentInfo:{},
      // token:"68f40aca-17dd-450f-929f-3682d0532697",
      // agentName:"袁建华",
      // actionInfo:{},
      // customerId:'1',
      // placeholderText:'',
      userinfo:{
        avatarUrl:"",
        city:"",
        country:"",
        gender:'',
        language:"",
        nickName:"",
        province:"",
      },
      agentInfo:{},
      token:"",
      agentName:"",
      actionInfo:{},
      customerId:'',
      placeholderText:'',
  },
  mutations: {
      change(state,payload){
          console.log(state)
          console.log(payload);
          state.userinfo = payload;
      },
      changeAgentInfo(state,payload){
        state.agentInfo = payload;
      },
      changeToken(state,payload){
        state.token = payload;
      },
      changeName(state,payload){
          state.agentName = payload;
      },
      changeActionInfo(state,payload){
        state.actionInfo = payload;
      },
      changeCustomerId(state,payload){
        state.customerId = payload;
      },
      changePlaceholder(state,payload){
        state.placeholderText = payload;
      },
  }
})

export default store