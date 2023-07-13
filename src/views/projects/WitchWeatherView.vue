<template>
  <div class="WitchWeather">
    <div class="container">
      <div class="presentation-container">
        <div class="row pointer" @click="goBack">
          <i class="fa-solid fa-arrow-left-long"></i>
          <p class="back">Revenir aux projets</p>
        </div>
        <h1 class="section-title">Witch Weather ?</h1>
        <h3 class="section-subtitle colored">
          Créer une application web consommant une API en Angular/NodeJs
        </h3>
        <p class="section-description">
          Pendant une semaine nous avions pour objectif de créer une application
          web basé sur une API, mon équipe et moi avons crée une app météo
          faisant appel à une API nommé
          <a
            href="https://openweathermap.org/api"
            targer="_blank"
            class="colored bold"
            >Weather API</a
          >
          nous renvoyant les informations relatives à la météo en fonction de la
          ville. Afin d’accueillir les informations de l’API il nous fallait du
          Front End évidemment, Angular a été le framework utilisé mais il nous
          a également fallu du Backend afin de récupérer les informations que
          nous renvoyé l’API, nous avons donc utilisées NodeJs Express. Une
          application sur laquelle vous pourrez sélectionner une des villes sur
          le menu en haut à droite, que vous pourrez également ajouter à vos
          favoris garder en mémoire via le LocalStorage du JavaScript. L’image
          de fond changera en fonction du temps !
        </p>
      </div>

      <div class="stacks-container">
        <h3 class="section-subtitle colored">Stacks utilisées</h3>
        <ul class="section-list">
          <li class="section-list-item">
            <img src="../../../public/img/angular.png" alt="" /> Angular
          </li>
          <li class="section-list-item">
            <img src="../../../public/img/sass.png" alt="" /> SASS
          </li>
          <li class="section-list-item">
            <img src="../../../public/img/nodejs.png" alt="" /> Node JS
          </li>
        </ul>
      </div>

      <div class="render-container">
        <h3 class="section-subtitle colored">Rendu</h3>

        <video
          class="video-container"
          controls
          poster="../../../public/img/WitchWeather.png"
        >
          <source
            src="../../assets/video/WitchWeather.webm"
            type="video/webm"
          />
        </video>
      </div>

      <div class="links-container">
        <router-link to="/projects/Digital-Event-2022" @click="scrollToTop()">
          Projets Suivant<i class="fa-solid fa-arrow-right-long"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/variables.scss";

.WitchWeather {
  margin-left: 450px;
  width: 75%;
  font-family: "Poppins", sans-serif;

  .colored {
    text-decoration: none;
  }

  .links-container {
    justify-content: end;

    &:hover a > i {
      transform: translateX(10px);
    }
  }

  .container {
    width: 80%;
    margin: 50px auto;

    .section-subtitle {
      margin-bottom: 20px;
    }
  }
}

@media screen and (max-width: 1334px) {
  .WitchWeather {
    width: 100%;
    margin: 0;
  }
}
</style>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "project-Witch-Weather",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },

    goBack() {
      this.$router.push("/projects");
    },
  },
  mounted() {
    const renderContainer = document.querySelector(".render-container");
    const presentationContainer = document.querySelector(
      ".presentation-container"
    );
    const stacksContainer = document.querySelector(".stacks-container");

    gsap.from(renderContainer, {
      scrollTrigger: {
        trigger: renderContainer,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });

    gsap.from(presentationContainer, {
      scrollTrigger: {
        trigger: presentationContainer,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });

    gsap.from(stacksContainer, {
      scrollTrigger: {
        trigger: stacksContainer,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });
  },
};
</script>
