<template>
  <div class="weather-menu">
    <h1>{{ getTime() }}</h1>
    <h1>{{ weather.city }}</h1>
    <h1 v-if="weather.temp">{{ weather.temp }}°</h1>
    <h1 v-else></h1>
    <img :src="weather.icon" alt="" />
  </div>

  <div class="weather-mobile-menu">
    <h1>{{ getTime() }}</h1>
    <h1>{{ weather.city }}</h1>
    <h1>{{ weather.temp }}°</h1>
    <img :src="weather.icon" alt="" />
  </div>
</template>

<script>
export default {
  name: "WeatherApi",

  data: function () {
    return {
      userLat: "",
      userLong: "",
      weather: {
        city: "",
        hour: "",
        temp: "",
        icon: "",
      },
    };
  },

  methods: {
    getUserPosition() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.userLat = position.coords.latitude.toString();
        this.userLong = position.coords.longitude.toString();
        const url = `https://api.weatherapi.com/v1/current.json?key=11cd5cbd029b4c72b0e75746220806&q=${this.userLat},${this.userLong}`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            this.weather.city = data.location.name;
            this.weather.hour = data.current.condition.text;
            this.weather.temp = data.current.temp_c;
            this.weather.icon = data.current.condition.icon;
          });
      });
    },

    getTime() {
      const date = new Date();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      return hour + "h" + minutes;
    },
  },

  mounted() {
    this.getUserPosition();
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.weather-menu {
  padding: 12px;
  z-index: 99999;
  position: fixed;
  bottom: 50px;
  left: 50px;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 10px;

  img {
    width: 64px;
  }

  h1 {
    font-size: 1rem;
    font-weight: bold;
  }
}

.weather-mobile-menu {
  display: none;
}

@media screen and (max-width: 1334px) {
  .weather-menu {
    display: none;
  }

  .weather-mobile-menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-family: "Montserrat", sans-serif;
    font-size: 0.5em;
    text-align: center;

    img {
      width: 48px;
      margin: auto;
    }
  }
}
</style>
