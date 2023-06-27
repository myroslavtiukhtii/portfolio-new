<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <div class="about__text">
      <h1 class="about__title">{{ msg }}</h1>
      <h2 class="about__subtitle">
        I'm web developer from Ukraine
      </h2>
    </div>
</template>

<style lang="scss" scoped>

.about__text {
  padding-left: 25%;
  transition: .5s ease-in-out;
  animation: textEnter 1.5s linear;

  @keyframes textEnter {
    0% {opacity: 0; transform: translateY(10px);}
    100% {opacity: 1; transform: translate(0);}
  }

  @media (max-width: 800px) {
    padding-top: 100px;
    padding-left: 0;
  }
}


.about__title {
  font-weight: 500;
  font-size: clamp(2.5rem, 7vw, 4rem);
  margin-bottom: 25px;
  line-height: 150%;
  max-width: 450px;
  color: #000;
  text-shadow: 0px 11px 10px rgba(81,67,21,0.8);
}

.about__subtitle {
  font-size: 1.2rem;
  color: #000;
}

</style>
