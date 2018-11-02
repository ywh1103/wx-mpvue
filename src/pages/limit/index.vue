<template>
  <div class="content-page">
    <div class="limit-activity" v-for="(item,index) in limitActivity" :key="index">
      <span class="fl activity-title">{{item.activityTitle}}</span>
      <span class="fl activity-coin-number">+{{item.coinNum}}</span>
      <span class="rl activity-status" :class="{done:item.status=='已完成'}">{{item.status}}</span>
    </div>
    <div class="btn-block">
      <button plain class="look-product" open-type="contact" :session-from="productId+','+agentId">查看{{productName}}页面</button>
      <button plain open-type="contact" :session-from="productId+','+agentId">分享{{productName}}</button>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>
