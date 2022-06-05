<template>
  <div class="settings-menu">
    <div class="themes-menu-wrap">
      <i class="fa-solid fa-gear fa-lg"></i>
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
