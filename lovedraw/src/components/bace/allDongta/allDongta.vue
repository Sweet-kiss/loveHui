<template>
  <div class="allDongta">
    <div class="dongItem">
        <div class="head_top">
          <div class="head_left">
            <ul>
              <li><span class="head_img"><img src="./img/headimg.jpg" alt=""></span></li>
              <li class="peopleName">子辰手绘</li>
              <li><span class="guanZhu">+ 已关注</span></li>
            </ul>
          </div>
          <div class="header_right"><span>07-15 12:30</span></div>
        </div>
        <div class="cent_text"><p>喜欢我画的就给个赞呗!</p></div>
        <div class="peo_img">
           <ul>
             <li><img src="./img/peo_img/peo_01.png" alt=""></li>
             <li><img src="./img/peo_img/peo_02.png" alt=""></li>
             <li><img src="./img/peo_img/peo_03.png" alt=""></li>
             <li><img src="./img/peo_img/peo_04.png" alt=""></li>
             <li><img src="./img/peo_img/peo_05.png" alt=""></li>
           </ul>
        </div>
        <div class="work_name">
           <ul>
             <li>作品名：色彩静物</li>
             <li>分类：水粉</li>
             <li>作者寄语：爱生活，文艺清新</li>
           </ul>
        </div>
        <div class="peo_praise">
          <div>
              <ul>
                <li><span><img src="" alt=""></span></li>
                <li><span><img src="" alt=""></span></li>
                <li><span><img src="" alt=""></span></li>
                <li><span><img src="" alt=""></span></li>
              </ul>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'allDongta'
}
</script>

<style scoped>
.allDongta {
  width:96%;
  margin: 3px auto;
  padding: 3px;
  background-color: #fff;
  border: #efeeee solid 1px;
  overflow: hidden;
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
.peo_img ul li {
  float: left;
  width: 33.3%;
  height: 80px;
  margin-bottom: 0.3rem;
  text-align: center;
  overflow: hidden;
}
.peo_img ul li img {
  width: 98%;
}
.work_name {
  clear: both;
}
.work_name ul li {
  font-size: 13px;
  margin-bottom: 4px;
  color: #666664;
}
</style>
