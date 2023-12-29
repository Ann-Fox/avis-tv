<script setup>
import { defineProps } from 'vue'

defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
    validator: (value) => [
      'text',
      'textarea',
      'password',
      'email',
      'search',
      'tel'
    ].includes(value)
  }
})

</script>

<template>
  <div>
    <input
        v-if="type !== 'textarea'"
        :type="type"
        :placeholder="placeholder"
         class="form-control mb-3">

    <textarea
        v-else
        rows="3"
        class="form-control mb-3"
        placeholder="Оставьте свой отзыв">
    </textarea>
  </div>
</template>
