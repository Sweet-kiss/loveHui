<template>
  <div id="publish">
    <top-main></top-main>
    <div class="pub_text">
       <textarea cols="80" rows="8" id="msg" class="comments">作者寄语：</textarea>
    </div>
    <div class="btn_list">
       <ul>
         <li><span class="btn_text">作品名：</span><span class="inp_t"><input type="text"></span></li>
         <li><span class="btn_text">作品分类：</span><span class="inp_t"><input type="text"></span></li>
         <li><span class="btn_text">表现题材：</span><span class="inp_t"><input type="text"></span></li>
       </ul>
    </div>
    <div class="suo_wrapper">
        <div class="suo_w"  v-for="(item, index) in lists">
           <div class="suo_padding">
             <div class="suo_position">
                 <img class="suo_img" :src="item" alt="">
             </div>
           </div>
           <span @click="remove(index)" class="delete_img">-</span>
        </div>
    </div>
    <div class="btn_w">
       <div class="room_add_img">
         <span>添加图片</span>
         <input  type="file" @change="selectFileChange" accept="image/png, image/jpeg">
       </div>
       <div class="btn_default"><span class="btn_push">发布</span></div>
    </div>
  </div>
</template>

<script>
import TopMain from '@/components/spare/topMain/topMain'
export default {
  data () {
    return {
      lists: []
    }
  },
  components: {
    TopMain
  },
  methods: {
    selectFileChange (event) {
      let reader = new FileReader()
      console.log(event.target.files.length)
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (e) => {
        this.lists.push(e.target.result)
      }
    },
    remove (index) {
      this.lists.splice(index, 1)
    }
  }
}
</script>

<style>
.pub_text {
  width:95%;
  height: 80px;
  margin: 5px auto;
  overflow: hidden;
}
.comments {  
    width: 100%; /*自动适应父布局宽度*/  
    overflow: auto;  
    word-break: break-all;
    font-size: 16px;
    border:none;
    color: #8a8a89;
   }
.btn_list ul li {
  width: 95%;
  display: flex;
  margin: 0 auto;
  margin-bottom: 5px;
  height: 40px;
  line-height: 40px;
}
.btn_text {
  width: 90px;
}
.inp_t {
  flex: 1;
  width: 100%;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
}
.inp_t input {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 35px;
  line-height: 35px;
  border-radius: 0px;
}
.suo_wrapper {
  width: 100%;
}
.suo_w {
  position: relative;
  width: 25%;
  float: left;
}
.suo_padding {
  padding-top: 100%;
  position: relative;
}
.suo_position {
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
  font-size: 0;
}
.suo_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.delete_img {
  position: absolute;
  top:0;
  right: 0;
  display: inline-block;
  width: 25px;
  height: 25px;
  background-color: red;
  font-size: 25px;
  text-align: center;
  line-height: 22px;
  color: white;
  border-radius: 50%;
}
.btn_w {
  clear: both;
  display: flex;
  padding-top: 20px;
}
.btn_default {
  flex:1;
  text-align: center;
}
.btn_push{
  display: inline-block;
  width: 60%;
  margin: 0 auto;
  padding: 15px;
  color: #fb6e84;
  border: #fb6e84 solid 1px;
  border-radius: 30px;
}
.btn_push {
  background-color: #fb6e84;
  color: white;
}

.room_add_img{
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.room_add_img >span:nth-child(1){
  margin: 0 auto;
  width: 60%;
  text-align: center;
  padding: 15px;
  border:#fb6e84 solid 1px;
  color: #fb6e84;
  border-radius: 30px;
  overflow: hidden;
}
.room_add_img >span:nth-child(2){
  margin-bottom: 10px;
}

.room_add_img input{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 99999;
  opacity: 0;
}

</style>
