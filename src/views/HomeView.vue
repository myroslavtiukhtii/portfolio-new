<template>
  <div class="projects__home">
    <h2 class="projects__title">technologies: </h2>
    <ul class="projects__list">
      <li class="projects__list__item">#HTML</li>
      <li class="projects__list__item">#CSS</li>
      <li class="projects__list__item">#Javascript</li>
      <li class="projects__list__item">#TypeScript</li>
      <li class="projects__list__item">#Vue.js</li>
      <li class="projects__list__item">#Vue Router</li>
      <li class="projects__list__item">#Vite</li>
      <li class="projects__list__item">#SASS</li>
      <li class="projects__list__item">#FIGMA</li>
      <li class="projects__list__item">#Git</li>
      <li class="projects__list__item">#BEM</li>
      <li class="projects__list__item">#Gulp</li>
      <li class="projects__list__item">#npm</li>
      <li class="projects__list__item">#GSAP</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>


.projects__title {
  font-size: clamp(1.5rem, 7vw, 2rem);
  margin-bottom: 45px;
  text-align: right;
}


.projects__list {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  flex-wrap: wrap;
}

.projects__list__item {
  font-size: clamp(0.4rem, 7vw, 1.5rem);
}

</style>
