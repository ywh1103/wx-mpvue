<template>
  <div class="content-page">
    <div class="block redPacket-header">红包余额 <span>{{redPacket}}</span>元</div>
    <div class="f8"></div>
    <div class="block redPacket-detail">
      <ul>
        <li v-for="(item,index) in details" :key="index">
          <div class="fl">
            <div class="detail-title">{{item.title}}</div>
            <div class="detail-date">{{item.itime}}</div>
          </div>
          <div class="rl redPacket-state">{{item.bonus}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>
