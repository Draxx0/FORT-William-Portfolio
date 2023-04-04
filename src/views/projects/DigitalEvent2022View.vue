<template>
  <div class="DigitalEvent">
    <div class="container">
      <div class="header">
        <div class="row" @click="goBack">
          <i class="fa-solid fa-arrow-left-long"></i>
          <p class="back">Revenir aux projets</p>
        </div>
        <h1 class="section-title">The Last Chance</h1>
        <h3 class="section-subtitle colored">
          Deux Semaines, un escape game virtuel
        </h3>
        <p class="section-description">
          Durant deux semaines j’ai participé à la création de A à Z d’un escape
          game en ligne. Période de Covid-19 oblige nous nous somme tenus à
          créer un escape game sur le net ou le joueur devrait en 30 minutes
          réussir à terminer celui-ci. Lors de ces deux semaines nous avions
          plusieurs équipes, les scénaristes afin d’imaginer l’histoire et son
          déroulement, les créatifs afin de créer l’identité visuel de l’escape
          game et enfin l’équipe dont j’ai fais partit, les développeurs afin de
          coder et rendre fonctionnel l’escape game.<br /><br />
          Lors de cet évènement, pour créer l’escape game il était au début
          prévue que nous utilisions Construct, un moteur de jeux vidéos adapté
          au web. Cependant après avoir reçu le cours d’introduction à
          Construct, le leader de notre team de 4 développeurs nous a proposé de
          partir plutôt sur React. Problème étant que nous, les 3 autres
          développeurs n’avais encore jamais touché à React auparavant. Au final
          nous nous sommes dirigé vers du React aidé de notre Intervenant Thomas
          Mouchelet et de notre Leader Dev Cyriac Du Chatenet nous sommes
          parvenu à nos fin.
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
          <li class="section-list-item">
            <img src="../../../public/img/firebase.png" alt="" /> Firebase
          </li>
        </ul>
      </div>
      <div class="render-container">
        <h3 class="section-subtitle colored">Rendu</h3>

        <video
          class="video-container"
          controls
          poster="../../../public/img/The-last-chance.png"
        >
          <source src="../../assets/video/lastchance.mp4" type="video/mp4" />
        </video>
      </div>

      <div class="links-container">
        <router-link to="/projects/Witch-Weather" @click="scrollToTop()">
          <i class="fa-solid fa-arrow-left-long"></i>Projets
          Précèdents</router-link
        >

        <router-link to="/projects/Digital-Event-2023" @click="scrollToTop()">
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
  name: "project-Digital-Event-2022",
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
    const header = document.querySelector(".header");
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

    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
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

<style lang="scss">
.DigitalEvent {
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
  .DigitalEvent {
    width: 100%;
  }
}
</style>
