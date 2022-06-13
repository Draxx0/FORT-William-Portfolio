<template>
  <div class="Titanime">
    <div class="container">
      <h1 class="section-title">Titanime</h1>
      <h3 class="section-subtitle colored">Un site de "Streaming d'Anime"</h3>
      <p class="section-description">
        Au cour d'une semaine de projet au sein de l'école supérieur du digital
        j'ai travaillé sur Unity.<br />
        Nous avions une semaine top chrono, pour créer un jeu platformer en 2D
        avec au moins deux niveaux. Première epreuve pour nous, nous n'avions
        encore jamais touché à Unity ou encore au C#. Durant la première journée
        notre intervenant nous a donc introduis les bases de C# dumoins, celle
        qui nous serait utile pour notre projet. De la il a fallu former des
        groupes, moi et mon camarade avons donc réfléchis le jour suivant à quel
        environnement, mécaniques & graphisme choisir. Notre choix été vite
        fait, un environnement plutôt sombre comme une cave ! En ce qui concerne
        les graphismes, nous ne voulions pas partir sur du pixelArt, nous avons
        donc choisi de se rapprocher d'hollow knight, un jeu de plateforme très
        populaire. Et pour le mécanique, mon camarade et moi avons repris la
        mécanique incontournable pour un platformer, le double saut, mais
        également la possibilité de tuer et se faire tuer par un monstre ou
        encore des plateformes sur lesquels on peut activer ou désactiver les
        collisions. Le décor que nous avons créer est basé sur les assets créer
        par <strong>Maoot</strong><br /><br />
      </p>

      <div class="stacks-container">
        <h3 class="section-subtitle colored">Stack utilisées</h3>
        <ul class="section-list">
          <li class="section-list-item">
            <img src="../../../public/img/html.webp" alt="" /> HTML
          </li>
          <li class="section-list-item">
            <img src="../../../public/img/sass.png" alt="" /> SASS
          </li>
          <li class="section-list-item">
            <img src="../../../public/img/Javascript.png" alt="" /> JavaScript
          </li>
        </ul>
      </div>
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

      <div class="links-container">
        <router-link to="/projects/Delivery" @click="scrollTop">
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
</style>

<script>
export default {
  name: "project-Titanime",

  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
