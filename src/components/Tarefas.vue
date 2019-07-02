<template>
<q-page class="flex flex-center">
    <q-list bordered padding>
        <q-item>
            <q-item-section>
                <q-item-label overline>OVERLINE</q-item-label>
                <q-item-label>Single line item</q-item-label>
                <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                <q-icon name="star" color="yellow"/>
            </q-item-section>
        </q-item>
    </q-list>
</q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Tarefas.vue',
  props: {
      tarefas: Array
  }
}
</script>
