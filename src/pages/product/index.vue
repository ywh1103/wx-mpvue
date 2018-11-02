<template>
  <div class="content-page">
    <div class="tip-block" v-if="!showToast">
      <div class="tip-title">如何分享链接给好友？为什么收不到链接？</div>
      <div class="tip-content">点击分享按钮在客服对话框中回复数字 1，就能收到分享链接哦。</div>
      <div class="tip-footer">点击链接分享好友或朋友圈即可获得奖励。</div>
    </div>
    <ul>
      <li v-for="(item,index) in productList" :key="index">
        <div class="product-banner"><img :src="item.imageUrl"/></div>
        <div class="product-title-block">
          <div class="product-name fl">{{item.name}}</div>
          <!-- <button class="product-share rl" plain :open-type="openType" :session-from="sessionFrom" @click="btnClick(item.productId)">分享1</button> -->
          <button class="product-share rl" plain open-type="contact" :session-from="item.productId+','+item.agentId">分享</button>
        </div>
        <div class="prodect-detail-block">
          <div class="fl share-block">分享 <span>{{item.shareNum || 0}}</span></div>
          <div class="fl browse-block">浏览 <span>{{item.pageViewNum || 0}}</span></div>
          <div class="fl order-block">签单 <span>{{item.buyNum || 0}}</span></div>
          <div class="fl coin-block">金币 <span>{{item.goldNum || 0}}</span></div>
        </div>
      </li>
    </ul>
    <div class="toast-block" v-if="showToast">
      <div class="toast-contnet">
        <div class="toast-title">首次分享请注意</div>
        <div class="toast-content">
          <p>(1)点击分享按钮；</p>
          <p>(2)在弹出的小程序客服客服消息对话框中回复数字1，才能收到分享链接哦；</p>
          <p>(3)复制收到的链接转发给好友。</p>
        </div>
        <div class="toast-footer">点击链接分享好友或朋友圈即可获得奖励。</div>
        <button plain :disabled="toastDisabled" @click="iKnow">我了解啦<span v-show="toastDisabled">({{count}}s)</span></button>
      </div>
    </div>

  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>
