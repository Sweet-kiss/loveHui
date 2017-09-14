<template>
  <div class="work_warpper_all">
    <div class="work_main">
          <div class="work_wrapper">
              <div class="work_padding">
                 <div class="work_position">
                    <img class="work_p" src="./workimg/work01.jpg" alt="">
                 </div>
              </div>
          </div>
          <div class="work_wrapper">
              <div class="work_padding">
                 <div class="work_position">
                    <img class="work_p" src="./workimg/work02.jpg" alt="">
                 </div>
              </div>
          </div>  
          <div class="work_wrapper">
              <div class="work_padding">
                 <div class="work_position">
                    <img class="work_p" src="./workimg/work03.jpg" alt="">
                 </div>
              </div>
          </div> 
          <div class="work_wrapper">
              <div class="work_padding">
                 <div class="work_position">
                    <img class="work_p" src="./workimg/work04.jpg" alt="">
                 </div>
              </div>
          </div> 
          <div class="work_wrapper">
              <div class="work_padding">
                 <div class="work_position">
                    <img class="work_p" src="./workimg/work05.jpg" alt="">
                 </div>
              </div>
          </div> 
          <div class="work_wrapper">
              <div class="work_padding">
                 <div class="work_position">
                    <img class="work_p" src="./workimg/work06.jpg" alt="">
                 </div>
              </div>
          </div>  
          <div class="work_wrapper">
              <div class="work_padding">
                 <div class="work_position">
                    <img class="work_p" src="./workimg/work07.jpg" alt="">
                 </div>
              </div>
          </div> 
           <div class="work_wrapper">
              <div class="work_padding">
                 <div class="work_position">
                    <img class="work_p" src="./workimg/work08.jpg" alt="">
                 </div>
              </div>
          </div> 
           <div class="work_wrapper">
              <div class="work_padding">
                 <div class="work_position">
                    <img class="work_p" src="./workimg/work09.jpg" alt="">
                 </div>
              </div>
          </div>
           <div class="work_wrapper">
              <div class="work_padding">
                 <div class="work_position">
                    <img class="work_p" src="./workimg/work10.jpg" alt="">
                 </div>
              </div>
          </div> 
           <div class="work_wrapper">
              <div class="work_padding">
                 <div class="work_position">
                    <img class="work_p" src="./workimg/work11.jpg" alt="">
                 </div>
              </div>
          </div>
          <div class="work_wrapper">
              <div class="work_padding">
                 <div class="work_position">
                    <img class="work_p" src="./workimg/work11.jpg" alt="">
                 </div>
              </div>
          </div>                                                                                     
    </div>
  </div>
</template>

<script>
export default {
  name: 'work_warpper'
}
</script>

<style scoped>
.work_warpper_all {
	width: 98%;
	height: 100%;
	margin: 0 auto;
	overflow: hidden;
}
.work_wrapper {
	width: 33.3%;
  float: left;
  overflow: hidden;
}
.work_padding {
  padding-top: 100%;
  position: relative;	
}
.work_position {
  position: absolute;
  top: 3px;
  right: 3px;
  bottom: 3px;
  left: 3px;
  font-size: 0;	
}
.work_p {
  width: 100%;
  height: 100%;
  object-fit: cover;	
}
</style>
