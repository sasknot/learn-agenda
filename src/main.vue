<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue'
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
  components: { ContactList, ContactForm },

  setup () {
    const contacts = ref<Contact[]>([])

    async function addToContacts (contact: Contact): Promise<void> {
      // @TODO: resize image
      // const file = await fileFromUrl(contact.photo)
      // console.log('newPhotoUrl', URL.createObjectURL(file))
      // contact.photo = URL.createObjectURL(file)

      contacts.value.push({ ...contact })
      localStorage.setItem('agenda', JSON.stringify(contacts.value))
    }
    function removeFromContacts (removedId: number): void {
      if (removedId) {
        const newContacts = contacts.value.filter((contact: Contact) => {
          return contact.id !== removedId
        })

        contacts.value = [...newContacts]
        localStorage.setItem('agenda', JSON.stringify(contacts.value))
      }
    }

    onBeforeMount(() => {
      let agenda = []

      try {
        agenda = JSON.parse(localStorage.getItem('agenda') || '[]')

        if (!Array.isArray(agenda)) {
          agenda = []
        }
      } catch {
        // ...
      }

      contacts.value = agenda
    })

    return { contacts, addToContacts, removeFromContacts }
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
