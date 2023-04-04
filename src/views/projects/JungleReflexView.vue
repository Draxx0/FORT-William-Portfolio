<template>
  <div class="JungleReflex">
    <div class="container">
      <div class="header">
        <div class="row" @click="goBack">
          <i class="fa-solid fa-arrow-left-long"></i>
          <p class="back">Revenir aux projets</p>
        </div>
        <h1 class="section-title">Jungle Reflex</h1>
        <h3 class="section-subtitle colored">Digitaliser un jeu de société</h3>
        <p class="section-description">
          Jungle Reflex est une application web créée par moi-même et deux de
          mes camarades qui permet de jouer au célèbre jeu de société Jungle
          Speed de manière digitale. L'application a été développée en utilisant
          des technologies telles que React, TypeScript, Firebase et SASS. Elle
          est divisée en deux parties distinctes : l'écran de jeu qui est
          diffusé sur un écran de télévision, et les écrans d'interaction qui
          sont affichés sur les téléphones des joueurs. Les joueurs peuvent
          ainsi jouer sur leur téléphone et toutes les actions sont
          retranscrites en temps réel sur la télévision. Ce projet est le fruit
          d'un travail acharné d'une semaine et de collaboration entre les
          membres de l'équipe. Fiers de vous présenter Jungle Reflex, un projet
          innovant et amusant, qui pourrait être utilisé pour animer des soirées
          entre amis ou en famille 😁.
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
            <img src="../../../public/img/typescript.png" alt="" /> Typescript
          </li>
          <li class="section-list-item">
            <img src="../../../public/img/firebase.png" alt="" /> Firebase
          </li>
        </ul>
      </div>

      <div class="render-container">
        <h3 class="section-subtitle colored">Rendu</h3>

        <img
          src="../../../public/img/jungle-reflex-shot.jpg"
          alt=""
          class="section-img"
        />
      </div>

      <div class="links-container">
        <router-link to="/projects/Digital-Event-2023" @click="scrollToTop()">
          <i class="fa-solid fa-arrow-left-long"></i>Projets
          Précèdents</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "project-L&B",
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
.JungleReflex {
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
  .JungleReflex {
    width: 100%;
  }
}
</style>
