<template>
  <div class="home">
    <div class="container">
      <div class="left-container">
        <h1 class="title">
          Bonjour, je suis <span class="art-text">William</span><br />
          <span class="colored">Front End Developper</span>
        </h1>
        <p class="text">
          Étudiant en première année de développement web à l’école supérieure
          du digital, j’étais relativement curieux de savoir comment fonctionne
          un site web, par quel procédé passe-t-on pour créer tous ces super
          sites web modernes ?<br />
          <br />Depuis, je suis rentrée en bachelor et je m’éclate !
        </p>
        <router-link to="/about" class="btn" @click="scrollToTop()">
          Voir plus</router-link
        >
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
export default {
  name: "HomeView",

  data: function () {
    return {};
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";

.home {
  width: 75%;
  margin-bottom: 202px;

  .container {
    width: 80%;
    margin: 300px auto auto auto;
    display: flex;
    gap: 50px;

    .left-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 50%;
      height: 100%;
      color: $light-mode-text-color;

      .title {
        font-family: "Montserrat Alternates", sans-serif;
        font-size: 2rem;
        font-weight: 500;

        .art-text {
          font-family: "Clicker Script", cursive;
          font-size: 3rem;
          font-weight: 600;
        }
      }

      .text {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
      }
    }

    .right-container {
      display: flex;
      justify-content: center;
      width: 50%;
      height: 100%;

      .img-wrap {
        position: relative;
        width: fit-content;

        img {
          width: 397px;
          height: 431px;
          object-fit: cover;
          border-radius: 5px;
        }

        &::before {
          position: absolute;
          top: -25px;
          left: -25px;
          display: block;
          content: "";
          width: 65px;
          height: 65px;
        }

        &::after {
          position: absolute;
          bottom: -25px;
          right: -25px;
          display: block;
          content: "";
          width: 65px;
          height: 65px;
        }
      }
    }
  }
}

@media screen and (min-width: 2000px) {
  .home {
    margin-bottom: 388px;
  }
}

@media screen and (max-width: 1500px) {
  .home {
    .container {
      flex-direction: column-reverse;
      margin: 50px auto auto auto;

      .left-container {
        width: 100%;
      }

      .right-container {
        justify-content: flex-start;
      }

      .profil-picture {
        width: 70%;
      }
    }
  }
}

@media screen and (max-width: 1419px) {
  .home {
    .container {
      .right-container {
        .img-wrap::before {
          display: none;
        }
        .img-wrap::after {
          display: none;
        }
      }
    }
  }
}

@media screen and (max-width: 1304px) {
  .home {
    width: 100%;
    .container {
      width: 80%;
      margin: 50px auto 0 auto;
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
