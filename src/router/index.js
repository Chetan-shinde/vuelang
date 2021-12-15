import { createRouter, createWebHistory } from 'vue-router'
import En from "../views/En.vue"
import De from "../views/De.vue";
import store from "../store.js";
import Users from "../views/users/Users.vue";
import UserHome from "../views/users/UserHome.vue";

const routes = [
  {
    path: '/en/:catchAll(.*)?',
    component: En,
    props:{language:"en"}
  },
  {
    path: '/de/:catchAll(.*)?',
    component: De,
    props:{language:"de"}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { 
    path: '/users/:id',
    component: Users,
    children:[ {path:'', component: UserHome, props: true }]
  },
  {
    path:'/',
    redirect:'/en'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next)=>{
  console.log(to);
  if(to.path.indexOf('45') != -1){
   throw new Error('not found route')
  }else{
    if(to.matched[0].props.default.language == 'en'){
      let arrOfCatUrl = ['erectile-dysnfunction', 'combined-pill', 'composition'];
      if(arrOfCatUrl.indexOf(to.params.catchAll) != -1){
        store.commit('setCurrentComponent', {currentComponent:'Category'})
        await store.dispatch('actionGetCategories')
      }else{
        store.commit('setCurrentComponent', {currentComponent:'HelloWorld'})
      }
  
  
  
    }
    else if(to.matched[0].props.default.language == 'de'){
      let arrOfCatUrl = ['impotence', 'contraception'];
      if(arrOfCatUrl.indexOf(to.params.catchAll) != -1){
        store.commit('setCurrentComponent', {currentComponent:'Category'})
        await store.dispatch('actionGetCategories')
      }else{
        store.commit('setCurrentComponent', {currentComponent:'HelloWorld'})
      }
    }
    
   
    next();
  }

});

export default router
