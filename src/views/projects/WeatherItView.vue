<template>
  <div class="WIT">
    <div class="container">
      <div class="header">
        <div class="row pointer" @click="goBack">
          <i class="fa-solid fa-arrow-left-long"></i>
          <p class="back">Revenir aux projets</p>
        </div>
        <h1 class="section-title">Weather It</h1>
        <h3 class="section-subtitle colored">Création d'une interface météo</h3>
        <p class="section-description">
          S'il y a bien une chose que j'aime c'est consommer des API, c'est
          pourquoi j'ai décidé de créer une application qui permet de consulter
          la météo d'une ville et les prévisions de celle-ci sur 3 jours (
          Limite freemium de l'api ).

          <br />
          <br />

          Pour la réalisation de cette application j'ai utilisé le framework
          React, j'ai utilisé l'API
          <a
            href="https://www.weatherapi.com/"
            target="_blank"
            class="colored bold"
            >Weatherapi</a
          >
          pour récupérer les données météo. Il est donc possible de consulter
          plusieurs informations relatives à la météo comme la température en °C
          ou en °F, la qualité de l'air, la vitesse du vent, le ressenti etc...
        </p>
      </div>

      <div class="stacks-container">
        <h3 class="section-subtitle colored">Stacks utilisées</h3>
        <ul class="section-list">
          <li class="section-list-item">
            <img src="../../../public/img/React.png" alt="" /> React
          </li>
          <li class="section-list-item">
            <img src="../../../public/img/sass.png" alt="" /> SASS
          </li>
        </ul>
      </div>

      <div class="render-container">
        <h3 class="section-subtitle colored">Rendu</h3>

        <img
          src="../../../public/img/Weather-it.png"
          alt=""
          class="section-img"
        />

        <a
          href="https://weather-it-indol.vercel.app/"
          class="project-link"
          target="_blank"
          >Voir plus</a
        >
      </div>

      <div class="links-container">
        <router-link to="/projects/L&B" @click="scrollToTop()">
          <i class="fa-solid fa-arrow-left-long"></i>Projets
          Précèdents</router-link
        >

        <router-link to="/projects/Homerun" @click="scrollToTop()">
          Projets Suivant<i class="fa-solid fa-arrow-right-long"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "Weather-it",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },

    goBack() {
      this.$router.push("/projects");
    },
  },

  mounted() {
    const stacksContainer = document.querySelector(".stacks-container");
    const header = document.querySelector(".header");
    const renderContainer = document.querySelector(".render-container");

    gsap.from(stacksContainer, {
      scrollTrigger: {
        trigger: stacksContainer,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });

    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });

    gsap.from(renderContainer, {
      scrollTrigger: {
        trigger: renderContainer,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });
  },
};
</script>

<style lang="scss">
.WIT {
  margin-left: 450px;
  width: 75%;

  .container {
    width: 80%;
    margin: 50px auto;

    .section-subtitle {
      margin-bottom: 20px;
    }
  }
}

@media screen and (max-width: 1334px) {
  .WIT {
    margin: 0;
    width: 100%;
  }
}
</style>
