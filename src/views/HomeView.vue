<template>  <div class="home">
    <div class="container">
      <div class="left-container">
        <h1 class="title">
          Bonjour, je suis <span class="art-text">William</span><br />
          <span class="colored txt-anim"></span>
        </h1>
        <p class="text">
          Étudiant en troisième année de développement web à l’école supérieure
          du digital, j’étais relativement curieux de savoir comment fonctionne
          un site web, par quel procédé passe-t-on pour créer tous ces super
          sites modernes ?
        </p>
      </div>
      <div class="right-container">
        <div class="img-wrap">
          <img src="../../public/img/me.jpg" alt="" class="profil-picture" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import Typewriter from 'typewriter-effect/dist/core';
export default {
  name: 'HomeView',

  data: function () {
    return {};
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  mounted() {
    gsap.from('.container', {
      scrollTrigger: {
        trigger: '.container',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });

    const txtAnim = document.querySelector('.txt-anim');

    new Typewriter(txtAnim, {
      loop: true,
      deleteSpeed: 20,
      delay: 75,
    })
      .typeString('Développeur Web')
      .pauseFor(2500)
      .deleteChars(3)
      .typeString('<span style="color: #2fe0e0;">React</span>')
      .pauseFor(2500)
      .deleteChars(5)
      .typeString('<span style="color: #d92b2b;">Nest JS</span>')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Heureux de vous rencontrer !')
      .pauseFor(2500)
      .deleteAll()
      .start();
  },
};
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.home {
  margin-left: 450px;
  width: 75%;
  overflow: hidden;

  .container {
    width: 80%;
    height: 100vh;
    margin: auto;
    display: flex;
    gap: 50px;

    .left-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 15px;
      width: 50%;
      height: 100%;
      color: $light-mode-text-color;

      .company {
        position: relative;
        text-decoration: none;
      }

      .title {
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 2rem;
        font-weight: 500;

        .art-text {
          font-family: 'Clicker Script', cursive;
          font-size: 3rem;
          font-weight: 600;
        }
      }

      .text {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
      }
    }

    .right-container {
      display: flex;
      align-items: center;
      width: 50%;
      height: 100%;

      .img-wrap {
        position: relative;
        width: fit-content;

        img {
          width: 397px;
          height: 431px;
          object-fit: cover;
          object-position: top;
          border-radius: 5px;
        }

        &::before {
          position: absolute;
          top: -25px;
          left: -25px;
          display: block;
          content: '';
          width: 65px;
          height: 65px;
        }

        &::after {
          position: absolute;
          bottom: -25px;
          right: -25px;
          display: block;
          content: '';
          width: 65px;
          height: 65px;
        }
      }
    }
  }
}

@media screen and (max-width: 1500px) {
  .home {
    .container {
      height: auto;
      flex-direction: column-reverse;
      padding: 50px;

      .left-container {
        width: 100%;
      }

      .right-container {
        .img-wrap::before {
          display: none;
        }
        .img-wrap::after {
          display: none;
        }
      }

      .profil-picture {
        width: 70%;
      }
    }
  }
}

@media screen and (max-width: 1334px) {
  .home {
    margin: 0;
    width: 100%;
    .container {
      width: 80%;
    }
  }
}

@media screen and (max-width: 500px) {
  .home {
    .container {
      .right-container {
        width: 100%;
        justify-content: center;
        .img-wrap {
          .profil-picture {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
