<template>
  <q-layout class="bg-grey-4" view="lHh Lpr lFf">
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

        <div>
          <q-btn
            class="bg-brown-1 shadow-24"
            dense
            round
            aria-label="Adicionar Tarefa">
            <q-icon name="add" color="green"></q-icon>
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

            <q-item-label>Início</q-item-label>
            
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

</style>
