<template>
  <div class="content-page">
    <div class="f8"></div>
    <div class="padding-block">
      <div class="change-block">
        <input type="text" v-model="changeInfo" :placeholder="placeholderText"/>
        <img class="delete" @click="deleteFunc" src="../../assets/image/delete-icon.png"/>
      </div>
      <button class="btn" plain=true @click="save(type)">保存</button>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>
