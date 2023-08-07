<template>
  <div class="about__youtube__block">
    <div v-if="searchData.length > 0" class="about__youtube">
        <h2 class="about__title">Youtube API mini project</h2>
        <div class="about__search">
          <input 
          v-on:keyup.enter="getData" 
          v-model="keyWord" 
          class="about__input" 
          type="text" 
          placeholder="Search">
          <div @click="getData" class="about__icon" title="search">
            <svg xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 50 50" width="50px" height="50px">
              <circle fill="none" stroke="#fff" stroke-width="2"
              stroke-linecap="round" stroke-miterlimit="10" cx="21"
              cy="20" r="16"/><line fill="none" stroke="#fff" stroke-width="4"
              stroke-miterlimit="10" x1="32.229" y1="32.229" x2="45.5" y2="45.5"/>
            </svg>
          </div>
        </div>
        <div v-show="favorItems.length > 0" class="about__main__favorites">
          <h3 class="main__favorites__title">Your favorite videos:</h3>
            <transition-group class="main__favorites__list" tag="ul" name="list">
              <li v-for="(item, index) in favorItems" :key="index" class="main__list__item">
                <iframe class="main__list__video" :src='`https://www.youtube.com/embed/${item.id.videoId}`' width="320" height="240" controls> </iframe>
                <h3 class="main__list__title">{{ item.snippet.title }}</h3>
                <div class="main__list__buttons">
                  <button @click="deleteFavorItem(index)" class="list__buttons__favorite">Delete</button>
                  <button @click="onScreen(index)" class="list__buttons__screen">
                    <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                      version="1.1" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="1.5">
                      <path d="m5.25 14.25h-3.5v-3.5m12.5 0v3.5h-3.5m0-12.5h3.5v3.5m-12.5 0v-3.5h3.5"/>
                    </svg>
                  </button>
                </div>
              </li>
            </transition-group>
        </div>
        <div class="about__main">
            <transition-group class="about__main__list" tag="ul" name="list">
              <li v-for="(item, index) in searchData" :key="index" class="main__list__item">
                <iframe class="main__list__video" :src='`https://www.youtube.com/embed/${item.id.videoId}`' width="320" height="240" controls> </iframe>
                <h3 class="main__list__title">{{ item.snippet.title }}</h3>
                <div class="main__list__buttons">
                  <button @click="addFavorite(index)" class="list__buttons__favorite">Add to favorites</button>
                  <button @click="deleteItem(index)" class="list__buttons__favorite">Delete</button>
                  <button @click="onScreen(index)" class="list__buttons__screen">
                    <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                      version="1.1" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="1.5">
                      <path d="m5.25 14.25h-3.5v-3.5m12.5 0v3.5h-3.5m0-12.5h3.5v3.5m-12.5 0v-3.5h3.5"/>
                    </svg>
                  </button>
                </div>
              </li>
            </transition-group>
        </div>
    </div>
    <div v-else-if="!searchData.length" class="about__loading">
          <img :src="LoadingIcon" alt="loading icon" title="loading icon"/>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import LoadingIcon from "@/assets/icons/loading.svg";

