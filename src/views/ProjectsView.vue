<template>  <div class="projects">
    <div class="container">
      <h1 class="section-title">Projets</h1>

      <div class="projects-section">
        <h2 class="section-subtitle">Projets Personnel</h2>

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

      <div class="projects-section">
        <h2 class="section-subtitle">Projets École</h2>

        <div class="projects-container">
          <div
            class="project-card"
            v-for="(project, index) in projectsEsd"
            :key="index"
          >
            <img :src="project.imgUrl" alt="" class="project-card-img" />
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
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default {
  name: 'ProjectsView',

  data: () => {
    return {
      projectsEsd: [
        {
          imgUrl: './img/WitchWeather2.png',
          title: 'Witch Weather ?',
          path: 'Witch-Weather',
        },

        {
          imgUrl: './img/The-last-chance.png',
          title: 'Digital Event 2022',
          path: 'Digital-Event-2022',
        },

        {
          imgUrl: './img/pixelwar.png',
          title: 'Digital Event 2023',
          path: 'Digital-Event-2023',
        },

        {
          imgUrl: './img/jungle-reflex-shot.jpg',
          title: 'Jungle Reflex',
          path: 'Jungle-Reflex',
        },
      ],
      myProjects: [
        {
          imgUrl: './img/v-analyser.jpg',
          title: 'V-analyser',
          path: 'V-analyser',
        },

        {
          imgUrl: './img/lb.png',
          title: 'L&B Restaurant',
          path: 'L&B',
        },

        {
          imgUrl: './img/Weather-it.png',
          title: 'Weather It',
          path: 'Weather-it',
        },
        {
          imgUrl: './img/homerun-app.jpg',
          title: 'Homerun',
          path: 'Homerun',
        },
      ],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  mounted() {
    const projectsSection = document.querySelectorAll('.projects-section');

    gsap.from('.section-title', {
      opacity: 0,
      y: 50,
      duration: 1,
    });

    gsap.from(projectsSection, {
      scrollTrigger: {
        trigger: projectsSection,
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });
  },
};
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.projects {
  margin-left: 450px;
  width: 75%;

  .container {
    width: 80%;
    margin: 50px auto;

    .section-subtitle {
      position: relative;
      margin-bottom: 50px;
      text-align: center;

      &::before {
        content: '';
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
            bottom: 40%;
            transform: translate(-50%, -50%);
            opacity: 1;
          }

          &:hover > .project-card-img {
            filter: brightness(30%);
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
            font-family: 'Montserrat Alternates', sans-serif;
            position: absolute;
            bottom: 35%;
            left: 50%;
            transform: translate(-50%, 50%);
            opacity: 0;
            width: 100%;
            text-align: center;
            color: $dark-mode-text-color;
            font-weight: 500;
            font-size: 2rem;
            transition: 0.3s ease-in-out all;
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
    margin: 0;
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

// @keyframes fromBottom {
//   0% {
//     opacity: 0;
//     transform: translate(0, 50px);
//   }

//   100% {
//     opacity: 1;
//     transform: translate(50%, 0);
//   }
// }
</style>
