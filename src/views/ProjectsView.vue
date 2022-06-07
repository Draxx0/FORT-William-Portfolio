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
          imgUrl:
            "https://cdn.discordapp.com/attachments/935969848230547551/983651904968073237/Unity.png",
          title: "Unity - Cave'scape",
          path: "Unity-Cave'scape",
        },

        {
          imgUrl:
            "https://cdn.discordapp.com/attachments/935969848230547551/983685136681930762/WitchWeather.png",
          title: "Witch Weather ?",
          path: "Witch-Weather",
        },

        {
          imgUrl:
            "https://cdn.discordapp.com/attachments/935969848230547551/983685136304463872/The-last-chance.png",
          title: "Digital Event 2022",
          path: "Digital-Event-2022",
        },

        {
          imgUrl:
            "https://cdn.discordapp.com/attachments/935969848230547551/983685135633358908/Cook-frichti.png",
          title: "Cook by Frichti",
          path: "Cook-by-Frichti",
        },

        {
          imgUrl:
            "https://cdn.discordapp.com/attachments/935969848230547551/983685135952117800/Memphis.png",
          title: "Memphis Vote",
          path: "Memphis-Design",
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
        transition: 0.5s ease-in-out;

        &:hover > .project-card-title {
          animation: fromBottom 0.6s ease-in-out;
          opacity: 1;
        }

        &:hover > .project-card-img {
          filter: brightness(50%);
        }

        .project-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5px;
          transition: 0.3s ease-in-out;
          z-index: 4;
          &:hover {
            filter: brightness(50%) !important;
          }
        }

        .project-card-title {
          font-family: "Popins", sans-serif;
          font-weight: 600;
          position: absolute;
          position: absolute;
          top: 35%;
          left: 15%;
          opacity: 0;
          color: $dark-mode-text-color;
          font-weight: 500;
          font-size: 2rem;
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
