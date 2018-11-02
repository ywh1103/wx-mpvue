<template>
  <div class="flex box box-lr">
    <scroll-view class="flex groups box box-tb" :style="{'height': '400px'}" scroll-y :scroll-into-view="scrollIntoView">

      <block v-for="(group,index) in groups" :key="index">
        <div class="flex" :id="group.groupName" v-show="!group.users.length==0">
          <div class="group-name">{{group.groupName}}</div>
          <div class="flex group-users">
            <div v-for="(user,idx) in group.users" :key="idx" class="user box box-lr" @click="gotoClientDetail(user.id)">
              <div class="user-avatar box box-lr box-pack-center box-align-center">
                <img class="user-avatar-img" :src="user.headImgUrl"/>
              </div>
              <div class="fl info-box">
                <div class="flex user-name">{{user.name}}</div>
                <div class="user-mobile">{{user.phone}}</div>
              </div>
            </div>
          </div>
        </div>
      </block>
    </scroll-view>
    <div class="nav box box-tb" @touchend="touchend">
      <div v-for="(item,index) in letters" :key="index" @click="tabLetter(item)" class="flex box box-align-center box-pack-center letter">
        <span class="letter-text" :class="selected == item ? 'letter-actived' : ''">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['groups','scrollIntoView'],
  data () {
    return {
        // 当前选择的导航字母
    selected: 0,
    // 导航字母
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
    'U', 'V', 'W', 'X', 'Y', 'Z','#'],
    }
  },
  components: {
  },

  methods: {
    tabLetter(index) {
      this.selected = index;
      this.scrollIntoView = index;
      
      this.cleanAcitvedStatus();
    },
    // 清除字母选中状态
    cleanAcitvedStatus() {
      setTimeout(() => {
        this.selected = 0;
      }, 500);
    },
    touchend(e) {
      this.cleanAcitvedStatus();
    },
    gotoClientDetail(id){
      let _this = this;
      this.$emit('gotoClientDetail', id)
    },
  },

  created () {
    // 调用应用实例的方法获取全局数据
  },
  onShow () {
    // `this` 指向 vm 实例
  }
}
</script>

<style>
page {
  background-color: #eee;
}
.fl{
  float: left;
}
.nav {
  position: fixed;
  right: 10rpx;
  top: 32%;
  height: 80%;
  width: 50rpx;
  font-size:10px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(76,151,255,1);

}
.letter {
  width: 50rpx;
  height: 30rpx;
  /* font-size: 30rpx; */
}
.letter-text {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  /* line-height: 50rpx; */
  border-radius: 50%;
}
.letter-actived {
  background-color: rgba(76,151,255,1);
  color: #fff;
}
.groups {
  /*height: 100%;*/
}
.group-name {
  /* padding: 10rpx 30rpx; */
  text-indent: 15px;
  height: 50rpx;
  line-height: 50rpx;
  background:rgba(248,248,248,1);
  font-size:12px;
font-family:PingFangSC-Regular;
font-weight:400;
color:rgba(106,106,115,1);
}
.group-users {
  background-color: #fff;
  overflow: hidden;
}
.user {
  height: 75px;
  line-height: 75px;
  padding: 0 30rpx;
  border-bottom: 1px solid#EEEEF0;
  overflow: hidden;
}
.user-avatar {
  width:56rpx;
  height:56rpx;
  float:left;
  margin-top:5px;
  margin-right:5px;
}
.user-avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.info-box{
  margin-top:17px;
}
.user-name {
  height: 22px;
  line-height: 22px;
}
.user-mobile{
  height: 18px;
  line-height: 18px;
  font-size:15px;
  color:rgba(106,106,115,1);
}
</style>