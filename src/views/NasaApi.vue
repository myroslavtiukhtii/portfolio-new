<template>
    <div class="about__nasa">
        <ul class="about__nasa__nav">
          <RouterLink class="nasa__nav__link" to="/nasaapi">APOD</RouterLink>
          <RouterLink class="nasa__nav__link" to="/epic">EPIC</RouterLink>
        </ul>
        <router-view v-slot="{ Component }">
              <component :is="Component" />
        </router-view>
    </div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue';


export default defineComponent({
  name: "App",
  components: {
    RouterLink,
    RouterView,

  },
  setup() {

  },
  methods: {

  }

});

</script>

<style lang="scss" scoped>

.about__nasa {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
}

.about__nasa__nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 35px;
  gap: 5px;
  justify-self: center;
}

.nasa__nav__link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 5px;
  width: 90px;
  height: 35px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  background-color: var(--main-black-color);
  transition: .3s ease-in;


  @media (any-hover: hover) {
    &:hover {
      background-color: #5b5b5b;
    }
  }
}

.nasa__nav__link.router-link-exact-active {
  background-color: var(--main-grey-color);
}



</style>