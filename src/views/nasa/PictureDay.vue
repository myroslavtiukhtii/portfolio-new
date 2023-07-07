<template>
        <h2 class="about__nasa__title">Astronomy Picture of the Day</h2>
        <div v-if="imgSrc" class="about__nasa__item">
          <img class="nasa__item__img" :src="imgSrc" alt="" width="1200" height="800">
          <h3 class="nasa__item__title"> {{ itemTitle }} ({{ itemDate }}) </h3>
        </div>
        <div class="about__loading" v-else>
          <img :src="LoadingIcon" alt="loading icon" title="loading icon"/>
        </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import LoadingIcon from "@/assets/icons/loading.svg";

export default defineComponent({
  name: 'NasaApi',
  setup() {
      return {
        LoadingIcon
      }
    },
  data() {
    return {
      keyWord: '',
      apiKey: 'aeZ2bfmb7wUKULd1WXaGpWoyoi59hOTZI6zGzKfG',
      searchData: [],
      imgSrc: '',
      itemTitle: '',
      itemDate: '',
    }
  },
  methods: {
    async getData() {
      const API = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`
      fetch(API)
      .then(response => response.json())
      .then(data => (
        this.searchData = data,
        this.imgSrc = data.url,
        this.itemTitle = data.title,
        this.itemDate = data.date))
      .catch((error) => {console.log(error)});
    },
  },
  mounted() {
      this.getData()
    }
});

</script>

<style lang="scss">

.about__nasa__title {
  font-size: clamp(1rem, 5vw, 2rem);
  margin-bottom: 35px;
  text-align: center;
  line-height: 150%;
}

.nasa__item__img {
  width: 100%;
  height: auto;
  border-radius: 15px;
  margin-bottom: 35px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.nasa__item__title {
  font-size: clamp(0.2rem, 5vw, 1.5rem);
  text-align: center;
  line-height: 150%;
}

.about__loading {
  justify-self: center;
  img {
    max-width: 150px;
    @media (max-width: 800px) {
      max-width: 100px;
    }
  }
}

</style>