<!--2 работа с реактивными массивами и объектами (v-for)-->
<script setup>
import {ref} from "vue";

const users = ref ([
  {id: 1, name: 'Эмиль', age: 25},
  {id: 2, name: 'Eva', age: 125},
  {id: 3, name: 'Vally', age: 225},
])
</script>

<template>
  <div>
    <ul>
      <li v-for="user in users"
      :key="user.id"
      >
      {{ user.name}}
        <sup>{{ user.age}}</sup>
      </li>
    </ul>
  </div>

</template>


<!--1 основы с реактивностью (ref, reactive, события)-->
<!--
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

-->
