<template>
  <div class="home">
    <div class="container">
      <div class="left-container">
        <h1 class="title">
          Bonjour, je suis <span class="art-text">William</span><br />
          <span class="colored">Front End Developper</span>
        </h1>
        <p class="text">
          Etudiant en première année de développement web à l’école supérieur du
          digital, j’étais relativement curieuxde savoir comment fonctionner un
          site web par quel procédé passe t-on pour que quand j’arrive sur un
          site je vois le contenue ?<br />
          <br />Depuis, je suis rentrée en bachelor et je m’éclate !
        </p>
        <router-link to="/about" class="btn"> Voir plus</router-link>
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
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";

.home {
  width: 75%;
  margin-bottom: 180px;

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

  .auto-type {
    text-transform: uppercase;
    border-right: solid white 10px;
    animation: cursor 1s ease-in-out infinite;
  }

  @keyframes cursor {
    from {
      border-color: white;
    }

    to {
      border-color: transparent;
    }
  }
}
</style>
