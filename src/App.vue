<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-green-300 py-10">
      <div class="container mx-auto">
        <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
        <h1 class="font-bold text-4xl">Agenda</h1>
        <p>Create your own list of contacts online</p>
      </div>
    </header>

    <main class="flex-grow py-20">
      <div class="container mx-auto">
        <ContactList :items="contacts" />
        <div class="mt-20">
          <ContactForm @add="addToContacts" />
        </div>
      </div>
    </main>

    <footer class="bg-green-200 py-10">
      <div class="container mx-auto text-right">
        <a href="http://github.com/sasknot">@sasknot</a>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactList from './components/contact_list.vue'
import ContactForm from './components/contact_form.vue'

export default defineComponent({
  name: 'App',

  components: {
    ContactList,
    ContactForm
  },

  data () {
    return {
      contacts: [{
        id: 1,
        name: 'Rafael Silva',
        email: 'rafaelfsilva1@gmail.com',
        number: '(12) 1234-5678'
      }]
    }
  },

  methods: {
    addToContacts (contact) {
      this.contacts.push({ ...contact })
    }
  }
})
</script>

<style>
  body {
    background-color: theme("colors.green.50");
  }
</style>
