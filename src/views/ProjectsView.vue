<template>
  <div class="projects">
    <SettingsMenu />

    <div class="container">
      <h1 class="section-title">Projets</h1>

      <h2 class="section-subtitle">Mes derniers projets :</h2>

      <div class="projects-container">
        <div
          class="project-card"
          v-for="(project, index) in projects"
          :key="index"
        >
          <img :src="project.imgUrl" alt="" class="project-card-img" />
          <router-link :to="'/projects/' + project.path"></router-link>
          <h3 class="project-card-title">{{ project.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SettingsMenu from "@/components/SettingsMenu.vue";

export default {
  name: "ProjectsView",
  components: {
    SettingsMenu,
  },

  data: () => {
    return {
      projects: [
        {
          imgUrl: "https://via.placeholder.com/400",
          title: "Unity - Cave'scape",
          path: "Unity-Cave'scape",
        },

        {
          imgUrl: "https://via.placeholder.com/400",
          title: "Witch Weather ?",
          path: "Witch-Weather",
        },

        {
          imgUrl: "https://via.placeholder.com/400",
          title: "Digital Event 2022",
          path: "Digital-Event-2022",
        },

        {
          imgUrl: "https://via.placeholder.com/400",
          title: "Cook by Frichti",
          path: "Cook-by-Frichti",
        },

        {
          imgUrl: "https://via.placeholder.com/400",
          title: "Memphis Vote",
          path: "Memphis-Vote",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";

.projects {
  width: 75%;

  .container {
    width: 80%;
    margin: 50px auto;

    .projects-container {
      display: flex;
      flex-wrap: wrap;
      gap: 25px;

      .project-card {
        position: relative;
        width: 30%;
        height: 287px;
        border-radius: 10px;
        border: 6px solid $light-mode-nav-background-color;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
        transition: 0.3s;
        cursor: pointer;

        &:hover > .project-card-title {
          animation: fromBottom 0.6s ease-in-out;
          opacity: 1;
        }

        .project-card-img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
          transition: 0.3s ease-in-out;

          &:hover {
            filter: brightness(50%);
          }
        }

        .project-card-title {
          font-family: "Popins", sans-serif;
          font-weight: 600;
          position: absolute;
          left: 30%;
          top: 40%;
          opacity: 0;
          color: $dark-mode-text-color;
        }

        a {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          z-index: 2;
        }
      }
    }
  }
}

@keyframes fromBottom {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
