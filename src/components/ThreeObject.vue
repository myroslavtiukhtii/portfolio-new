<script setup lang="ts">
import { TresCanvas, useRenderLoop } from '@tresjs/core';
import { ref } from 'vue';
import { OrbitControls } from '@tresjs/cientos';


const { onLoop } = useRenderLoop();

const rotationY = ref(0);
const rotationZ = ref(0);


onLoop(() => {
  rotationY.value += 0.01;
  rotationZ.value += 0.01;
});



</script>

<template>
  <div class="object">
    <TresCanvas>
      <TresPerspectiveCamera />
      <OrbitControls make-default />
      <TresMesh :position="[0, 0, 2]" :rotation="[0, rotationY, rotationZ]">
        <TresBoxGeometry :args="[1, 1, 1]" />
        <TresMeshNormalMaterial />
      </TresMesh>
    </TresCanvas>
  </div>
</template>


<style lang="scss">

.object {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
  background: linear-gradient(0deg, #22c1c3 0%, #fdbb2d 100%);
}

</style>