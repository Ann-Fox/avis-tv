<script setup>
import { reactive } from "vue";

const counter = reactive({
  count: 5
});
const increment = () => {
  counter.count++
}
</script>

<template>
  <div>
    <button @click="increment">
      Count:
      <strong>{{ counter.count }}</strong>
    </button>
  </div>
</template>

