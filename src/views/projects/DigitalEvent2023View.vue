<template>
  <div class="DigitalEvent">
    <div class="container">
      <div class="header">
        <h1 class="section-title">Pixel War</h1>
        <h3 class="section-subtitle colored">Deux Semaines, une Pixel war.</h3>
        <p class="section-description">
          La pixel war, cet évènement créé par Reddit à fais parler dans le
          monde entier. La pixel war est une grande grille sur laquelle il était
          possible de poser son pixel de couleur chaque 5 minutes afin de créer
          de magnifiques oeuvres en pixel art reprenant tout types de logo,
          référence, drapeaux... J'ai durant deux semaines participées à la
          réalisation d'une fresque participative. Reprenant les codes de la
          pixel war mis en place par Reddit nous avons créé une reproduction à
          notre échelle de cette fresque.

          <br /><br />

          Pour ce projet j'ai fait partis de l'équipe des développeurs. Nous
          avions le groupe des développeurs back et celui des développeurs front.
          Ayant un attrait particulier pour le front-end j'ai donc fais partie
          de cette équipe et en tant que
          <span class="colored bold">Lead des développeurs front.</span>
          Un rôle que j'ai vraiment pris à coeur et qui m'a plus de part-là
          gestion des tâches mais également la gestion des conflits et des
          problèmes rencontrés par l'équipe.

          <br /><br />

          Nous avons mis en place un système d'authentification, de niveaux il
          est possible également de consulter le classement en temps réel, de
          voir les personnes qui ont posé en pixel en temps réel, il est possible
          en passant votre curseur sur un pixel posé de voir qui l'a posé,
          chaque partie était streamer, un chat twitch a été implémenté afin de
          pouvoir interagir directement sur le live.

          <br /><br />

          Afin de parvenir à nos fins nous avons utilisé la stack React, SASS et
          Firebase côté back-end. Tout cela en ayant versionné notre code avec
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

        <img
          src="../../../public/img/pixelwar.png"
          alt=""
          class="section-img"
        />

        <a
          href="https://app.pixel-war-esd.fr/"
          class="project-link"
          target="_blank"
          >Voir plus</a
        >
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
