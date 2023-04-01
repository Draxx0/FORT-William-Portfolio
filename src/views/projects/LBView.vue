<template>
  <div class="LB">
    <div class="container">
      <div class="header">
        <div class="row">
          <i class="fa-solid fa-arrow-left-long"></i>
          <p @click="goBack" class="back">Revenir aux projets</p>
        </div>
        <h1 class="section-title">L&B Burgers</h1>
        <h3 class="section-subtitle colored">
          Création d'une application Restaurant
        </h3>
        <p class="section-description">
          L&B Burgers est une application de commande de burgers en ligne. Afin
          de la développer j'ai utilisé le framework React, il est possible sur
          l'application de commander des burgers, de les supprimer, de les
          ajouter au panier, de simuler un paiement et de voir l'historique des
          commandes. L'application est responsive et fonctionne sur mobile.
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
            <img src="../../../public/img/gsap.png" alt="" /> GSAP
          </li>
        </ul>
      </div>

      <div class="render-container">
        <h3 class="section-subtitle colored">Rendu</h3>

        <img src="../../../public/img/lb.png" alt="" class="section-img" />

        <a
          href="https://lb-burgers.vercel.app/"
          class="project-link"
          target="_blank"
          >Voir plus</a
        >
      </div>

      <div class="links-container">
        <router-link to="/projects/Titanime" @click="scrollToTop()">
          <i class="fa-solid fa-arrow-left-long"></i>Projets
          Précèdents</router-link
        >

        <router-link to="/projects/Weather-it" @click="scrollToTop()">
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
.LB {
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
  .LB {
    width: 100%;
  }
}
</style>
