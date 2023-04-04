<template>
  <div class="Titanime">
    <div class="container">
      <div class="header">
        <div class="row" @click="goBack">
          <i class="fa-solid fa-arrow-left-long"></i>
          <p class="back">Revenir aux projets</p>
        </div>
        <h1 class="section-title">Titanime</h1>
        <h3 class="section-subtitle colored">Un site de "Streaming d'Anime"</h3>
        <p class="section-description">
          En me baladant sur Dribble je suis tombé sur une maquette mobile de
          quelques pages auxquelles j'ai tout de suite accroché.<br />
          J'ai donc décider de partir de cette bases afin de les réadapter au
          format desktop et j'ai crée plusieurs pages tout en restant dans le
          thèmes de départ. Le site à la forme d'un site de straming reprenant
          les codes de bases, sur lequel il est possible de regarder des animes,
          mais également des films d'anime<br /><br />
        </p>
      </div>

      <div class="stacks-container">
        <h3 class="section-subtitle colored">Stacks utilisées</h3>
        <ul class="section-list">
          <li class="section-list-item">
            <img src="../../../public/img/html.png" alt="" /> HTML
          </li>
          <li class="section-list-item">
            <img src="../../../public/img/sass.png" alt="" /> SASS
          </li>
          <li class="section-list-item">
            <img src="../../../public/img/Javascript.png" alt="" /> JavaScript
          </li>
        </ul>
      </div>

      <div class="render-container">
        <h3 class="section-subtitle colored">Rendu</h3>
        <video
          class="video-container"
          controls
          poster="../../../public/img/titanime.png"
        >
          <source
            src="https://cdn.discordapp.com/attachments/935969848230547551/985919646806995004/screen-capture.webm"
            type="video/webm"
          />
        </video>
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
.Titanime {
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
  .Titanime {
    width: 100%;
  }
}
</style>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "project-Titanime",

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
