<template>
  <div class="about">
    <SettingsMenu />
  </div>
</template>

<script>
import SettingsMenu from "@/components/SettingsMenu.vue";
export default {
  name: "AboutView",
  components: {
    SettingsMenu,
  },
};
</script>

<style lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;600&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap");
@import "@/styles/variables.scss";

#app {
  background-color: $light-mode-background-color;
}
</style>
