<script setup>
import { defineProps, defineEmits, watch, ref } from 'vue'

const emits = defineEmits(['update:modelValue'])

const {modelValue} = defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
    validator: (val) => [
      'text',
      'textarea',
      'password',
      'email',
      'search',
      'tel'
    ].includes(val)
  }
})

const value = ref(modelValue);

watch(value, ()=> {
  emits('update:modelValue', value)
})

</script>

<template>
  <div>
    <input
        v-if="type !== 'textarea'"
        :type="type"
        :placeholder="placeholder"
         class="form-control mb-3"
        v-model="value">

    <textarea
        v-else
        rows="3"
        class="form-control mb-3"
        placeholder="Оставьте свой отзыв"
    v-model="value">
    </textarea>
  </div>
</template>
