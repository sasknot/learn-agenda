<template>
  <template v-if="items && items.length">
    <div class="shadow overflow-hidden border-b border-gray-200 rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 p-3 text-left text-xs text-gray-500 uppercase tracking-wider">
              Name and email
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
              Phone number
            </th>
            <th scope="col">
              <span class="sr-only">Remove</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="item in items" :key="item.id">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="Rafael Silva">
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">
                    {{ item.name }}
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ item.email }}
                  </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              {{ item.number }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                class="text-indigo-600 hover:text-indigo-900"
                @click="remove(item.id)"
              >Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <template v-else>
    <p class="py-20 text-xl text-center font-bold">
      No contact registered yet, please use the form below to register one.
    </p>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactList',

  props: {
    items: Object
  },

  methods: {
    remove (id: number) {
      this.$emit('remove', id)
    }
  }
})
</script>
