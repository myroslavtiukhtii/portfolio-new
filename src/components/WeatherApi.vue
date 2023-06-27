<template>
    <div class="weather">
        <h3 class="weather__city">Kyiv</h3>
        <h4 class="weather__celcius">
            {{ celcius }}
            <span>℃</span>
        </h4>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'WeatherApi',
  data() {
    return {
      celcius: '',
    }
  },
  methods: {
    async getWeather() {
      const API = `https://api.openweathermap.org/data/2.5/forecast?q=Kyiv&APPID=51b2fed96c3fb87af50c686f5494ee3f&units=metric`;
      fetch(API)
      .then(response => response.json())
      .then(data => (this.celcius = (data.list[0].main.temp).toFixed(0)))
      .catch((error) => {console.log(error)});
    }
  },
  mounted() {
      this.getWeather()
    }
});

</script>

<style scoped>

.weather {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
}
</style>