export default defineComponent({
  name: 'YoutubeApi',
  setup() {
      return {
        LoadingIcon
      }
    },
  data() {
    return {
      keyWord: '',
      apiKey: 'AIzaSyADebc4G75QQYSUhGaCni5WMoXMKFRzgdo',
      searchData: [] as Array<any>,
      favorItems: [] as Array<any>,
      itemTitle: '',
      itemId: '',
      favItem: '' as any,
    }
  },
  methods: {
    async getData() {
      const API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${this.keyWord}&type=video&key=${this.apiKey}`
      fetch(API)
      .then(response => response.json())
      .then(data => (
        this.searchData = data.items
      ))
      .catch((error) => {console.log(error)});
    },
    deleteItem(index: any) {
      this.searchData.splice(index, 1);
    },
    addFavorite(index: any) {
      if (this.favorItems.includes(this.searchData[index])) {
        return
      } else {
        this.favorItems.push(this.searchData[index]);
        const mainBlock = document.querySelector('.about__main') as HTMLElement;
        const btn = mainBlock.querySelectorAll('.list__buttons__favorite');
        console.log(btn[index]);
      }
    },
    deleteFavorItem(index: any) {
      this.favorItems.splice(index, 1);
    },
    onScreen(index: any) {
      let videoItem = document.querySelectorAll('.main__list__video');
      let btnScreen = document.querySelectorAll('.list__buttons__screen');

      if(videoItem[index].classList.contains('active') && btnScreen[index].classList.contains('active')) {
        videoItem[index].classList.remove('active');
        btnScreen[index].classList.remove('active');
      } else {
        videoItem[index].classList.add('active');
        btnScreen[index].classList.add('active');
        window.scrollTo(0, document.body.scrollHeight)
      }
    }
  },
  mounted() {
      this.getData()
    }
});

</script>

<style lang="scss" scoped>

.list-move,
    .list-enter-active,
    .list-leave-active {
        transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  
    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(-2rem);
    }
  
    .list-leave-active {
        position: absolute;
    }

.about__youtube__block {
  display: flex;
  flex-direction: column;
  background-color: #0000009f;
  padding: 15px;
  padding-top: 50px;
  border-radius: 15px;
}
.about__youtube {
    width: 100%;
    min-height: 100%;
}

.about__title {
  font-size: 1.5rem;
  margin-bottom: 55px;
}

.about__search {
  position: relative;
  width: 100%;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 45px;

  .about__input {
    width: 100%;
    height: 100%;
    border: 1px solid #ffffff64;
    border-radius: 45px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    padding: 15px;
    background-color: var(--main-black-color);
    color: #fff;
    outline: unset;
  }

  .about__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 100%;
    padding: 15px;
    background-color: #4e4e4e;
    border: 1px solid #ffffff64;
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
    cursor: pointer;
    transition: .3s ease-in;

    @media (any-hover: hover) {
      &:hover {
        background-color: #4b4b4b;
      }
    }

    svg {
      width: 25px;
      height: 25px;
    }
  }
}

::placeholder {
    color: #fff;
  }

.main__list__video {
  border-radius: 15px;
  margin-bottom: 5px;
  width: 100%;
  height: auto;
  min-height: 200px;
  transition: .5s ease-in;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  &.active {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 888;
  }

  &:hover {
    border-radius: 0;
  }
}

.main__list__title {
  font-size: clamp(0.5rem, 7vw, 1rem);
  line-height: 150%;
  max-width: 250px;
  color: var(--main-text-color);
  margin-bottom: 15px;
}

.about__main__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;

    @media (min-width: 801px) and (max-width:900px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
}

.about__main__favorites {
  margin-bottom: 55px;

  .main__favorites__title {
    font-size: clamp(0.5rem, 7vw, 1.5rem);
    margin-bottom: 25px;
  }
}

.main__favorites__list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  border-bottom: 1px solid #000;

  @media (min-width: 801px) and (max-width:900px) {
      grid-template-columns: 1fr;
    }

  @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
}

.main__list__item {
  padding: 10px;
  padding-bottom: 25px;
  border-radius: 5px;

  .main__list__title {
    font-size: clamp(0.5rem, 7vw, 1rem);
    height: 50px;
    overflow: hidden;
  }

  .main__list__buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5px;

    button {
      width: 110px;
      min-height: 35px;
      background-color: #000000;
      border: unset;
      color: #fff;
      border-radius: 15px;
      cursor: pointer;
      transition: .3s ease-in;

      @media (any-hover: hover) {
          &:hover {
            background: #4e4e4e;
        }
      }
    }
  }
}

.list__buttons__screen {
    display: grid;
    place-items: center;
    width: 35px !important;
    height: 35px !important;
    padding: unset !important;
    border: unset !important;
    position: relative;;
    outline: none;

    &:hover {
      rotate: 45deg;
      background-color: #000 !important;
    }
  
  svg {
    width: 25px;
    height: 25px;
    stroke: #fff;
  }
  
  &.active {
    rotate: 45deg;
    position: absolute;
    bottom: 5%;
    right: 15px;
    z-index: 1999;
  }
}

.about__loading {
  align-self: center;
  img {
    max-width: 150px;
    @media (max-width: 800px) {
      max-width: 100px;
    }
  }
}


</style>