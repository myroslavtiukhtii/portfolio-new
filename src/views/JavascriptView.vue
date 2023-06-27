<template>
  <div class="projects__js">
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
import player from '../assets/images/js/player.png';
import weather from '../assets/images/js/weather.png';

import { ref } from 'vue';

const images = [
  player, weather
];

interface Photo {
  url: string;
  title: string;
  link: string;
}

export default {
  name: 'PhotoGallery',
  setup() {
    const photos = ref<Photo[]>([
      {
        url: images[0],
        title: 'Vanilla JS player',
        link: 'https://myroslavtiukhtii.github.io/music-player-js/dist/'
      },
      {
        url: images[1],
        title: 'Weather API',
        link: 'https://myroslavtiukhtii.github.io/weather-api-app/dist/'
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
