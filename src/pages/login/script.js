
import store from '../../store/store'
export default {
  data () {
    return {
        info:{
            // userName:'袁建华',
            // jobNumber:'8611000498',
            // phone:'13298329131',
            // authCode:'',
            // verifyCode:''
            userName:'',
            jobNumber:'',
            phone:'',
            verifyCode:''
        },
        verifyNull:{
            userName:'',
            jobNumber:'',
            phone:'',
            authCode:'',
            verifyCode:''
        },
        regularObj:{
            userName:/^[a-zA-Z.,· \u4e00-\u9fa5]{2,40}$/,
            jobNumber:/^[0-9]{1,50}$/,
            phone:/^1\d{10}$/,
            authCode:/^[\s\S]{2,5}$/,
            verifyCode:/^[0-9]{1,10}$/,
        },
        regularTag:{
            userName:false,
            jobNumber:false,
            phone:false,
            authCode:false,
            verifyCode:false,
        },
        transfromRegObj:{
            userName:'姓名',
            jobNumber:'工号',
            phone:'手机号',
            authCode:'图形验证码',
            verifyCode:'验证码'
        },
        placeholder:{
            userName:'姓名',
            jobNumber:'工号',
            phone:'手机号',
            authCode:'图形验证码',
            verifyCode:'验证码'
        },
        authImgUrl:'',
        isDisabled:true,
        count:'60',
        sendCodeShow:true,
        countDownTime:60,
        myInterval:null,
        token:'',
        toastShow:false,
    }
  },

  components: {
  },

  methods: {
    async mountedHttp(){
        let _this = this;
        wx.login({
            success (res) {
                console.log(res)
              if (res.code) {
                _this.loginHttp(res.code);
              } else {
                console.log('登录失败！' + res.errMsg);
              }
            }
        })
    },
    inputBlur(blurName){
        let _this = this;
        console.log(blurName);
        this.regularTag[blurName] = !this.regularObj[blurName].test(this.info[blurName]);
        // if(!this.regularObj[blurName].test(this.info[blurName])){
        //     // this.$message.toast('请填写正确的'+this.transfromRegObj[inputName+'Reg']+'信息');
        //     wx.showToast({
        //         title:'请填写正确的'+this.transfromRegObj[blurName],
        //         icon:'none',
        //     })
        //     return;
        // }
    },
    inputFocus(focusName){
        let _this = this;
        console.log('focusName')
        console.log(focusName)
        this.regularTag[focusName] = false;
        // _this.verifyNull[focusName] = '';
    },
    inputphone(){
        let _this = this;
    },
    //获得图形验证码
    async authcodeHttp(){
        let _this = this;
        console.log(_this.token);
        let authcodeData = await _this.$Http.get('/rest/common/authcode',{},{token:_this.token});
        console.log(authcodeData);
        setTimeout(() => {
             _this.authImgUrl = `data:image/png;base64,${authcodeData.content}`;
        }, 100);
        return authcodeData
    },
    async getSms(){
        let _this = this;
        if(!this.regularObj.phone.test(this.info.phone)){
            _this.regularTag.phone = true;
            return;
        }
        let smsSendData = await _this.smsSendHttp();
        // return;
        _this.successSendCode();
    },
    //发送短信
    async smsSendHttp(){
        let _this = this;
        let data = {
            mobile:_this.info.phone,
            authCode:_this.info.authCode
        }
        let smsSendData = await _this.$Http.post('/rest/common/sms/send',data,{token:_this.token});
        console.log(smsSendData);
        return smsSendData;
    },

    successSendCode(){
        let _this = this;
        _this.sendCodeShow = false;
        console.log(_this.countDownTime);
        // return;
        _this.myInterval = setInterval(function() {
            _this.doLoop()
        }, 1000); // 一秒执行一次
    },
    doLoop(){
        let _this = this;
        _this.countDownTime--
        if (_this.countDownTime > 0 && _this.countDownTime < 10) {
            // btn.val('重新获取 0' + _this.countDownTime + 's')
            _this.count ='0'+_this.countDownTime;
        } else if (_this.countDownTime >= 10) {
            // btn.val('重新获取 ' + _this.countDownTime + 's')
            _this.count =_this.countDownTime;
        } else {
            _this.sendCodeShow = true;
            clearInterval(_this.myInterval); // 清除js定时器
            // btn.prop('disabled', false)
            // btn.val('发送验证码')
            _this.count = 60;
            _this.countDownTime = 60; // 重置时间
        }
    },
    //验证短信验证码
    async smsCheckHttp(){
        let _this = this;
        let data = {
            mobile:_this.info.phone,
            captcha:_this.info.verifyCode
        }
        let smsCheckData = await _this.$Http.post('/rest/common/sms/check',data,{token:_this.token});
        console.log(smsCheckData);
        return smsCheckData;
    },
    async onGotUserInfo(e){
        let _this = this;
        for(var i in _this.info){
            console.log(_this.info[i])
            if(_this.info[i] == ''){
                wx.showToast({
                    title:'请填写完整信息',
                    icon:'none',
                })
            }
        }
        for(var j in this.regularTag){
            console.log(this.regularTag[j])
            if(this.regularTag[j]){
                wx.showToast({
                    title:'请填写正确的'+this.transfromRegObj[j],
                    icon:'none',
                })
                return;
            }
        }
        console.log(e);
         //验证短信验证码
        await _this.smsCheckHttp();
        console.log('验证短信验证码成功')
        // return;
        // 1.代理人微信信息的写入;
        let addinfoData = await _this.addinfoHttp(e.target);
        store.commit('change',e.target.userInfo);
        console.log(store.state.userinfo);
        // 4.取得代理人信息
        let infoData = await _this.infoHttp();
        console.log(infoData);
        store.commit('changeAgentInfo',infoData.content);
        //如果没有代理人信息，则需进行 3.代理人基本信息绑定，然后进入首页；
        //如果存在代理人信息，则更新store中的代理人姓名，然后进入首页；
        if(infoData.content == {} || !infoData.content){
            console.log('infoHttpnone');
            let baseInfoData = await _this.baseInfoHttp();
            console.log(baseInfoData);
            console.log('baseInfoData');
            // return;
            store.commit('changeName',_this.info.userName);
            wx.redirectTo({
                url:'/pages/index/main'
            })
        }else{
            console.log('infoHttp');
            store.commit('changeName',infoData.content.userName);
            wx.redirectTo({
                url:'/pages/index/main'
            })
        }
    },
    async accreditInfo(e){
        let _this = this;
        console.log(e)
        // 1.代理人微信信息的写入;
        let addinfoData = await _this.addinfoHttp(e.target);
        store.commit('change',e.target.userInfo);
        console.log(store.state.userinfo);
        wx.redirectTo({
            url:'/pages/index/main'
        })
    },
    async baseInfoHttp(){
        let _this = this;
        let data = {
            userName:_this.info.userName,
            jobNumber:_this.info.jobNumber,
            phone:_this.info.phone
        }
        let header = {
            token:_this.token
        }
        let baseInfoData = await _this.$Http.post('/rest/agent/add/baseInfo',data,header);
        console.log('baseInfo');
        return baseInfoData;
    },
    async infoHttp(){
        let _this = this;
        let infoData = await _this.$Http.get('/rest/agent/base/info',{},{token:_this.token});
        return infoData;
    },
    async addinfoHttp(target){
        let data={
            encryptedData:target.encryptedData,
            signature:target.signature,
            iv:target.iv,
            rawData:target.rawData
        };
        let header ={
            'token':this.token
        }
        let addinfoData = await this.$Http.post('/rest/agent/add/userInfo',data,header);
        console.log(addinfoData);
        return addinfoData
    },
    async loginHttp(code){
        let _this = this;
        let data={
            code:code
        }

        let loginData = await _this.$Http.post('/rest/agent/login',data);
        // wx.showToast({
        //     title: "success",
        //     icon: "none"
        //   });
        //   return
        console.log(loginData);
        _this.token = loginData.content.token;
        store.commit('changeToken',loginData.content.token);
        let authcodeData = await _this.authcodeHttp();

        // 4.取得代理人信息;
        let infoData = await _this.infoHttp();
        console.log(infoData);
        store.commit('changeAgentInfo',infoData.content);
        //如果没有代理人信息，则需进行 3.代理人基本信息绑定，然后进入首页；
        //如果存在代理人信息，则更新store中的代理人姓名，然后进入首页；
        if(infoData.content == {}){
            // let baseInfoData = await _this.baseInfoHttp();
            // console.log(baseInfoData);
            // // return;
            // wx.redirectTo({
            //     url:'/pages/index/main'
            // })
            store.commit('changeName',_this.info.userName);
        }else{
            store.commit('changeName',infoData.content.userName);
            for(var i in _this.placeholder){
                _this.placeholder[i] = '';
            }
            _this.toastShow = true;

            // wx.redirectTo({
            //     url:'/pages/index/main'
            // })
        }

        return loginData;
    },
  },
  watch:{
    info:{
        handler(newVal,oldVal){
            if(this.info.userName !=='' && this.info.jobNumber !=='' && this.info.phone !=='' && this.info.verifyCode !==''){
                console.log(9);
                
                for(var i in this.info){
                    if(!this.regularObj[i].test(this.info[i])){
                        // this.$message.toast('请填写正确的'+this.transfromRegObj[inputName+'Reg']+'信息');
                        console.log('错误')
                        this.isDisabled = true;
                        return;
                    }else{
                        console.log('正确')
                        this.isDisabled = false;
                    }
                }
            }else{
                console.log(8)
                this.isDisabled = true;
            }
        },
        deep:true
    },
  },
  created () {
  },
  onShow () {
    // `this` 指向 vm 实例
    let _this = this;
    console.log(store.state.userinfo);
    
    _this.mountedHttp();
  }
}