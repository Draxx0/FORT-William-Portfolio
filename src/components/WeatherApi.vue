<template>
  <div class="weather-menu">
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
        console.log("Log pendant fonction:", this.userLat, this.userLong);
        const url = `https://api.weatherapi.com/v1/current.json?key=11cd5cbd029b4c72b0e75746220806&q=${this.userLat},${this.userLong}`;
        console.log(url);
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            this.weather.city = data.location.name;
            this.weather.hour = data.current.condition.text;
            this.weather.temp = data.current.temp_c;
            this.weather.icon = data.current.condition.icon;
            console.log(data);
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

@media screen and (max-width: 1334px) {
  .weather-menu {
    left: 5%;
    bottom: 0;
  }
}
</style>
