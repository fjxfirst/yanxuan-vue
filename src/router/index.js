import Vue from 'vue'
import Router from 'vue-router'
import Interlayer from '../pages/interlayer/interlayer'
import Home from '../pages/Home/Home'
import Kind from '../pages/Kind/Kind'
import KnowGood from '../pages/KnowGood/KnowGood'
import Personage from '../pages/Personage/Personage'
import ShopCart from '../pages/ShopCart/ShopCart'
import DownLoad from '../pages/DownLoad/DownLoad'
import HomeMain from '../components/HomeMain/HomeMain'
import Cate from '../components/Cate/Cate'
import Regist from '../pages/Regist/Regist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Interlayer',
      component: Interlayer
    },
    {
      path:'/DownLoad',
      name:'DownLoad',
      component:DownLoad,
      meta:{
        isShow:true
      }
    },
    {
      path:'/Home',
      name:'Home',
      component:Home,
      meta:{
        isShow:true
      },
      children:[
        {
          path: '/Home/HomeMain',
          component: HomeMain,
          meta:{
            isShow:true
          }
        },
        {
          path:'/Home/Cate/:index',
          component: Cate,
          meta:{
            isShow:true
          }
        },
        {
          path:'',
          redirect:'/Home/HomeMain'
        }
      ]
    },
    {
      path:'/Kind',
      name:'Kind',
      component:Kind,
      meta:{
        isShow:true
      }
    },
    {
      path:'/KnowGood',
      name:'KnowGood',
      component:KnowGood,
      meta:{
        isShow:true
      }
    },
    {
      path:'/Personage',
      name:'Personage',
      component:Personage,
    },
    {
      path:'/ShopCart',
      name:'ShopCart',
      component:ShopCart,
      meta:{
        isShow:true
      }
    },
    {
      path:'/Regist',
      component:Regist
    }

  ]
})
