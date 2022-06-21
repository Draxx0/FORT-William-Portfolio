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
          v-for="color in colorTheme"
          :key="color"
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
          isOpen ? 'fa-rectangle-xmark' : 'fa-bars',
        ]"
      ></i>
    </div>

    <div class="mobile-nav-container">
      <h3>Menu</h3>

      <div class="mobile-menu">
        <router-link to="/" @click="scrollToTop">
          <i class="fa-solid fa-house"></i> Accueil</router-link
        >
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
export default {
  name: "SettingsMenu",

  data: function () {
    return {
      colorTheme: ["green", "orange", "pink", "blue", "red", "yellow"],
      isDarkMode: true,
      isOpen: false,
    };
  },

  methods: {
    toggleMode() {
      const app = document.querySelector("#app");

      if (this.isDarkMode) {
        app.classList.remove("dark-mode");
        app.classList.add("light-mode");
      } else {
        app.classList.remove("light-mode");
        app.classList.add("dark-mode");
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
      this.isOpen = !this.isOpen;
    },

    setColor(color) {
      const app = document.querySelector("#app");

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
  }

  .mobile-nav-wrap {
    display: none;
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
    border: solid 3px $border-color;
    transform: translateX(200%);

    &.open {
      transform: translateX(15%);
    }
    h3 {
      margin: 0;
      font-family: "Popins", sans-serif;
      font-weight: 600;
    }
  }

  .mobile-nav-container {
    display: none;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    gap: 25px;
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

    .colors:nth-child(6) {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: $yellow;
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
      gap: 25px;
      position: fixed;
      top: 40%;
      right: 0%;
      z-index: 9999;
      transition: all 0.3s ease-in-out;
      padding: 15px;
      transform: translateX(200%);

      &.open {
        transform: translateX(0%);
      }
      h3 {
        margin: 0;
        font-family: "Popins", sans-serif;
        font-weight: 600;
      }
      a {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0;
        font-size: 1.2rem;
        font-family: "Popins", sans-serif;
        font-weight: 600;
        text-decoration: none;
      }
    }
  }
}
</style>
