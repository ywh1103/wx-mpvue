<template>
  <div class="content-page">
      <div class="block header-block">
        <div class="header-bg-top"></div>
        <div class="header-bg-bottom"></div>
        <div class="header-absolute">
          <div class="header-info-block">
            <img :src="agentInfo.imgUrl"/>
            <span>{{agentInfo.name}}</span>
          </div>
          <div class="header-totle-block">
            <div class="totle-money-block" @click="goToPage('coin')">
              <div class="totleInfo-money">{{totleInfo.money}}</div>
              <div class="totle-money-coin" :class="{newadd:newAdd}">金币</div>
            </div>
            <div class="totle-pople-block" @click="goToPage('client')">
              <div>
                <div class="totleInfo-people">{{totleInfo.people}}</div>
                <div class="totle-people">累计拓客<span v-if="newPeopleShow">+{{newPeople}}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block share-block">
        <div class="share-left"></div>
        <div class="share-right">
            <swiper autoplay=true circular=true interval="5000" vertical=true class="swiper-block fl">
              <div v-for="(item,index) in products" :key="index">
                <swiper-item>
                  <span class="share-product-name">{{item.name}}</span>
                  <div class="share-product-desc">已分享<span>{{item.shareNum || 0}}</span>次，浏览<span>{{item.pageViewNum || 0}}</span>次，签单<span>{{item.buyNum || 0}}</span>单…</div>
                </swiper-item>
              </div>
            </swiper>
          <div class="share-product-detail rl">
            <button plain @click="gotoShare">去分享</button>
          </div>
        </div>
      </div>
      <div class="f8"></div>
      <div class="block taskFocus-block">
        <span class="task-focus-title">任务集市</span>
        <span class="task-focus-tip">快来做任务，赚取金币吧～</span>
        <div class="block acitvity-block limitTime-block">
          <div class="block-title">限时活动</div>
          <div class="limit-step">当前步骤 {{actionStep}}/2</div>
          <img :src="limitImgUrl"/>
          <button class="limit-btn" plain @click="gotoLimit">去完成</button>
        </div>
        <div class="block acitvity-block new-block" v-if="isNew">
          <div class="block-title">萌新任务</div>
          <div class="new-sign-block">
            <div>首次签到<span>+5</span></div>
            <button plain @click="sign('1','isFirstSign')" v-show="!isFirstSign">签到</button>
            <div class="daily-done" v-show="isFirstSign">已完成</div>
          </div>
          <div class="new-draw-block">
            <div>金币抽奖<span>+5</span></div>
            <button plain @click="gotoLuck" v-show="!isFirstuck">抽奖</button>
            <div class="daily-done" v-show="isFirstuck">已完成</div>
          </div>
          <div class="new-share-block">
            <div>分享产品<span>+5</span></div>
            <button plain @click="gotoShare" v-show="!isFirstShare">去分享</button>
            <div class="daily-done" v-show="isFirstShare">已完成</div>
          </div>
        </div>
        <div class="block acitvity-block daily-block">
          <div class="block-title">日常活动</div>
          <div class="daily-one">
            <div class="daily-one-left">
              <p class="daily-one-timeline day-share">分享保险产品到朋友圈 <span>+2</span></p>
              <p class="daily-one-timeline-tip">点击去分享，选择保险产品转发给朋友</p>
            </div>
            <div class="daily-one-right">
              <button plain v-show="!isDayShare" @click="gotoShare">去分享</button>
              <div class="daily-done" v-show="isDayShare">已完成</div>
            </div>
          </div>
          <div class="daily-two">
            <div class="daily-two-left daily-two-sign">每日签到 <span>+1</span></div>
            <div class="daily-two-right">
              <button plain v-show="!isDayCheck" @click="sign('1','isDayCheck',1)">签到</button>
              <div class="daily-done" v-show="isDayCheck">已完成</div>
            </div>
          </div>
        </div>
        <div class="block acitvity-block sign-block">
          <div class="block-title">签单有奖</div>
          <div class="sign-one">
            <div class="sign-one-left">
              <p class="sign-one-oneShare">好友首次浏览分享页面 <span>+1</span></p>
              <p class="sign-one-oneShare-tip">选择保险产品转发给朋友，每次浏览累计金币</p>
              <div class="sign-one-pv-tip">每日上限: 10金币</div>
            </div>
            <div class="sign-one-right">
              <p class="sign-one-pv">浏览量 <span>{{pageView}}k</span></p>
            </div>
          </div>
          <div class="sign-two">
            <div class="sign-two-left">
              <p class="sign-two-buy">好友通过分享页面购买 <span>+10</span></p>
              <p class="sign-two-buy-tip">选择保险产品转发给朋友，每次浏览累计金币</p>
            </div>
            <div class="sign-two-right">
              <p class="sign-two-signNum">已成功签单<span>{{buyAmount}}</span>单</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-tip"><span>已经到底线啦</span></div>
      <div class="sign-tip" v-if="signShow">
        <img src="../../assets/image/bg_toast_success.png"/>
        <div class="sign-tip-title">恭喜您获得</div>
        <div class="sign-tip-money"><span>+{{popNumber}}</span>金币 </div>
      </div>
      
      
      
      
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>
