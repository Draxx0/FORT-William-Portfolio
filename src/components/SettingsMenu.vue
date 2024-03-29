<template>
  <div class="settings-menu">
    <div class="themes-menu-wrap" @click="openThemeContainer()">
      <i class="fa-solid fa-gear fa-lg"></i>
    </div>

    <div class="themes-container">
      <h3>Thèmes</h3>

      <div class="colors-container">
        <div
          :class="['colors', color]"
          v-for="(color, index) in colorTheme"
          :key="index"
          @click="setColor(color)"
        ></div>
      </div>
    </div>

    <div class="mode-menu-wrap" @click="toggleMode()">
      <i :class="['fa-solid', 'fa-lg', isDarkMode ? 'fa-sun' : 'fa-moon']"></i>
    </div>

    <div class="mobile-nav-wrap" @click="openNavMobile()">
      <i
        :class="[
          'fa-solid',
          'fa-lg',
          isNavOpen ? 'fa-solid fa-circle-xmark' : 'fa-bars',
        ]"
      ></i>
    </div>

    <div class="mobile-nav-container">
      <h3 class="colored">Menu</h3>

      <div class="mobile-menu">
        <router-link to="/" @click="scrollToTop">
          <i class="fa-solid fa-house"></i> Accueil
        </router-link>
        <router-link to="/about" @click="scrollToTop"
          ><i class="fa-solid fa-user-graduate"></i>A propos</router-link
        >
        <router-link to="/projects" @click="scrollToTop"
          ><i class="fa-solid fa-folder-open"></i>Projets</router-link
        >
        <router-link to="/contact" @click="scrollToTop"
          ><i class="fa-solid fa-envelope"></i>Contact</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { watch } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "SettingsMenu",

  components: {},

  data: function () {
    return {
      colorTheme: ["green", "orange", "pink", "blue", "red", "yellow"],
      isDarkMode: localStorage.getItem("isDarkMode") === "true" ? true : false,
      isNavOpen: false,
    };
  },

  methods: {
    toggleMode() {
      const app = document.querySelector("#app");
      if (this.isDarkMode) {
        app.classList.remove("dark-mode");
        app.classList.add("light-mode");
        localStorage.setItem("isDarkMode", false);
      } else {
        app.classList.remove("light-mode");
        app.classList.add("dark-mode");
        localStorage.setItem("isDarkMode", true);
      }

      this.isDarkMode = !this.isDarkMode;
    },

    openThemeContainer() {
      const themeWrap = document.querySelector(".themes-menu-wrap");
      const modeWrap = document.querySelector(".mode-menu-wrap");
      const navWrap = document.querySelector(".mobile-nav-wrap");
      const themesContainer = document.querySelector(".themes-container");
      themesContainer.classList.toggle("open");

      if (themesContainer.classList.contains("open")) {
        themeWrap.style.transform = "translateX(-200px)";
        modeWrap.style.transform = "translateX(-200px)";
        navWrap.style.transform = "translateX(-200px)";
      } else {
        themeWrap.style.transform = "translateX(0)";
        modeWrap.style.transform = "translateX(0)";
        navWrap.style.transform = "translateX(0)";
      }
    },

    openNavMobile() {
      const navContainer = document.querySelector(".mobile-nav-container");
      navContainer.classList.toggle("open");
      this.isNavOpen = !this.isNavOpen;
    },

    setColor(color) {
      const app = document.querySelector("#app");

      localStorage.setItem("colorTheme", color);

      app.classList.forEach((appClass) => {
        if (appClass !== "light-mode" && appClass !== "dark-mode") {
          app.classList.remove(appClass);
        }
      });
      app.classList.add(color);
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
          const mobileMenu = document.querySelector(".mobile-nav-wrap");
          mobileMenu.style.transform = "translateX(0)";
        }

        if (
          document
            .querySelector(".mobile-nav-container")
            .classList.contains("open")
        ) {
          document
            .querySelector(".mobile-nav-container")
            .classList.remove("open");
          const mobileMenu = document.querySelector(".mobile-nav-wrap");
          this.isNavOpen = false;
          mobileMenu.style.transform = "translateX(0)";
        }
      });
    },

    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  mounted() {
    this.hideSettingsMenuOnScroll();
    const route = useRoute();
    watch(route, () => {
      if (this.isNavOpen) {
        document
          .querySelector(".mobile-nav-container")
          .classList.remove("open");
        const mobileMenu = document.querySelector(".mobile-nav-wrap");
        mobileMenu.style.transform = "translateX(0)";
        this.isNavOpen = false;
      }
    });
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
  }

  .mobile-nav-wrap {
    display: none;
  }

  .themes-menu-wrap i {
    animation: settingsRunning infinite linear 3s;
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
    border: solid 3px $border-color;
    transform: translateX(200%);

    &.open {
      transform: translateX(15%);
    }
    h3 {
      transition: all 0.3s ease-in-out;
      margin: 0;
      font-family: "Clicker-script", cursive;
      font-weight: 600;
      text-align: center;
    }
  }

  .mobile-nav-container {
    display: none;
  }

  .mobile-menu {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }

  .colors-container {
    display: flex;
    gap: 10px;

    .colors {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      cursor: pointer;
    }

    .colors:nth-child(1) {
      background-color: $green;
    }

    .colors:nth-child(2) {
      background-color: $orange;
    }

    .colors:nth-child(3) {
      background-color: $pink;
    }

    .colors:nth-child(4) {
      background-color: $blue;
    }

    .colors:nth-child(5) {
      background-color: $red;
    }

    .colors:nth-child(6) {
      background-color: $yellow;
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

@media screen and (max-width: 1334px) {
  .settings-menu {
    .mobile-nav-wrap {
      display: block;
      border-radius: 50%;
      padding: 15px;
      transition: 0.3s;
      cursor: pointer;
    }

    .mobile-nav-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 9999;
      transition: all 0.3s ease-in-out;
      padding: 35px 15px;
      transform: translateY(100%);

      &.open {
        transform: translateX(0%);
      }
      h3 {
        margin: 0;
        font-family: "Clicker-script", cursive;
        font-weight: 600;
        text-align: center;
        font-size: 1.6rem;
      }
      a {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0;
        font-size: 1.3rem;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        text-decoration: none;
      }
    }
  }
}
</style>
