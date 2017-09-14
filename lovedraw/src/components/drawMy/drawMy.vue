<template>
  <div id="accident">
     <div class="my_towrap">
        <span class="headimg"><img src="./img/headimg.jpg" alt=""></span>
        <span class="message">
          <img src="./img/message.png" alt="">
           <i class="red_dot"></i>
        </span>
        <h3 class="myName">草莓味&二喵</h3>
        <p class="metto">生活不止眼前的苟且，还有诗与远方</p>

        <div class="follow_wrapper">
            <div class="follow_l">
                关注 6
            </div>
            <div class="fans_r">
                粉丝 7
            </div>
        </div>

     </div>
     <div class="work_warpper">
      <router-link tag="div" to="/homeAll/drawMy/myDongtai" class="all_dynamic">所有动态</router-link>
      <router-link tag="div" to="/homeAll/drawMy/myWork" class="all_work">所有作品</router-link>
     </div>
     <keep-alive>
       <router-view></router-view>
     </keep-alive>
  </div>
</template>

<script>

</script>

<style scoped>
.my_towrap {
  position: relative;
  width: 100%;
  height: 150px;
  padding-top: 10px;
  background:url("./img/topbg.png");
  background-size: cover;
} 
.headimg {
  display: block;
  width: 65px;
  height: 65px;
  margin: 0px auto;
  overflow: hidden;
  border-radius: 50%;
  border: #fb6e84 solid 2px;
}
.headimg img {
  width: 100%;
}
.message {
  position: absolute;
  top: 8px;
  right: 5px;
  display: block;
  width: 30px;
}
.message img{
  width: 100%;
}
.red_dot {
  position: absolute;
  display: block;
  top: 0px;
  right: 0px;
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 50%;
}
.myName {
  font-size: 16px;
  text-align: center;
  margin: 7px 0px;
}
.metto {
  font-size: 14px;
  text-align: center;
  color: #696967;
}
.follow_wrapper {
  width: 60%;
  margin: 0  auto;
  display: flex;
}
.follow_l,.fans_r {
  flex: 1;
  text-align:center;
  height: 18px;
  line-height: 18px;
  margin-top: 10px;
  font-size: 14px;
  color: #868684;
}
.follow_l {
  border-right: #b5b5b4 solid 1px;
} 
.work_warpper {
  width: 100%;
  display: flex;
  background-color: white;
}
.all_dynamic,.all_work {
  flex: 1;
  text-align: center;
  font-size: 14px;
  height: 35px;
  line-height: 35px;
}
.router-link-active {
  color: #f83a58;
  border-bottom: #f83a58 solid 1px;
}
</style>
