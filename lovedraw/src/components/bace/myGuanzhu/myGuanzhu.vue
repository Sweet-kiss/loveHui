<template>
  <div class="myGuanzhu">
        <div class="dongItem" v-for="item in dynamics">
        <div class="head_top">
          <div class="head_left">
            <ul>
              <li><span class="head_img"><img :src="'/static/headimg/'+item.head_img" alt=""></span></li>
              <li class="peopleName">{{item.name}}</li>
              <li><span class="guanZhu">+ 已关注</span></li>
            </ul>
          </div>
          <div class="header_right"><span>{{item.time}}</span></div>
        </div>
        <div class="cent_text"><p>{{item.test}}</p></div>
        <div class="peo_img">
          <div class="img_wrapper">
              <div class="img_padding">
                 <div class="img_position">
                    <img class="img_p" src="./img/peo_img/peo_01.png" alt="">
                 </div>
              </div>
          </div>
          <div class="img_wrapper">
              <div class="img_padding">
                 <div class="img_position">
                    <img class="img_p" src="./img/peo_img/peo_02.png" alt="">
                 </div>
              </div>
          </div>
          <div class="img_wrapper">
              <div class="img_padding">
                 <div class="img_position">
                    <img class="img_p" src="./img/peo_img/peo_03.png" alt="">
                 </div>
              </div>
          </div>
          <div class="img_wrapper">
              <div class="img_padding">
                 <div class="img_position">
                    <img class="img_p" src="./img/peo_img/peo_04.png" alt="">
                 </div>
              </div>
          </div>
          <div class="img_wrapper">
              <div class="img_padding">
                 <div class="img_position">
                    <img class="img_p" src="./img/peo_img/peo_05.png" alt="">
                 </div>
              </div>
          </div>
        </div>
        <div class="work_name">
           <ul>
             <li>作品名：{{item.workname}}</li>
             <li>分类：{{item.classification}}</li>
             <li>作者寄语：{{item.message}}</li>
           </ul>
        </div>
        <div class="peo_praise">
             <div class="head_wrapper">
               <div class="head_padding">
                 <div class="head_position">
                    <img class="header_img" src="./header/header01.png" alt="">
                 </div>
               </div>
             </div>
             <div class="head_wrapper">
               <div class="head_padding">
                 <div class="head_position">
                    <img class="header_img" src="./header/header02.png" alt="">
                 </div>
               </div>
             </div>
             <div class="head_wrapper">
               <div class="head_padding">
                 <div class="head_position">
                    <img class="header_img" src="./header/header03.png" alt="">
                 </div>
               </div>
             </div>                          
        </div>

        <div class="thumbs-up_wrapper">
           <div class="thumbs-up_left">
              <div class="up_btn">
                 <i class="ub_img"><img src="./btn/thumb_up.png" alt=""></i>
                 <span class="up_b">点赞</span>
                 <em>4</em>
              </div>
           </div>
           <div class="thumbs-up_right">
              <i class="ub_img"><img src="./btn/comment.png" alt=""></i>
              <span class="comment_b">评论</span>
              <em>6</em>
           </div>
        </div>

    </div>
  </div>
</template>

<script>

const ERR_OK = 0

export default {
  data () {
    return {
      dynamics: {}
    }
  },
  created () {
    this.$http.get('/api/dynamics').then((response) => {
      response = response.body
      if (response.erron === ERR_OK) {
        this.dynamics = response.data
        console.log(this.dynamics)
      }
    })
  }
}
</script>

<style scoped>
.dongItem {
  width:96%;
  margin: 3px auto;
  padding: 3px;
  background-color: #fff;
  border: #efeeee solid 1px;
  overflow: hidden;
  margin-bottom: 5px;
  margin-bottom: 10px;
}
.head_top {
  display: flex;
}
.head_left {
  flex: 1;
}
.header_right {
  width: 90px;
  text-align: center;
}
.head_left ul li {
  float: left;
  display: inline-block;
  margin-right: 8px;
  height: 40px;
  line-height: 40px;
  padding: 2px 3px;
}
.head_img {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
.head_img img {
  width: 100%;
  height: 100%;
}
.peopleName {
  font-size: 14px;
  color: #858584;
}
.header_right span {
  font-size: 12px;
  font-family: "微软雅黑";
  height: 40px;
  line-height: 40px;
  color: #858584;
}
.guanZhu {
  display: block;
  width: 60px;
  height: 30px;
  line-height: 30px;
  background-color: #2fdbff;
  font-size: 13px;
  text-align: center;
  border-radius: 3px;
  color: #fff;
  margin-top: 5px;
}
.cent_text {
  padding: 5px 3px;
  font-size: 14px;
  line-height: 17px;
}
.img_wrapper {
  width: 33.3%;
  float: left;
}
.img_padding {
  padding-top: 100%;
  position: relative;
}
.img_position {
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
  font-size: 0;
}
.img_p {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.work_name {
  clear: both;
}
.work_name ul li {
  font-size: 13px;
  margin-bottom: 4px;
  color: #666664;
}
.peo_praise {
  width: 100%;
  background-color: green;
}
.head_wrapper {
  width: 7%;
  float: left;
  border-radius: 50%;
  overflow: hidden;
}
.head_padding {
  padding-top: 100%;
  position: relative;
}
.head_position {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  font-size: 0;
}
.header_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.thumbs-up_wrapper {
  clear: both;
  display: flex;
}
.thumbs-up_left,.thumbs-up_right {
  flex: 1;
 text-align: center;
}
.up_b,.comment_b {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.ub_img {
  display: inline-block;
  vertical-align: middle;
}
</style>
