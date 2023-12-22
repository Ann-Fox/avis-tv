<!-- 7 поиск по массиву объектов с несколькими параметрами -->
<script setup>
import {ref, computed} from "vue";

const products = ref ([
  {title: 'bananas', price: 113},
  {title: 'apples', price: 80.1},
  {title: 'bread', price: 87.9},
  {title: 'sour', price: 68},
  {title: 'cream milk', price: 52},
  {title: 'snacks', price: 104},
  {title: 'chocolate', price: 21.3},
  {title: 'carrots', price: 243}
])

const query = ref('')

const queryProducts = computed(() => {

  let p = products.value;
  let search = query.value;

  if (search) {
    p = p.filter((product) => {
      return  product.title.indexOf(search) !== -1 ||
          // product.price.toString().indexOf(search) !== -1
          product.price <=search
    })
  }

  return p;
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
      <li v-for="product in queryProducts"
      :key="product"
      >
        {{ product.title }}
        <sup>{{product.price.toLocaleString()}} &#x20bd</sup>
      </li>
    </ul>
  </div>
</template>

<!-- 6 пример простейшего вычислительного свойства -->
<!--<script setup>
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

const reverseQuery = computed(() => {
  return query.value.split('').reverse().join('')
})
</script>

<template>
  <div>
    <input type="search"
           placeholder="Поиск продуктов..."
           v-model="query"
    >
    <br><br>

    {{ reverseQuery }}

    <ul>
      <li v-for="product in queryProducts">
        {{ product }}
      </li>
    </ul>
  </div>
</template>-->


<!-- 5 поиск по простому массиву -->
<!--<script setup>
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
</template>-->


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
