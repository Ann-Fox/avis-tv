<!--#5 Форма отзыва с фото во Vue-->
<script setup>
import { computed, reactive} from "vue";

const review = reactive({
  author: '',
  stars: null,
  text: '',
  photos: [],
  isRecommended: true
})

const stars = [1,2,3,4,5]
</script>

<template>
  <form class="container pt-5 pb-5">
    <input type="text"
    v-model="review.author"
    placeholder="What is your name?"
    class="form-control mb-3">

    <textarea
        v-model="review.text"
        rows="3"
    class="form-control mb-3"
    placeholder="Оставьте свой отзыв">
    </textarea>

    <h4>Оценка</h4>
    <div v-for="star in stars"
         :key="star" class="form-check">
      <input class="form-check-input" type="checkbox" value="" :id="`start${ star }`">
      <label class="form-check-label" :for="`start${ star }`">
        {{ star}}
      </label>
    </div>
    <div class="mb-3 mt-3">
      <label class="form-label">Photo</label>
      <input class="form-control" type="file">
    </div>

    <div class="form-check">
      <input class="form-check-input" type="radio" id="adv1">
      <label class="form-check-label" for="adv1">
        Не советую
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" id="adv2" checked>
      <label class="form-check-label" for="adv2">
        Советую!
      </label>
    </div>

    <button class="mt-4 btn btn-primary">
      Отправить
    </button>

  </form>
</template>
