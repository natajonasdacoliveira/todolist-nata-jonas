<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div class="mobile-only">
          <q-btn
            color=""
            dense
            round
            aria-label="AddRapido">
            <q-icon name="add"></q-icon>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>TO-DO List</q-item-label>

        <q-item @click="goToHome()" clickable tag="a" target="_blank">

          <q-item-section avatar>

            <q-icon name="house"/>

          </q-item-section>

          <q-item-section>

            <q-item-label>Home</q-item-label>
            <q-item-label caption>Página Inicial</q-item-label>
            
          </q-item-section>

        </q-item>


        <q-item @click="goToTarefas()" clickable tag="a" target="_blank">
          <q-item-section avatar>
            <q-icon name="list"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Lista de Tarefas</q-item-label>
          </q-item-section>
        </q-item>


      </q-list>

  
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>

import Home from './components/Home.vue'
import tarefas from './services/getTarefas'

export default {
  name: 'LayoutDefault',
  methods: {
    goToTarefas() {
      this.$router.push('/tarefas')
    },
    goToHome() {
      this.$router.push('/')
    }
  },
  components: {
    Home
  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style>
</style>
