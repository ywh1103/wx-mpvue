<template>
  <div class="content-page">
    <div class="withdraw-header">提现金额将通过民生健康95596公众号，以红包形式发送。</div>
    <div class="withdraw-block">
      <div class="withdraw-title">提现金额</div>
      <div class="withdraw-money">
        <div class="withdraw-input">
          <span class="fl">¥</span>
          <input class="fl" type="text" v-model="withdrawMoney" @input="withdrawInput"/>
        </div>
        <div class="withdraw-tip">
          <span class="fl tip">提现金额需大于1元</span>
          <div class="rl" v-show="errorTip"><span>红包余额¥{{allMoney}}，</span><span class="all" @click="all">全部提现</span></div>
          <div class="rl error-tip" v-show="!errorTip">输入金额超过红包余额</div>
        </div>
      </div>
    </div>
    <button plain class="insure" :disabled="isDisabled" @click="insureDraw">确认提现</button>
    <div class="pop-block" v-if="popShow">
      <div class="pop-content" v-show="isSuccess">
        <img src="../../assets/image/ic_tixian_success.png"/>
        <div class="pop-title">提现成功</div>
        <div class="content">请查看民生健康95596公众号</div>
      </div>
      <div class="pop-content" v-show="!isSuccess">
        <img src="../../assets/image/ic_tixian_fail.png"/>
        <div class="pop-title" :class="{changeStyle:!isSuccess}">提现失败</div>
        <div class="content">请先关注民生健康95596公众号后再尝试提现</div>
      </div>
      <div class="close" @click="close"></div>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>
