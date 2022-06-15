<template>
  <div class="Unity">
    <div class="container">
      <h1 class="section-title">Cave'scape</h1>
      <h3 class="section-subtitle colored">
        Une semaine pour créer un platformer 2D
      </h3>
      <p class="section-description">
        Au cours d'une semaine de projet au sein de l'école supérieure du
        digital j'ai travaillé sur Unity.<br />
        Nous avions une semaine top chrono, pour créer un jeu platformer en 2D
        avec au moins deux niveaux. Première épreuve pour nous, nous n'avions
        encore jamais touché à Unity ou encore au C#. Durant la première journée
        notre intervenant nous a donc introduit les bases de C# du moins, celle
        qui nous serait utile pour notre projet. De là il a fallut former des
        groupes, moi et mon camarade avons donc réfléchis le jour suivant à quel
        environnement, mécaniques & graphisme choisir. Notre choix était vite
        fait, un environnement plutôt sombre comme une cave ! En ce qui concerne
        les graphismes, nous ne voulions pas partir sur du pixelArt, nous avons
        donc choisi de se rapprocher d'hollow knight, un jeu de plateforme très
        populaire. Mon camarade et moi avons repris des mécaniques
        incontournable pour un platformer, le double saut, mais également la
        possibilité de tuer et se faire tuer par un monstre ou encore des
        plateformes sur lesquels on peut activer ou désactiver les collisions.
        Le décor que nous avons crée est basé sur les assets créer par
        <strong>Maoot</strong><br /><br />

        <strong>Histoire du jeu :</strong><br /><br />

        Crowd un ancien roi à décidé de surtaxer son peuple, n'étant en aucun
        cas dans la possibilité de payer ces taxes d'un prix exorbitant le
        peuple se leva contre la monarchie renversant le roi et le jetant au
        fond d’une dangereuse caverne… <br /><br />Notre projet a abouti à un
        oral.
      </p>
      <div class="stacks-container">
        <h3 class="section-subtitle colored">Stack utilisées</h3>
        <ul class="section-list">
          <li class="section-list-item">
            <img src="../../../public/img/csharp.svg" alt="" /> C#
          </li>
          <li class="section-list-item">
            <img src="../../../public/img/unitystack.png" alt="" /> Unity
          </li>
        </ul>
      </div>
      <img src="../../../public/img/Unity.png" alt="" class="section-img" />

      <div class="links-container">
        <router-link to="/projects/Witch-Weather" @click="scrollTop">
          Projets Suivant<i class="fa-solid fa-arrow-right-long"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/variables.scss";
.Unity {
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
  name: "project-Unity-Cave'scape",

  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
