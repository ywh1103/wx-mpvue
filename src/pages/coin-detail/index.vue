<template>
  <div class="content-page">
    <div class="block coin-header">金币余额 <span>{{coin}}</span></div>
    <div class="f8"></div>
    <div class="block coin-detail">
      <ul>
        <li v-for="(item,index) in details" :key="index">
          <div class="fl">
            <div class="detail-title">{{item.type}}</div>
            <div class="detail-date">{{item.itime}}</div>
          </div>
          <div class="rl coin-state">{{item.gold}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>
