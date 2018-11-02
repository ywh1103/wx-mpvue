<template>
  <div class="">
    <div class="content-page">
      <div class="login-title">身份验证</div>
      <div class="login-tip">因涉及活动奖励发放，请务必使用本人微信参与活动并填写本人信息进行验证</div>
      <div v-show="!toastShow">
        <div class="form-block name-block" :class="{errorTip:regularTag.userName}">
          <!-- <label class="label-tag">姓名</label> -->
          <input type="text" v-model="info.userName" @blur="inputBlur('userName')" @focus="inputFocus('userName')" :placeholder="placeholder.userName"/>
          <!-- <label class="label-tip">{{verifyNull.userName}}</label> -->
        </div>
        <div class="form-block job-block" :class="{errorTip:regularTag.jobNumber}">
          <!-- <label class="label-tag">工号</label> -->
          <input type="text"  v-model="info.jobNumber" @blur="inputBlur('jobNumber')" @focus="inputFocus('jobNumber')" :placeholder="placeholder.jobNumber"/>
          <!-- <label class="label-tip">{{verifyNull.jobNumber}}</label> -->
        </div>
        <div class="form-block phone-block" :class="{errorTip:regularTag.phone}">
          <!-- <label class="label-tag">手机号</label> -->
          <input type="text" :placeholder="placeholder.phone" v-model="info.phone" @blur="inputBlur('phone')" @focus="inputFocus('phone')" @input="inputphone" maxlength="11"/>

          <!-- <label class="label-tip">{{verifyNull.phone}}</label> -->
        </div>
        <div class="form-block auth-block" :class="{errorTip:regularTag.authCode}">
          <input type="text" :placeholder="placeholder.authCode" v-model="info.authCode" @blur="inputBlur('authCode')" @focus="inputFocus('authCode')"/>
          <img class="auth-img" :src="authImgUrl" @click="authcodeHttp"/>
          <!-- <div class="auth-img" :style="{backgroundImage:'url(' + authImgUrl + ')'}"></div> -->
          <!-- <img class="auth-img" src="../../assets/image/coin-small-icon.png" @click="authcodeHttp"/> -->
        </div>
        <div class="form-block verify-block" :class="{errorTip:regularTag.verifyCode}">
          <!-- <label class="label-tag">验证码</label> -->
          <input type="text" :placeholder="placeholder.verifyCode" v-model="info.verifyCode" @blur="inputBlur('verifyCode')" @focus="inputFocus('verifyCode')"/>
          <button v-show="sendCodeShow" class="get-sms-btn" plain=true @click="getSms">获取验证码</button>
          <span v-show="!sendCodeShow" class="count">({{count}}s)后重发</span>
          <!-- <label class="label-tip">{{verifyNull.verifyCode}}</label> -->
        </div>
      </div>
      <button v-show="!toastShow" :disabled="isDisabled" class="goto" open-type="getUserInfo" @getuserinfo="onGotUserInfo">进入</button>
      <!-- <img style="width:100px;height:30px;" :src="authImgUrl" @click="authcodeHttp"/> -->
    </div>

    <div class="toast-btn" v-if="toastShow">
      <div class="toastBox">
        <div>授权登陆</div>
        <img src="../../assets/image/ic_login_wexin.png"/>
        <button class="login-wexin" open-type="getUserInfo" @getuserinfo="accreditInfo">微信登陆</button>
      </div>
    </div>
  </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
