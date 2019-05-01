import Vue from 'vue'
import Router from 'vue-router'
import Extraction from '@/Page/Extraction'
import Result from '@/Page/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Extraction'
    },
    {
      path:'/Extraction',
      name:'Extraction',
      component: Extraction
    },
    {
      path:'/Result',
      name:'Result',
      component: Result
    }
  ]
})
