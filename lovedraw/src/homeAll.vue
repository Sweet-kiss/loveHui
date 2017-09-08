<template>
  <div class="homeAll">
     <router-view></router-view>
     <draw-buttom></draw-buttom>
  </div>
</template>

<script>
import DrawButtom from '@/components/drawButtom/drawButtom'
export default {
  name: 'homeAll',
  components: {
    DrawButtom
  }
}
</script>

<style>
body{
  background-color: #f6f6f6;
}
</style>
