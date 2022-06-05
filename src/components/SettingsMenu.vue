<template>
  <div class="settings-menu">
    <div class="themes-menu-wrap">
      <i class="fa-solid fa-gear fa-lg"></i>
    </div>

    <div class="mode-menu-wrap">
      <i class="fa-solid fa-moon fa-lg"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsMenu",
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
    background-color: $light-mode-nav-background-color;
    border-radius: 50%;
    padding: 15px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(112%);
    }

    &:first-child {
      animation: settingsRunning infinite 2s;
    }
    i {
      color: $light-mode-text-color;
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
