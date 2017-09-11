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
  </div>
</template>

<script>
import TopMain from '@/components/spare/topMain/topMain'

export default {
  data () {
    return {
    }
  },
  components: {
    TopMain
  }
}
</script>

<style>
.pub_text {
  width:95%;
  height: 160px;
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
</style>
