import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import './quasar'

Vue.config.productionTip = false

Vue.use( VueRouter )

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', component: () => import('./components/Home.vue')
    },
    {
      path:'/tarefas', component: () => import('./components/Tarefas.vue')
    }
  ]
})

new Vue({

  router,
  render: h => h(App),
}).$mount('#app')


