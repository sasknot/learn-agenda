<template>
  <div class="container mx-auto">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Agenda</h1>
    <p>Create your own list of contacts online</p>
    <ContactList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactList from './components/contact_list.vue'

export default defineComponent({
  name: 'App',
  components: {
    ContactList
  }
})
</script>
