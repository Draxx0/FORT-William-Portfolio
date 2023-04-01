<template>
  <div class="Homerun">
    <div class="container">
      <div class="header">
        <div class="row">
          <i class="fa-solid fa-arrow-left-long"></i>
          <p @click="goBack" class="back">Revenir aux projets</p>
        </div>
        <h1 class="section-title">Homerun</h1>
        <h3 class="section-subtitle colored">
          Application web de gestion de biens immobiliers
        </h3>
        <p class="section-description">
          Ce projet d'application web m'a nécessité l'utilisation de plusieurs
          compétences techniques pour sa réalisation. Tout d'abord, j'ai utilisé
          React TypeScript pour construire l'interface utilisateur, ce qui a
          nécessité une bonne connaissance de la syntaxe TypeScript. J'ai
          également utilisé Node.js et MongoDB pour le back-end, nécessitant une
          bonne compréhension de la gestion des bases de données, de la gestion
          des requêtes et des protocoles de communication client-serveur.
          <br />
          <br />
          La mise en place de fonctionnalités telles que la gestion des
          utilisateurs, la gestion des biens immobiliers et des filtres de
          recherche a exigé des compétences en développement front-end et
          back-end, ainsi que la capacité à travailler avec des API et des
          bibliothèques tierces. J'ai également utilisé des outils tels que Git
          et GitHub pour la gestion du code source et le contrôle de version,
          ainsi que des outils de développement tels que Visual Studio Code et
          Postman pour faciliter le processus de développement. Ce projet
          d'application web a donc nécessité une grande variété de compétences
          techniques, allant de la gestion de bases de données, en passant par
          le développement front-end et back-end, la gestion de code source et
          l'utilisation d'outils de développement modernes.
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
            <img src="../../../public/img/nodejs.png" alt="" /> NodeJS
          </li>
          <li class="section-list-item">
            <img src="../../../public/img/mongodb.webp" alt="" /> MongoDB
          </li>
        </ul>
      </div>

      <div class="render-container">
        <h3 class="section-subtitle colored">Rendu</h3>

        <img
          src="../../../public/img/homerun-app.jpg"
          alt=""
          class="section-img"
        />
      </div>

      <div class="links-container">
        <router-link to="/projects/Weather-it" @click="scrollToTop()">
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
.Homerun {
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
  .Homerun {
    width: 100%;
  }
}
</style>
