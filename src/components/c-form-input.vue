<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  inheritAttrs: false,

  props: {
    modelValue: {
      type: [String, Number]
    },
    label: {
      type: String,
      default: ''
    },
    isInvalid: {
      type: Boolean,
      default: false
    }
  },

  emits: ['update:modelValue'],

  setup (props, { emit }) {
    const value = computed({
      get: () => props.modelValue,
      set (value) {
        emit('update:modelValue', value)
      }
    })

    return { value }
  }
})
</script>


<template>
  <label class="block text-sm text-gray-700">
    {{ label }}
    <input
      v-model="value"
      v-bind="$attrs"
      autocomplete="off"
      type="text"
      class="
        block w-full rounded-md border-gray-300 focus:ring-indigo-500
        focus:border-indigo-500 sm:text-sm
      "
      :class="{
        'mt-1': Boolean(label),
        'border-red-500': isInvalid
      }"
    />
  </label>
</template>
