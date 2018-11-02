<template>
  <div class="content-page">
    <div class="block coin-header">
      <div class="fl">
        <div>金币余额</div>
        <div class="coin-number">{{coinNumber}}</div>
        <div class="coin-detail" @click="gotoCoinDetail"><span>金币明细</span></div>
      </div>
      <div class="rl my-redPacket" @click="myRedPacket"><img src="../../assets/image/coin-my-icon.png"/></div>
    </div>
    <div class="f8"></div>
    <div class="block padding-coin">
      <span class="fl">{{paddingCoin}}金币可领取</span>
      <button class="rl" plain :disabled="isDisabled" @click="receiveGold">领取</button>
    </div>
    <div class="f8"></div>
    <div class="block lottery-block">
      <div class="lottery-small">
        <div>小奖</div>
        <div class="btn" @click="lottery('1')"><img src="../../assets/image/coin-small-icon.png"/></div>
        <img class="pic-small" src="../../assets/image/pic-coin-small.png"/>
      </div>
      <div class="lottery-big">
        <div>大奖</div>
        <div class="btn" @click="lottery('2')"><img src="../../assets/image/coin-big-icon.png"/></div>
        <img class="pic-big" src="../../assets/image/pic-coin-big.png"/>
      </div>
    </div>
    <div class="pop-block" v-if="popShow">
      <img src="../../assets/image/pic_coin_popup.png"/>
      <div class="pop-money-block"><span class="pop-add"></span><span class="pop-money">{{popMoney}}</span>元</div>
      <div class="close" @click="close('popShow')"></div>
    </div>
    <div class="pop-block redpacket-block" v-if="redpacketShow">
      <img class="red-bg" src="../../assets/image/bg_redbag.png"/>
      <div class="my-money-block">￥<span>{{myMoney}}</span>元</div>
      <div class="tixian" @click="gotoDraw"><img src="../../assets/image/btn_redbag_tixian.png"/></div>
      <div class="red-tip">
        <span class="red-rule" @click="gotoRule">提现规则</span>
        <span class="red-detail" @click="gotoBonusDetail">红包明细</span>
      </div>
      <div class="close" @click="close('redpacketShow')"></div>
    </div>

  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>
