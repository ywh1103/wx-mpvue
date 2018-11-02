<template>
    <transition name="mask-bg-fade">
        <div class="mask" v-show="show">
            <div class="mask_bg"></div>
            <transition name="slide-fade">
                <div class="modelBox" v-show="show" v-bind:class="confirmModalOptions.type||'error'">
                    <!-- <div class="tipIcon"></div> -->
                    <!-- <div class="closeModel" v-on:click="closeModel()"></div> -->
                    <div class="title">{{confirmModalOptions.title || ""}}</div>
                    <div class="message" v-bind:class="{textLeft:confirmModalOptions.isTextLeft}">
                        <p v-for="(item,index) in confirmModalOptions.message" :key="index">{{item || ""}}</p>
                        <!-- {{confirmModalOptions.message || " "}} -->
                    </div>
                    <div class="model_btnBox">
                        <button class="dh_button_default2" v-on:click="confirmCancel()" v-show="!confirmModalOptions.ikonw">
                            {{confirmModalOptions.btnCancelText || "取消"}}
                        </button>
                        <button class="dh_button_confirm" v-on:click="confirmSubmit()" v-show="!confirmModalOptions.ikonw">
                            {{confirmModalOptions.btnSubmitText || "确定"}}
                        </button>
                        <button class="dh_button_iknow" v-on:click="confirmIknow()" v-show="confirmModalOptions.ikonw">
                            {{confirmModalOptions.btnIkonwText || "我知道了"}}
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script>
// 用法
// <d-confirm v-bind:confirmModalOptions="confirmOptions" ref="myConfirm"></d-confirm>
// import  DConfirm from 'components/confirm';
// data(){
//     return{
//        confirmOptions:{} ,
//        tipOptions:{}
//     }
// },
// this.$refs.myConfirm.showModel();
// this.confirmOptions= {
//     type: "tip",//warning
//     title: "订单已取消",//提示
//     // ikonw:'true',
//     message: ['非常抱歉，根据您的健康告知，您未能通过本次投保审核','您可查看民生健康其他保险，寻找更合适您的保险','如有问题可关注民生微信公众号“民生健康95595”咨询'],//""
//     btnCancelText: "取消",//取消
//     btnSubmitText: "确定",//确定
//     btnIkonwText:'',
//     btnSubmitFunction: function () {
//     alert("确定")
//     },
//     btnCancelFunction: function () {
//     alert("取消")
//     },
//     btnIknowFunction:function(){
//     alert("知道了")
//     }
// }
export default {
  props: ["confirmModalOptions"],
  data() {
    return {
      show: false // 是否显示模态框
    };
  },
  methods: {
    closeModel: function() {
      this.show = false;
    },
    showModel: function() {
      this.show = true;
    },
    confirmCancel: function() {
      this.show = false;
      if (typeof this.confirmModalOptions.btnCancelFunction === "function") {
        this.confirmModalOptions.btnCancelFunction();
      }
    },
    confirmSubmit: function() {
      this.show = false;
      if (typeof this.confirmModalOptions.btnSubmitFunction === "function") {
        this.confirmModalOptions.btnSubmitFunction();
      }
    },
    confirmIknow: function() {
      this.show = false;
      if (typeof this.confirmModalOptions.btnIknowFunction === "function") {
        this.confirmModalOptions.btnIknowFunction();
      }
    }
  }
};
</script>
<style scoped>
.mask {
  background: rgba(0, 0, 0, 0.6);
  opacity: 1;
  top: 0;
  left: 0;
}
.modelBox {
  width: 80%;
  /* background: url("~img/group/popup_decline.png") no-repeat; */
  background-size: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -40%;
  margin-top: -4rem;
  background-color: #fff;
  background: #FFFFFF;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.50);
  border-radius: 4px;
}
.warning {
  /* background-image: url("~img/group/popup_error_1.png"); */
}
.tip {
  /* background-image: url("~img/group/popup_info_2.png"); */
}
.title {
  text-align: center;
  height: 1.866667rem;
  line-height: 1.866667rem;
  font-family: PingFangSC-Medium;
  font-size: .426667rem;
  color: #101949;
}
.message {
  padding: 0 .426667rem;
  font-family: PingFangSC-Regular;
  font-size: .373333rem;
  color: #818297;
  text-align: center;
}
.textLeft{
  text-align: left;
}
.model_btnBox {
  height: 1.493333rem;
  /* line-height: 1.493333rem; */
  margin-top: .64rem;
  border-top: 1px solid #F3F7FD;
  text-align: center;
}
.modelBox button {
  border: none;
  background: none;
  background: #ffffff;
  border: 1px solid #da3619;
  border-radius: 8px;
  width: 2.28rem;
  height: 0.78rem;
  font-family: PingFangSC-Regular;
  font-size: 0.28rem;
  color: #da3619;
  text-align: center;
}
.modelBox .dh_button_confirm {
  background: #da3619;
  color: #fff;
}
.modelBox .dh_button_iknow {
    background: none;
    border: none;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #8FB8FF;
    text-align: center;
    height: 1.493333rem;
        width: 100%;
}
</style>