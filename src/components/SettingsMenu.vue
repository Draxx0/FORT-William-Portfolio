<template>
  <div class="settings-menu">
    <div class="themes-menu-wrap" @click="openThemeContainer()">
      <i class="fa-solid fa-gear fa-lg"></i>
    </div>

    <div class="themes-container">
      <h3>Thèmes</h3>

      <div class="colors-container">
        <div class="colors greenColor" @click="setColor(color)"></div>
        <div class="colors orangeColor" @click="setColor(color)"></div>
        <div class="colors pinkColor" @click="setColor(color)"></div>
        <div class="colors blueColor" @click="setColor(color)"></div>
        <div class="colors redColor" @click="setColor(color)"></div>
      </div>
    </div>

    <div class="mode-menu-wrap" @click="toggleMode">
      <i class="fa-solid fa-moon fa-lg"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsMenu",

  data: function () {},

  methods: {
    toggleMode() {
      const app = document.querySelector("#app");
      const nav = document.querySelector("nav");
      const modeIcon = document.querySelector(".mode-menu-wrap i");

      if (app.classList.contains("light-mode")) {
        modeIcon.classList.remove("fa-moon");
        modeIcon.classList.add("fa-sun");
        app.classList.remove("light-mode");
        app.classList.add("dark-mode");
        app.style.transition = "0.5s ease-in-out";
        nav.style.transition = "0.5s ease-in-out";
      } else {
        modeIcon.classList.remove("fa-sun");
        modeIcon.classList.add("fa-moon");
        app.classList.remove("dark-mode");
        app.classList.add("light-mode");
      }
    },

    openThemeContainer() {
      const themeWrap = document.querySelector(".themes-menu-wrap");
      const modeWrap = document.querySelector(".mode-menu-wrap");
      const themesContainer = document.querySelector(".themes-container");
      themesContainer.classList.toggle("open");

      if (themesContainer.classList.contains("open")) {
        themeWrap.style.transform = "translateX(-200px)";
        modeWrap.style.transform = "translateX(-200px)";
      } else {
        themeWrap.style.transform = "translateX(0)";
        modeWrap.style.transform = "translateX(0)";
      }
    },

    setColor() {
      
      const app = document.querySelector("#app");

      document.querySelector(".greenColor").addEventListener("click", () => {
        app.classList.add("green");
        app.classList.remove("orange", "red", "blue", "pink");
        document.query
      });

      document.querySelector(".orangeColor").addEventListener("click", () => {
        app.classList.add("orange");
        app.classList.remove("green", "red", "blue", "pink");
      });

      document.querySelector(".redColor").addEventListener("click", () => {
        app.classList.add("red");
        app.classList.remove("green", "orange", "blue", "pink");
      });

      document.querySelector(".blueColor").addEventListener("click", () => {
        app.classList.add("blue");
        app.classList.remove("green", "orange", "red", "pink");
      });

      document.querySelector(".pinkColor").addEventListener("click", () => {
        app.classList.add("pink");
        app.classList.remove("green", "orange", "red", "blue");
      });

      // if (green) {
      //   app.classList.add("green");
      //   app.classList.remove("orange", "red", "blue", "pink");
      // }
      // if (orange) {
      //   app.classList.add("orange");
      //   app.classList.remove("orange", "red", "blue", "pink");
      // }
      // if (red) {
      //   app.classList.add("red");
      //   app.classList.remove("orange", "red", "blue", "pink");
      // }
      // if (blue) {
      //   app.classList.add("blue");
      //   app.classList.remove("orange", "red", "blue", "pink");
      // }
      // if (pink) {
      //   app.classList.add("pink");
      //   app.classList.remove("orange", "red", "blue", "pink");
      // }
    },

    hideSettingsMenuOnScroll() {
      window.addEventListener("scroll", () => {
        if (
          document.querySelector(".themes-container").classList.contains("open")
        ) {
          document.querySelector(".themes-container").classList.remove("open");
          const themeWrap = document.querySelector(".themes-menu-wrap");
          themeWrap.style.transform = "translateX(0)";
          const modeWrap = document.querySelector(".mode-menu-wrap");
          modeWrap.style.transform = "translateX(0)";
        }
      });
    },
  },

  mounted() {
    this.hideSettingsMenuOnScroll();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/variables.scss";
.settings-menu {
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: fixed;
  top: 50px;
  right: 50px;
  z-index: 9999;
  transition: all 0.3s ease-in-out;

  .themes-menu-wrap,
  .mode-menu-wrap {
    border-radius: 50%;
    padding: 15px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(112%);
    }
  }

  .themes-menu-wrap i {
    animation: settingsRunning infinite 2s;
  }

  .themes-container {
    display: flex;
    flex-direction: column;
    gap: 25px;
    position: absolute;
    top: 8px;
    right: 0px;
    z-index: 9999;
    transition: all 0.3s ease-in-out;
    padding: 15px;
    background-color: $light-mode-nav-background-color;
    border: solid 0.5px $border-color;
    transform: translateX(200%);

    &.open {
      transform: translateX(0%);
    }
    h3 {
      margin: 0;
      font-family: "Popins", sans-serif;
      font-weight: 600;
    }
  }

  .colors-container {
    display: flex;
    gap: 10px;

    .colors:nth-child(1) {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: $green;
      cursor: pointer;
    }

    .colors:nth-child(2) {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: $orange;
      cursor: pointer;
    }

    .colors:nth-child(3) {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: $pink;
      cursor: pointer;
    }

    .colors:nth-child(4) {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: $blue;
      cursor: pointer;
    }

    .colors:nth-child(5) {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: $red;
      cursor: pointer;
    }
  }

  @keyframes settingsRunning {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
}
</style>
