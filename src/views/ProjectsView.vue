<template>
  <div class="projects">
    <SettingsMenu />
  </div>
</template>

<script>
import SettingsMenu from "@/components/SettingsMenu.vue";

export default {
  name: "ProjectsView",
  components: {
    SettingsMenu,
  },
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
</style>
