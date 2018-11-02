<template>
  <div class="content-page">
    <div class="f8">
      <div class="block clientDetail-header" @click="gotoClientInfo">
        <img class="fl header-info-avatar" :src="headImgUrl"/>
        <div class="fl header-info">
          <div class="header-info-name">{{name}}<span>(昵称：{{nickname}})</span></div>
          <div class="header-info-mobile">{{phone}}</div>
        </div>
      </div>
      <div class="block clientDetail-policy" @click="gotoPolicy">
        <span>已购保单</span>
      </div>
    </div>
    <div class="block clientDetail-state">
      <div class="client-state-title">客户动态</div>
      <ul>
        <li v-for="(state,index) in states" :key="index">
          <div class="state-title">
            <div class="title fl">{{state.action}}了{{state.productName}}产品</div>
            <div class="date-time rl"><span>{{state.itime}} </span></div>
          </div>
          <div class="state-detail" v-for="(detailInfo,detailIdx) in state.details" :key="detailIdx" v-show="state.details">
            <div class="detail">{{detailInfo.detail}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>
