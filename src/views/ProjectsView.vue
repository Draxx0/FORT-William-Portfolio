<template>
  <div class="projects">
    <div class="container">
      <h1 class="section-title">Projets</h1>

      <div class="projects-section">
        <h2 class="section-subtitle">Projets École</h2>

        <div class="projects-container">
          <div
            class="project-card"
            v-for="(project, index) in projectsEsd"
            :key="index"
          >
            <img :src="project.imgUrl" alt="" class="project-card-img" />
            <router-link :to="'/projects/' + project.path"></router-link>
            <h3 class="project-card-title">{{ project.title }}</h3>
          </div>
        </div>
      </div>

      <div class="projects-section">
        <h2 class="section-subtitle">Projets Autodidacte</h2>

        <div class="projects-container">
          <div
            class="project-card"
            v-for="(project, index) in myProjects"
            :key="index"
          >
            <img :src="project.imgUrl" class="project-card-img" />
            <router-link
              :to="'/projects/' + project.path"
              @click="scrollToTop()"
            ></router-link>
            <h3 class="project-card-title">{{ project.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsView",

  data: () => {
    return {
      projectsEsd: [
        {
          imgUrl:
            "https://cdn.discordapp.com/attachments/935969848230547551/983651904968073237/Unity.png",
          title: "Unity - Cave'scape",
          path: "Unity-Cave'scape",
        },

        {
          imgUrl:
            "https://cdn.discordapp.com/attachments/935969848230547551/984098251571601518/WitchWeather.png",
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
      ],
      myProjects: [
        {
          imgUrl:
            "https://cdn.discordapp.com/attachments/935969848230547551/985925825377501184/titanime.png",
          title: "Titanime - Anime",
          path: "Titanime",
        },

        {
          imgUrl:
            "https://cdn.discordapp.com/attachments/935969848230547551/985916561430814770/Delivery.png",
          title: "Delivery Intégration",
          path: "Delivery",
        },
      ],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
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

    .section-subtitle {
      position: relative;
      margin-bottom: 50px;
      text-align: center;

      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        position: absolute;
        left: 0;
        bottom: -20px;
      }
    }
    .projects-section {
      margin-bottom: 100px;
      .projects-container {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-gap: 35px;
        width: 100%;

        .project-card {
          position: relative;
          width: 100%;
          height: 287px;
          border-radius: 5px;
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
            left: 25%;
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
}

@media screen and (max-width: 1334px) {
  .projects {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .projects {
    .container {
      .projects-section {
        .projects-container {
          grid-template-columns: repeat(1, auto);
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
