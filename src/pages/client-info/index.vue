<template>
  <div class="content-page">
    <div class="block avatar-block">
      <span class="fl info-title">头像</span>
      <img class="rl" :src="headImgUrl"/>
    </div>
    <div class="block name-black bg" @click="gotoChange('姓名')">
      <span class="fl info-title">姓名</span>
      <span class="rl info-content">{{name}}</span>
    </div>
    <div class="block sex-block bg">
      <span class="fl info-title">性别</span>
      <picker @change="handlePickerChange" :value="sexIndex" :range="sexArr">
        <view class="picker rl info-content">
          {{sexArr[sexIndex]}}
        </view>
      </picker>
    </div>
    <div class="block birthday-block bg">
      <span class="fl info-title">出生日期</span>
      <picker mode="date" :value="birthdayDate" @change="bindDateChange">
        <view class="picker rl info-content">
          {{birthdayDate}}
        </view>
      </picker>
    </div>
    <div class="f8"></div>
    <div class="block mobile-block bg" @click="gotoChange('联系电话')">
      <span class="fl info-title">联系电话</span>
      <!-- <span class="rl info-content">13298329131</span> -->
      <span class="rl info-content">{{phone}}</span>
    </div>
    <div class="f8"></div>
    <div class="block idnumber-block bg" @click="gotoChange('身份证号码')">
      <span class="fl info-title">身份证号码</span>
      <!-- <span class="rl info-content">410727199311033228</span> -->
      <span class="rl info-content">{{idNumber}}</span>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>
