<script>
import {computed, reactive, defineComponent} from "vue";
import axios from 'axios'
import UButton from "@/components/UButton.vue";

export default defineComponent({
  name: 'ReviewForm',
  components: {
    UButton
  },

  setup(){
    const review = reactive({
      author: '',
      stars: null,
      text: '',
      photo: null,
      isRecommended: true
    })
    const submit = () => {
      console.log('submit!');

      axios.post('/api/review', review, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            console.log(('Final'))
          })
    }
     return {
      review,
      submit
    }
  }
})

// const previewFilePath = computed(() => {
//   if (review.photo) {
//     return URL.createObjectURL(review.photo)
//   }
//   return '#'
// })

// const stars = [1,2,3,4,5]
//
// const uploadFile = (e) => {
//   const [file] = e.target.files;
//   review.photo = file;
// }

</script>

<template>
  <form
      @submit.prevent.stop="submit"
      class="container pt-5 pb-5">

    <UInput/>

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
      <input
          class="form-check-input"
          type="checkbox"
          v-model="review.stars"
          :true-value="star"
          :false-value="false"
          :id="`start${ star }`">
      <label class="form-check-label" :for="`start${ star }`">
        {{ star}}
      </label>
    </div>

    <!--    Photo-->
    <div class="mb-3 mt-3">
      <label class="form-label">Photo</label>
      <input
          class="form-control"
          type="file"
          @change="uploadFile">

      <img :src="previewFilePath" alt="" class="w-100 mt-2">
    </div>

    <!--    form-check Советую!/Не советую-->
    <div class="form-check">
      <input
          class="form-check-input"
          type="radio"
          id="adv1"
          v-model="review.isRecommended"
          :value="false">
      <label class="form-check-label" for="adv1">
        Не советую
      </label>
    </div>
    <div class="form-check">
      <input
          class="form-check-input"
          type="radio"
          id="adv2"
          v-model="review.isRecommended"
          :value="true">
      <label class="form-check-label" for="adv2">
        Советую!
      </label>
    </div>

    <!--button Отправить-->
    <UButton>
      Отправить
    </UButton>


  </form>
</template>
