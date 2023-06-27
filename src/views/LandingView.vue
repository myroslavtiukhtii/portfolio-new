<template>
  <div class="projects__landings">
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
import bakery from '../assets/images/landings/bakery.png';
import nftico from '../assets/images/landings/nftico.png';
import coffe from '../assets/images/landings/coffe.png';
import arhitecture from '../assets/images/landings/studio.jpg';
import fashion from '../assets/images/landings/fashion.png';
import limon from '../assets/images/landings/limon.png';
import sneakers from '../assets/images/landings/sneakers.png';
import abstudio from '../assets/images/landings/abstudio.png';
import data from '../assets/images/landings/data.png';
import denis from '../assets/images/landings/denis.png';
import foodmood from '../assets/images/landings/foodmood.png';
import games from '../assets/images/landings/games.png';
import guitars from '../assets/images/landings/guitars.jpg';
import ilove from '../assets/images/landings/ilove.png';
import monticello from '../assets/images/landings/monticello.jpg';
import productly from '../assets/images/landings/productly.png';
import wood from '../assets/images/landings/wood.jpg';

import { ref } from 'vue';

const images = [
  bakery, nftico, coffe, arhitecture, fashion, limon, sneakers,
  abstudio, data, denis, foodmood, games, guitars, ilove, monticello,
  productly, wood
];

interface Photo {
  url: string;
  title: string;
  link: string
}

export default {
  name: 'PhotoGallery',
  setup() {
    const photos = ref<Photo[]>([
      {
        url: images[0],
        title: 'Bakery website',
        link: 'https://myroslavtiukhtii.github.io/bakery/dist/'
      },
      {
        url: images[1],
        title: 'Nftico website',
        link: 'https://myroslavtiukhtii.github.io/NFT-page/dist/'
      },
      {
        url: images[2],
        title: 'Coffe website',
        link: 'https://myroslavtiukhtii.github.io/coffee-shop/dist/'
      },
      {
        url: images[3],
        title: 'Arhitecture studio website',
        link: 'https://myroslavtiukhtii.github.io/architecture-studio/dist/'
      },
      {
        url: images[4],
        title: 'Fashion website',
        link: 'https://myroslavtiukhtii.github.io/fashion/dist/'
      },
      {
        url: images[5],
        title: 'Limon group auto website',
        link: 'https://myroslavtiukhtii.github.io/limogroup-auto/dist/'
      },
      {
        url: images[6],
        title: 'Sneakers website',
        link: 'https://myroslavtiukhtii.github.io/Sneakers-site/dist/'
      },
      {
        url: images[7],
        title: 'AB studio website',
        link: 'https://myroslavtiukhtii.github.io/ab-studio/dist/'
      },
      {
        url: images[8],
        title: 'Data storage website',
        link: 'https://myroslavtiukhtii.github.io/data-storage/'
      },
      {
        url: images[9],
        title: 'Denis Novik website',
        link: 'https://myroslavtiukhtii.github.io/denisnovik/'
      },
      {
        url: images[10],
        title: 'Foodmood website',
        link: 'https://myroslavtiukhtii.github.io/foodmood/dist/'
      },
      {
        url: images[11],
        title: 'Go games website',
        link: 'https://myroslavtiukhtii.github.io/go-games/dist/'
      },
      {
        url: images[12],
        title: 'Guitars website',
        link: 'https://myroslavtiukhtii.github.io/homework-22/'
      },
      {
        url: images[13],
        title: 'I love design website',
        link: 'https://myroslavtiukhtii.github.io/ilovedesign/'
      },
      {
        url: images[14],
        title: 'Monticello website',
        link: 'https://myroslavtiukhtii.github.io/monticello/'
      },
      {
        url: images[15],
        title: 'Productly website',
        link: 'https://myroslavtiukhtii.github.io/productly/'
      },
      {
        url: images[16],
        title: 'Wood website',
        link: 'https://myroslavtiukhtii.github.io/project-beetroot/'
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


<style lang="scss">


.gallery {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;

  &__buttons {
    justify-self: center;

    button {
      position: relative;
      width: 80px;
      height: 35px;
      border: 1px solid transparent;
      background-color: #000000;
      color: var(--main-text-color);
      cursor: pointer;
      transition: .3s ease-in-out;
      z-index: 2;

      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        inset: -0.2rem;
        background-color: #00000049;
        z-index: 1;
        transition: .3s ease-in-out;
      }

      @media (any-hover: hover) {
        &:hover {
          background-color: var(--main-black-color);

          &::after {
            inset: 0;
          }
        }
      }
    }
  }

  &__image {
    width: 100%;
    max-width: 550px;
    height: auto;
    aspect-ratio: 6/3.5;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
}


.photo {
  margin: 10px;
  text-align: center;
  animation: photoAnimation 1.5s linear;
}

@keyframes photoAnimation {
  0% {opacity: 0; transform: translateY(5px);}
  100% {opacity: 1; transform: translateY(0);}
}



.gallery__caption {
  display: block;
  margin-top: 25px;
  text-decoration: none;
  color: var(--main-text-color);
  transition: .3s ease-in-out;

  &:hover {
    color: var(--main-black-color);
  }
}

.prev-button,
.next-button {
  margin: 10px;
}

</style>
