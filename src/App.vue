<!--#5 Форма отзыва с фото во Vue-->
<script setup>

// import {computed, reactive} from "vue";
// import axios from 'axios'
// // import UInput from "@/components/global/UInput.vue";
//
// const review = reactive({
//   author: '',
//   stars: null,
//   text: '',
//   photo: null,
//   isRecommended: true
// })
//
// const previewFilePath = computed(() => {
//   if (review.photo) {
//     return URL.createObjectURL(review.photo)
//   }
//   return '#'
// })
//
// const stars = [1,2,3,4,5]
//
// const submit = () => {
//   console.log('submit!');
//
//   axios.post('/api/review', review, {
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
//   })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => {
//     console.log(('Final'))
//   })
// }

// const uploadFile = (e) => {
//   const [file] = e.target.files;
//   review.photo = file;
// }
import ReviewForm from "@/components/ReviewForm.vue";
</script>

<template>
<ReviewForm/>
</template>
