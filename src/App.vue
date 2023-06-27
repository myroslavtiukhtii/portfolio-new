<template>
  <div class="main">
    <section :class="{active: btnIsActive}" class="menu">
      <div class="menu__container">
        <div @click="toggleMenuBtn" class="menu__btn">
          <svg class="menu__icon" viewBox="0 0 100 80" width="40" height="40">
            <rect class="rect-1" width="100" height="10" rx="8"></rect>
            <rect class="rect-2" y="30" width="100" height="10" rx="8"></rect>
            <rect class="rect-3" y="60" width="100" height="10" rx="8"></rect>
          </svg>
        </div>
        <nav class="menu__nav">
          <WeatherApi />
          <RouterLink @click="btnIsActive = false" class="about__nav__link" to="/">Home</RouterLink>
          <RouterLink @click="btnIsActive = false" class="about__nav__link" to="/about">Landings</RouterLink>
          <RouterLink @click="btnIsActive = false" class="about__nav__link" to="/vue">Vue</RouterLink>
          <RouterLink @click="btnIsActive = false" class="about__nav__link" to="/js">JS</RouterLink>
          <a target="_blank" @click="btnIsActive = false" class="about__nav__link"  href="https://myroslavtiukhtii.github.io/CV/">CV</a>
        </nav>
      </div>
    </section>
    <section @click="btnIsActive = false" class="about">
      <div class="about__container">
          <HelloWorld class="about__text" msg="Hi, my name is Myroslav" />
        <div class="about__projects">
          <Transition name="fade">
            <RouterView />
          </Transition> 
        </div>
      </div>
    </section>
    <ThreeObject class="object" />
  </div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import WeatherApi from './components/WeatherApi.vue'
import ThreeObject from './components/ThreeObject.vue'
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: "App",
  components: {
    RouterLink,
    RouterView,
    HelloWorld,
    WeatherApi,
    ThreeObject
  },
  setup() {
    const state = reactive({
      title: "Ukraine" as string,
      btnIsActive: false as boolean
    })

    return { ...toRefs(state) }
  },
  methods: {
    toggleMenuBtn() {
     this.btnIsActive = !this.btnIsActive;
    }
  }

  
});
</script>

<style lang="scss">

.fade-enter-active,
.fade-leave-active {
  transition: all 1.5s ease;
  transform: translate(0);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.main {
  position: relative;
}

.menu.active {

  .menu__nav {
    left: 0;
  }

  .menu__btn {

    .rect-1 {
      width: 20%;
      y: 60;
    }
    .rect-2 {
      width: 50%;
      y: 30;
    }
    .rect-3 {
      width: 100%;
      y: 0;
    }
  }
}
.menu__btn {
  position: fixed;
  top: 25px;
  right: 15px;
  display: none;
  border: 1px solid var(--main-text-color);
  padding: 10px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: #ffffffb5;

  @media (max-width: 1000px) {
      display: flex;
    }

  .menu__icon > * {
    transition: .3s ease-in;
  }
}

.menu__nav {
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 5px;
  width: 90px;
  min-height: 100%;
  background-color: var(--main-black-color);
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  transition: .3s ease-in;
  z-index: 99;
  animation: leftEnter 2.5s linear;

  @keyframes leftEnter {
    0% {left: -100%;}
    100% {left: 0;}
  }

  @media (max-width: 1000px) {
      left: -100%;
      animation: unset;
    }
}

.about {
  min-height: 100vh;

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    padding-top: 10%;
    padding-bottom: 5%;
    gap: 25px;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      gap: 75px;
    }
  }

  &__text {
    align-self: flex-start;
  }
}
.about__nav__link {
  display: flex;
  align-items: center;
  min-height: 25px;
  padding: 5px;
  border-radius: 5px;
  color: var(--main-text-color);
  text-decoration: none;
  transition: .3s ease-in;

  &:hover {
    background-color: var(--main-grey-color);
  }
}

.about__nav__link.router-link-exact-active {
  background-color: var(--main-grey-color);
  color: var(--main-black-color);
}

</style>
