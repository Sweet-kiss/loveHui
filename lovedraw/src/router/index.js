import Vue from 'vue'
import Router from 'vue-router'
import HomeAll from '@/homeAll'
import DrawDynamic from '@/components/drawDynamic/drawDynamic'
import Publish from '@/components/publish/publish'
import DrawMy from '@/components/drawMy/drawMy'
import AllDongta from '@/components/bace/allDongta/allDongta'
import MyGuanzhu from '@/components/bace/myGuanzhu/myGuanzhu'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/homeAll/drawDynamic/allDongta' },
    { path: '/homeAll/drawDynamic', redirect: '/homeAll/drawDynamic/allDongta' },
    {
      path: '/homeAll',
      name: 'homeAll',
      component: HomeAll,
      children: [
        {
          path: '/homeAll/drawDynamic',
          name: 'drawDynamic',
          component: DrawDynamic,
          children: [
            {
              path: '/homeAll/drawDynamic/allDongta',
              name: 'allDongta',
              component: AllDongta
            },
            {
              path: '/homeAll/drawDynamic/myGuanzhu',
              name: 'myGuanzhu',
              component: MyGuanzhu
            }
          ]
        },
        {
          path: '/homeAll/publish',
          name: 'publish',
          component: Publish
        },
        {
          path: '/homeAll/drawMy',
          name: 'drawMy',
          component: DrawMy
        }
      ]
    }
  ]
})
