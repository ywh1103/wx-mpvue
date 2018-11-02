<template>
  <div class="state-list">
    <ul>
      <li v-for="(item,index) in lists" :key="index">
        <div class="fl list-avatar"><img :src="item.headImgUrl"/></div>
        <div class="fl list-info">
          <div class="list-info-name">{{item.name}}</div>
          <div class="list-info-action">{{item.action}}了{{item.productName}}产品</div>
        </div>
        <div class="rl list-date-time">
          <div class="list-date">{{item.itime}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['lists']
}
</script>
<style scope>
li{
  list-style: none;
}
.fl{
  float: left;
}
.rl{
  float: right;
}
.state-list{
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  
}
.state-list li{
  border-bottom: 1px solid #EEEEF0;
  width: 100%;
  height: 75px;
  font-size:15px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(49,49,61,1);
}
.list-avatar{
  margin-right: 10px;
  margin-left: 15px;
  margin-top:24px;
}
.list-avatar,.list-info,.list-date-time{
  margin-top: 19px;
}
.list-date{
  /* margin-top: 10px; */
}
.state-list li img{
  height: 28px;
  width: 28px;
  border-radius: 50%;
}
.list-info-name{
  font-size:13px;
}
.list-date-time{
  font-size:11px;
  color:rgba(106,106,115,1);
  margin-right: 15px;
}
</style>