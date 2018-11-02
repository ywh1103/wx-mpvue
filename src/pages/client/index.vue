<template>
  <div class="content-page">
      <div class="block client-header">
        <ul>
          <li class="fl" :class="{active:isActive}" @click="tabSwitch(true)">我的客户</li>
          <li class="fl" :class="{active:!isActive}" @click="tabSwitch(false)">客户动态<span class="client-state-number" v-show="stateNumShow">{{stateNum}}</span></li>
        </ul>
      </div>
      <div class="my-client" v-show="isActive">
        <div class="block my-client-block">
          <div class="my-client-title fl">我的客户</div>
          <div class="my-client-number fl"><span>{{cientNum}}</span>人</div>
        </div>
        <div class="f8"></div>
        <div class="block tag-block">
          <ul>
            <li class="fl" :class="{selectTag:selectTag.all}" @click="selectTagFunc('all')">全部</li>
            <li class="fl" :class="{selectTag:selectTag.none}" @click="selectTagFunc('none')">未购买</li>
            <li class="fl" :class="{selectTag:selectTag.done}" @click="selectTagFunc('done')">已购买</li>
          </ul>
        </div>
        <div class="block contacts-block">
          <contacts :groups="groups" :scrollIntoView="scrollIntoView" @gotoClientDetail="gotoClientDetail"></contacts>
        </div>
      </div>
      <!-- 客户动态 -->
      <div class="client-state" v-show="!isActive">
        <div class="none-state" v-if="lists.length == 0">
          <img src="../../assets/image/none-state-bg.png"/>
          <div>暂无客户动态，快去分享产品到朋友圈吧~</div>
        </div>
        <div class="client-state-list" v-if="!lists.length == 0">
          <state :lists="lists"></state>
        </div>
      </div>
      
  </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
