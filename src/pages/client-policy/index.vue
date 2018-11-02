<template>
  <div class="content-page">
    <ul>
      <li v-for="(item,index) in policyList" :key="index" v-if="!policyList.length == 0">
        <div class="product-title">{{item.productName}}<span class="product-status" :class="{terminal:item.status=='已失效'}">{{item.status}}</span></div>
        <div class="product-policyholder-name">被保人:{{item.policyholderName}}</div>
        <div class="product-insure-date">投保时间:{{item.proposalDate}}</div>
        <div class="product-date">保障时间:{{item.effectiveDate}} 00:00:00～{{item.expiredDate}} 23:59:59</div>
      </li>
    </ul>
    <div v-if="policyList.length == 0" class="none">
      <img src="../../assets/image/none-state-bg.png"/>
      <div>暂无已购保单～</div>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>
