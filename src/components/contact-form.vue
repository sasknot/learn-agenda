<script lang="ts">
import { defineComponent, ref } from 'vue'

interface ContactFormModel {
  name: string
  email: string
  number: string
  photo: string
}

const initialModel = {
  name: '',
  number: '',
  email: '',
  photo: ''
}

export default defineComponent({
  setup (_, { emit }) {
    const model = ref<ContactFormModel>({ ...initialModel })

    function submit (): void {
      const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const urlPattern = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
      let valid = false

      valid = Boolean(
        model.value.name
        && model.value.number
        && model.value.email
        && model.value.photo
      )
      valid = emailPattern.test(model.value.email)
      valid = urlPattern.test(model.value.photo)

      if (valid) {
        emit('add', { id: Date.now(), ...model.value })
        model.value = { ...initialModel }
      }
    }

    return { model, submit }
  }
})
</script>

<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg leading-6 text-gray-900">Add a new contact</h3>
          <p class="mt-1 text-sm text-gray-600">
            Fill in the fields, the contact will be saved in your browser cookies.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form @submit.prevent="submit">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label class="block text-sm font-medium text-gray-700">
                    Name
                    <input
                      required
                      type="text"
                      autocomplete="off"
                      class="
                        mt-1 focus:ring-indigo-500 focus:border-indigo-500 block
                        w-full shadow-sm sm:text-sm border-gray-300 rounded-md
                      "
                      v-model="model.name"
                    />
                  </label>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label class="block text-sm font-medium text-gray-700">
                    Phone number
                    <input
                      required
                      type="text"
                      autocomplete="off"
                      class="
                        mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full
                        shadow-sm sm:text-sm border-gray-300 rounded-md
                      "
                      v-model="model.number"
                    />
                  </label>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <label class="block text-sm font-medium text-gray-700">
                    Email address
                    <input
                      required
                      type="email"
                      autocomplete="off"
                      class="
                        mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full
                        shadow-sm sm:text-sm border-gray-300 rounded-md
                      "
                      v-model="model.email"
                    />
                  </label>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <label class="block text-sm font-medium text-gray-700">
                    Photo URL
                    <input
                      required
                      type="text"
                      autocomplete="off"
                      class="
                        mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full
                        shadow-sm sm:text-sm border-gray-300 rounded-md
                      "
                      v-model="model.photo"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                class="
                  inline-flex justify-center py-2 px-4 border border-transparent shadow-sm
                  text-sm font-medium rounded-md text-white bg-indigo-600
                  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
