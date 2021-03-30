<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-green-300 py-10">
      <div class="container mx-auto">
        <img alt="Vue logo" src="./assets/logo.png" class="float-left w-16 mr-4" />
        <h1 class="font-bold text-4xl">Agenda</h1>
        <p>Create your own list of contacts online</p>
      </div>
    </header>

    <main class="flex-grow py-20">
      <div class="container mx-auto">
        <ContactList :items="contacts" @remove="removeFromContacts" />
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
import Cookies from 'js-cookie'
import { defineComponent } from 'vue'
import ContactList from './components/contact_list.vue'
import ContactForm from './components/contact_form.vue'

const cookiesManager = Cookies.withConverter({
  read (value: string): any {
    return value ? JSON.parse(value) : value
  },

  write <T>(value: T) {
    return JSON.stringify(value).replace(/\\"/g, '"')
  }
})

interface Contact {
  id: number
  name: string
  email: string
  number: string
}

export default defineComponent({
  name: 'App',

  components: {
    ContactList,
    ContactForm
  },

  data () {
    return {
      contacts: [] as Contact[]
    }
  },

  methods: {
    addToContacts (contact: Contact): void {
      this.contacts.push({ ...contact })
      cookiesManager.set('agenda', [...this.contacts], { expires: 30 })
    },

    removeFromContacts (removedId: number): void {
      if (removedId) {
        const newContacts = this.contacts.filter((contact: Contact) => {
          return contact.id !== removedId
        })

        this.contacts = [...newContacts]
        cookiesManager.set('agenda', newContacts, { expires: 30 })
      }
    }
  },

  created (): void {
    const agenda = cookiesManager.get('agenda') as any as Contact[]

    if (agenda && agenda.length) {
      this.contacts = agenda
    }
  }
})
</script>

<style>
  body {
    background-color: theme("colors.green.50");
  }
</style>
