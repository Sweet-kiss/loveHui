<template>
  <div id="myDongtai_wrapper">
    <div class="myWrapper">
       <div class="headName">
          <span class="headImg">
              <img src="./img/headimg.jpg" alt="">
          </span>
          <span class="name">草莓味@二喵</span>
          <span class="pubTime">06-23 10:20</span>
       </div>
       <div class="message"><p>我的服装设计</p></div>
       <div class="myImg">
          <div class="img_wrapper">
              <div class="img_padding">
                 <div class="img_position">
                    <img class="img_p" src="./img/draw/img01.jpg" alt="">
                 </div>
              </div>
          </div>
          <div class="img_wrapper">
              <div class="img_padding">
                 <div class="img_position">
                    <img class="img_p" src="./img/draw/img02.jpg" alt="">
                 </div>
              </div>
          </div>
          <div class="img_wrapper">
              <div class="img_padding">
                 <div class="img_position">
                    <img class="img_p" src="./img/draw/img03.jpg" alt="">
                 </div>
              </div>
          </div>
         <div class="img_wrapper">
              <div class="img_padding">
                 <div class="img_position">
                    <img class="img_p" src="./img/draw/img04.jpg" alt="">
                 </div>
              </div>
          </div>
         <div class="img_wrapper">
              <div class="img_padding">
                 <div class="img_position">
                    <img class="img_p" src="./img/draw/img05.jpg" alt="">
                 </div>
              </div>
          </div>
       </div>
       <div class="Praise_head">
          <div class="Praise_wrapper">
              <div class="Praise_padding">
                 <div class="Praise_position">
                    <img class="Praise_p" src="./img/headimg/headimg01.jpg" alt="">
                 </div>
              </div>
          </div>
          <div class="Praise_wrapper">
              <div class="Praise_padding">
                 <div class="Praise_position">
                    <img class="Praise_p" src="./img/headimg/headimg02.jpg" alt="">
                 </div>
              </div>
          </div>
          <div class="Praise_wrapper">
              <div class="Praise_padding">
                 <div class="Praise_position">
                    <img class="Praise_p" src="./img/headimg/headimg03.jpg" alt="">
                 </div>
              </div>
          </div>
          <div class="Praise_wrapper">
              <div class="Praise_padding">
                 <div class="Praise_position">
                    <img class="Praise_p" src="./img/headimg/headimg04.jpg" alt="">
                 </div>
              </div>
          </div>                             
       </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'myDongtai_wrapper'
}
</script>

<style scoped>
.myWrapper {
	width: 93%;
	margin: 0 auto;
	background-color: white;
	padding: 10px 10px;
	margin: 5px auto;
	overflow: hidden;
}
.headName {
	width: 100%;
	display: flex;
}
.headImg {
	display: flex;
  width: 30px;
  height: 30px;
  overflow: hidden;
  margin-top:6px;
  border-radius: 50%;
}
.headImg img {
	width: 100%;
}
.name {
	flex: 1;
	display: block;
	height: 40px;
	line-height: 40px;
	text-indent: 10px;
	font-size: 14px;
}
.pubTime {
	display: block;
	width: 100px;
	height: 40px;
	line-height: 40px;
	text-align: center;
  font-size: 10px;
  color: #606060;
}
.message p {
	font-size: 15px;
	padding: 5px 5px;
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
.Praise_head  {
	clear: both;
	padding:5px 0px;
}
.Praise_wrapper {
	width: 6%;
  float: left;
  border-radius: 50%;
  overflow: hidden;
}
.Praise_padding {
  padding-top: 100%;
  position: relative;	
}
.Praise_position {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  font-size: 0;	
}
.Praise_p {
  width: 100%;
  height: 100%;
  object-fit: cover;	
}
</style>
