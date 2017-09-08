<template>
  <div class="draw_buttom">
    <router-link tag="div" to="/homeAll/drawDynamic" class="draw_l"><a href="#"><p class="icon_i Dynmic_background"></p><p class="link_text">动态</p></a></router-link>
    <router-link tag="div" to="/homeAll/publish" class="draw_l"><a href="#"><span class="publish_w"><img src="./images/publish_icon.png" alt=""></span></a></router-link>
    <router-link tag="div" to="/homeAll/drawMy" class="draw_l"><a href="#"><p class="icon_i my_background"></p><p class="link_text">我的</p></a></router-link>
  </div>
</template>

<script>
export default {
  name: 'draw_buttom'
}
</script>

<style>
.draw_buttom {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 3px 0px;
    border-top: #e2e1e1 solid 1px;
    background-color: white;
    /* overflow: hidden; */
}
.draw_l {
    flex: 1;
    text-align: center;
}
.icon_i {
    display: inline_block;
    width:35px;
    height: 30px;
    text-align: center;
    margin:0 auto;
    margin-bottom: 3px;
}
.Dynmic_background {
    background: url("./images/dynamic_icon_h.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.my_background {
    background: url("./images/me_icon_h.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.icon_i img{
    width: 100%;
}
.link_text {
    color:#b0b0b0;
    font-size: 0.6rem;
}
.publish_w {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-top: -40px;
    margin-left: -30px;
    background-color: #fb6e84;
    z-index: 100px;
}
.publish_w img {
    width: 50%;
    margin-top: 15px;
}
.router-link-active .link_text{
	color: #f83a58;
}
.router-link-active .Dynmic_background {
    background: url("./images/dynamic_icon.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.router-link-active .my_background {
    background: url("./images/me_icon.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>
