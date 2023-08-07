<template>
  <div class="projects__vue">
    <div class="gallery">
        <div class="gallery__buttons">
          <button class="prev-button" @click="prevPhoto">Previous</button>
          <button class="next-button" @click="nextPhoto">Next</button>
        </div>
        <div v-show="index == currentPhotoIndex" v-for="(photo, index) in photos" :key="index" class="photo">
          <img class="gallery__image" :src="photo.url" :alt="photo.title" width="550" height="330"/>
          <a target="_blank" :href="photo.link" class="gallery__caption">Demo - {{ photo.title }}</a>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import tesla from '../assets/images/vue/tesla.png';
import aster from '../assets/images/vue/aaster.png';
import store from '../assets/images/vue/store.png';


import { ref } from 'vue';

const images = [
tesla, store, aster,
];

interface Photo {
  url: string,
  title: string,
  link: string
}

export default {
  name: 'PhotoGallery',
  setup() {
    const photos = ref<Photo[]>([
      {
        url: images[0],
        title: 'Tesla website clone (Nuxt 3 and Tailwind CSS)',
        link: 'https://myroslavtiukhtii.github.io/tesla-nuxt/'
      },
      {
        url: images[1],
        title: 'Online store website',
        link: 'https://myroslavtiukhtii.github.io/online-store/dist/'
      },
      {
        url: images[2],
        title: 'Aster news website',
        link: 'https://myroslavtiukhtii.github.io/aster-news/dist/'
      },
    ]);

    const currentPhotoIndex = ref(0);

    function prevPhoto() {
      if (currentPhotoIndex.value > 0) {
        currentPhotoIndex.value--;
      }
    }

    function nextPhoto() {
      if (currentPhotoIndex.value < photos.value.length - 1) {
        currentPhotoIndex.value++;
      }
    }

    return {
      photos,
      currentPhotoIndex,
      prevPhoto,
      nextPhoto,
    };
  },
};
</script>

<style lang="scss" scoped>


</style>
