<template>
    <h2 class="about__nasa__title">Earth Polychromatic Imaging Camera </h2>
    <ul v-if="recievedData.length > 0" class="about__nasa__list">
          <li v-for="(item, index) in recievedData" :key="index" class="about__nasa__item">
            <img class="nasa__item__img" :src="`https://epic.gsfc.nasa.gov/archive/natural/${itemYear}/${itemMonth}/${itemDay}/png/${item.image}.png`" width="1200" height="700">
            <h3 class="nasa__item__title"> {{ item.date }}</h3>
          </li>
    </ul>
    <div class="about__loading" v-else>
          <img :src="LoadingIcon" alt="loading icon" title="loading icon"/>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import LoadingIcon from "@/assets/icons/loading.svg";

export default defineComponent({
    name: 'EpiCamera',
    setup() {
      return {
        LoadingIcon
      }
    },
    data() {
        return {
            imgSrc: 'https://placehold.co/1200x700',
            apiKey: 'aeZ2bfmb7wUKULd1WXaGpWoyoi59hOTZI6zGzKfG',
            recievedData: [] as Array<any>,
            itemDay: '',
            itemMonth: '',
            itemYear: '',
        }
    },
    methods: {
        getData() {
            const API = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${this.apiKey}`;
            fetch(API)
            .then(res => res.json())
            .then(data => (
                this.recievedData = data,
                this.itemYear = (data[0].date).slice(0, 4),
                this.itemMonth = (data[0].date).slice(5, 7),
                this.itemDay = (data[0].date).slice(8, 10)))
            .catch((error) => console.log(error)) 
        }
    },
    mounted() {
        this.getData()
    },
})

</script>

<style lang="scss" scoped>

.about__nasa__list {
    display: flex;
    flex-direction: row;
    gap: 15px;
    overflow-x: scroll;
}   

.nasa__item__img {
    min-width: 350px;

    @media (max-width: 500px) {
        min-width: 250px;
    }
}

.nasa__item__title {
    font-size: clamp(0.5rem, 5vw, 1.5rem);
    margin-bottom: 25px;
}

::-webkit-scrollbar{
    height: 14px;
    width: 4px;
    background: gray;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb:horizontal{
    background: #000;
    border-radius: 10px;
}

</style>