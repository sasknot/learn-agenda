<script lang="ts">
import { defineComponent } from 'vue'
import ContactList from './components/contact-list.vue'
import ContactForm from './components/contact-form.vue'

type Contact = {
  id: number
  name: string
  email: string
  number: string
  photo: string
}

// async function fileFromUrl (url: string): Promise<Blob> {
//   const xhr = new XMLHttpRequest()

//   return new Promise((resolve, reject) => {
//     xhr.addEventListener('load', async () => {
//       resolve(xhr.response)
//     })
//     xhr.addEventListener('error', () => {
//       reject(xhr.response)
//     })
//     xhr.open('GET', url)
//     xhr.responseType = 'blob'
//     xhr.send()
//   })
// }

export default defineComponent({
  name: 'App',

  components: {
    ContactList,
    ContactForm
  },

  data () {
    return {
      contacts: []
    } as { contacts: Contact[] }
  },

  created (): void {
    let agenda = []

    try {
      agenda = JSON.parse(localStorage.getItem('agenda') || '[]')

      if (!Array.isArray(agenda)) {
        agenda = []
      }
    } catch {
      // ...
    }

    this.contacts = agenda
  },

  methods: {
    async addToContacts (contact: Contact): Promise<void> {
      // @TODO: resize image
      // const file = await fileFromUrl(contact.photo)
      // console.log('newPhotoUrl', URL.createObjectURL(file))
      // contact.photo = URL.createObjectURL(file)

      this.contacts.push({ ...contact })
      localStorage.setItem('agenda', JSON.stringify(this.contacts))
    },

    removeFromContacts (removedId: number): void {
      if (removedId) {
        const newContacts = this.contacts.filter((contact: Contact) => {
          return contact.id !== removedId
        })

        this.contacts = [...newContacts]
        localStorage.setItem('agenda', JSON.stringify(this.contacts))
      }
    }
  }
})
</script>

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

<style>
body {
  background-color: theme("colors.green.50");
}
</style>
