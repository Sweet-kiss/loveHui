<template>
<div class="DongT_w">
  <div class="drawDybamic">
     <router-link tag="div" to="/homeAll/drawDynamic/allDongta" class="tabitem all_dt">所有动态</router-link>
     <router-link tag="div" to="/homeAll/drawDynamic/myGuanzhu" class="tabitem my_follow">我的关注</router-link>
  </div>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>

<script>
export default {
  name: 'drawDybamic'
}
</script>

<style scoped>
.drawDybamic {
  display: flex;
  width:100%;
  background:-webkit-linear-gradient(left, rgba(251, 109, 132, 1) , rgba(247,215, 153, 1));
}
.tabitem {
   flex:1;
   height: 40x;
   line-height: 40px;
   text-align: center;
   color: white;
}
.router-link-active {
  border-bottom: #a2f70e solid 3px;
  color: #f8f3b7;
}
</style>
