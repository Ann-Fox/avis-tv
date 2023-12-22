<!-- 5 поиск по простому массиву -->
<script setup>
import {ref, computed} from "vue";

const products = ref ([
  'bananas',
  'apples',
  'bread',
  'sour',
  'cream milk',
  'snacks',
  'chocolate',
  'carrots'
])

const query = ref('')
const queryProducts = computed(() => {
  return products.value.filter((product) => product.indexOf(query.value) !== -1);
})
</script>

<template>
  <div>
    <input type="search"
    placeholder="Поиск продуктов..."
    v-model="query"
    >
    <br><br>

{{ query }}

    <ul>
      <li v-for="product in queryProducts">
        {{ product }}
      </li>
    </ul>
  </div>
</template>


<!--4 работа с классами-->
<!--<script setup>
import {ref} from "vue";

const users = ref ([
  {id: 1, name: 'Эмиль', age: 50},
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

        <sup :class="{
          'red': user.age > 100,
          'fz-24': user.name === 'Eva',

        }">
          {{ user.age}}
        </sup>

      </li>
    </ul>
  </div>

</template>

<style>
.red {
  color: red;
}
.fz-24 {
  font-size: 24px;
}
</style>-->

<!--
2 работа с реактивными массивами и объектами (v-for)
 3 работа с реактивными массивами и объектами (v-if, v-else-if, v-else)
 -->
<!--
<script setup>
import {ref} from "vue";

const users = ref ([
  {id: 1, name: 'Эмиль', age: 50},
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

        <sup v-if="user.name !== 'Эмиль'">
          {{ user.age}}
        </sup>

        <span v-else-if="user.age === 50">
          В расцвете сил...
        </span>

        <span v-else>В возрасте...</span>

      </li>
    </ul>
  </div>

</template>
-->


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
