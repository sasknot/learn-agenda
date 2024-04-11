<script lang="ts">
import { defineComponent } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { CFormInput } from '@/components'

export default defineComponent({
  components: { CFormInput },

  setup (_, { emit }) {
    const { errors, defineField, handleSubmit, resetForm } = useForm({
      validationSchema: toTypedSchema(
        z.object({
          name: z.string().min(1),
          email: z.string().min(1).email(),
          number: z.string().min(1),
          photo: z.string().min(1).url()
        })
      )
    })
    const [name, nameAttrs] = defineField('name')
    const [email, emailAttrs] = defineField('email', (state) => {
      return {
        validateOnModelUpdate: state.errors.length > 0
      }
    })
    const [number, numberAttrs] = defineField('number')
    const [photo, photoAttrs] = defineField('photo')

    const submit = handleSubmit((values) => {
      emit('add', { id: Date.now(), ...values })
      resetForm()
    })

    return {
      submit,
      errors,
      name,
      nameAttrs,
      email,
      emailAttrs,
      number,
      numberAttrs,
      photo,
      photoAttrs
    }
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
                  <CFormInput
                    v-model="name"
                    v-bind="nameAttrs"
                    label="Name"
                    :isInvalid="Boolean(errors.name)"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <CFormInput
                    v-model="number"
                    v-bind="numberAttrs"
                    label="Phone number"
                    :isInvalid="Boolean(errors.number)"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <CFormInput
                    v-model="email"
                    v-bind="emailAttrs"
                    label="Email address"
                    :isInvalid="Boolean(errors.email)"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <CFormInput
                    v-model="photo"
                    v-bind="photoAttrs"
                    label="Photo URL"
                    :isInvalid="Boolean(errors.photo)"
                  />
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
