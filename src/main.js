import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import './quasar'

Vue.config.productionTip = false

Vue.use( VueRouter )

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


const router = new VueRouter({
  router: [
    {
      path: '/', component: () => import('./components/Home.vue')
    },
    {
      path:'/tarefas', component: () => import('./components/Tarefas.vue')
    }
  ]
})