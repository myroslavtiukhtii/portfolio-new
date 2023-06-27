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
import aster from '../assets/images/vue/aaster.png';
import store from '../assets/images/vue/store.png';


import { ref } from 'vue';

const images = [
  aster, store
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
        title: 'Aster news website',
        link: 'https://myroslavtiukhtii.github.io/aster-news/dist/'
      },
      {
        url: images[1],
        title: 'Online store website',
        link: 'https://myroslavtiukhtii.github.io/online-store/dist/'
      }
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
