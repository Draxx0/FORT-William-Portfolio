<template>
  <div class="V-analyser">
    <div class="container">
      <div class="header">
        <div class="row pointer" @click="goBack">
          <i class="fa-solid fa-arrow-left-long"></i>
          <p class="back">Revenir aux projets</p>
        </div>
        <h1 class="section-title">V-Analyser</h1>
        <h3 class="section-subtitle colored">
          L'outil d'analyse de statistiques VALORANT.
        </h3>
        <p class="section-description">
          Il m'arrive de jouer au jeu VALORANT, un jeu que j'aime autant que je
          déteste 😂. A partir d'une api me permettant de récupérer les
          statistiques des joueurs, il m'est venus à l'idée de créer une
          interface leur permettant d'analyser plusieurs de leur
          statistiques.<br /><br />

          J'ai réalisé ce projet en React, Typescript, Tailwind CSS.
        </p>
      </div>

      <div class="stacks-container">
        <h3 class="section-subtitle colored">Stacks utilisées</h3>
        <ul class="section-list">
          <li class="section-list-item">
            <img src="../../../public/img/React.png" alt="" /> React
          </li>
          <li class="section-list-item">
            <img src="../../../public/img/typescript.png" alt="" /> Typescript
          </li>
          <li class="section-list-item">
            <img src="../../../public/img/tailwind.png" alt="" /> Tailwind CSS
          </li>
        </ul>
      </div>

      <div class="render-container">
        <h3 class="section-subtitle colored">Rendu</h3>

        <img
          src="../../../public/img/v-analyser.jpg"
          alt=""
          class="section-img"
        />

        <a
          href="https://v-analyser.vercel.app/"
          class="project-link"
          target="_blank"
          >Voir plus</a
        >
      </div>

      <div class="links-container">
        <router-link to="/projects/L&B" @click="scrollTop">
          Projets Suivant<i class="fa-solid fa-arrow-right-long"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/variables.scss";
.V-analyser {
  width: 75%;

  .container {
    width: 80%;
    margin: 50px auto;

    .section-subtitle {
      margin-bottom: 20px;
    }
  }

  .links-container {
    justify-content: flex-end;

    a {
      &:hover {
        i {
          transform: translateX(10px);
        }
      }
    }
  }
}

@media screen and (max-width: 1334px) {
  .V-analyser {
    width: 100%;
  }
}
</style>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "V-analyser",

  methods: {
    scrollTop() {
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
