<template>

<q-page class="flex">

    <q-list bordered padding>

        <q-item v-for="(fruit, index) in fruits" :key="index" >

            <q-item-section>
                <q-item-label>Single line item</q-item-label>
                <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>

            <q-item-section side center>
                <q-icon name="close" color="red"/>
            </q-item-section>

      </q-item>
      
      <q-separator bordered inset />


    </q-list>

</q-page>

</template>

<style>
</style>

<script>
export default {
  name: 'Tarefas.vue',
    data() {
        return {
            fruits: ['apple', 'banana', 'orange']
        };
    },
  props: {
      tarefas: Array,
  }
}
</script>