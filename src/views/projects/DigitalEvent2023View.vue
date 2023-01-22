<template>
  <div class="DigitalEvent">
    <div class="container">
      <div class="header">
        <h1 class="section-title">Pixel War</h1>
        <h3 class="section-subtitle colored">Deux Semaines, une Pixel war.</h3>
        <p class="section-description">
          La pixel war, cette évènement crée par Reddit à fais parler dans le
          monde entier. La pixel war est un grande grille sur laquelle il été
          possible de poser son pixel de couleur chaque 5 minutes afin de créer
          de magnifique oeuvres en pixel art reprenant tout types de logo,
          référence, drapeaux... J'ai durant deux semaines participé à la
          réalisation d'une fresque participative. Reprenant les codes de la
          pixel war mise en place par Reddit nous avons crée une reproduction à
          notre échelle de cette fresque.

          <br /><br />

          Pour ce projet j'ai fais partit de l'équipe des développeurs. Nous
          avions le groupe des développeur back et celui des développeur front.
          Ayant un attrait particulier pour le front-end j'ai donc fais partit
          de cet équipe et en tant que
          <span class="colored bold">Lead des développeur front.</span>
          Un rôle que j'ai vraiment pris à coeur et qui m'a plus de part la
          gestion des tâches mais également la gestion des conflits et des
          problèmes rencontrés par l'équipe.

          <br /><br />

          Nous avons mis en place un système d'authentification, de niveaux il
          est possible également de consulter le classement en temps réel, de
          voir les personnes qui on posé en pixel en temps réel, il est possible
          en passant votre curseur sur un pixel posé de voir qui l'a posé,
          chaque partie été streamer, un chat twitch à été implémenté afin de
          pouvoir interagir directement sur le live.

          <br /><br />

          Afin de parvenir à nos fin nous avons utilisé la stack React, SASS et
          Firebase côté back-end. Tout cela en ayant versionner notre code avec
          git.
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
        <router-link to="/projects/Digital-Event-2022" @click="scrollToTop()">
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
  name: "project-Digital-Event-2023",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
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
