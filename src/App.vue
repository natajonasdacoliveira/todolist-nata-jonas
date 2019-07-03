<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy bg-brown-6">
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
          ToDoList
        </q-toolbar-title>

        <div class="mobile-only">
          <q-btn
            class="bg-deep-purple-4 shadow-24"
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

        <q-item to="/" exact clickable tag="a">

          <q-item-section avatar>

            <q-icon name="house"/>

          </q-item-section>

          <q-item-section>

            <q-item-label>Home</q-item-label>
            <q-item-label caption>Página Inicial</q-item-label>
            
          </q-item-section>

        </q-item>


        <q-item to="/tarefas" exact clickable tag="a">
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
  components: {
    Home
  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
}
</script>

<style>
  .green-gradient {
background: rgb(11,55,18);
background: linear-gradient(0deg, rgba(11,55,18,1) 0%, rgba(32,128,19,1) 50%, rgba(138,228,115,1) 54%);
  }
</style>
