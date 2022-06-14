<template>
  <div class="Delivery">
    <div class="container">
      <h1 class="section-title">Delivery</h1>
      <h3 class="section-subtitle colored">Intégration d'une maquette</h3>
      <p class="section-description">
        Quand j'ai du temps libre j'aime travailler sur des intégrations HTML -
        CSS/SCSS - JS afin de me challenger je me balade souvent sur Dribble
        afin de trouver la pépite que j'intégrerais, cette fois c'est sur
        youtube que j'ai trouver cette template, j'ai récupèrer le projet from
        scratch sur github et je me suis lancé.<br /><br />
        Le speech est assez claire une landing page d'un site de livraison que
        j'intégrerais en HTML SCSS JS avec un poil de GSAP.
      </p>

      <div class="stacks-container">
        <h3 class="section-subtitle colored">Stack utilisées</h3>
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
          <li class="section-list-item">
            <img src="../../../public/img/gsap.png" alt="" /> GSAP
          </li>
        </ul>
      </div>

      <h3 class="section-subtitle colored">Rendu</h3>

      <img src="../../../public/img/Delivery.png" alt="" class="section-img" />

      <a
        href="https://draxx0.github.io/Delivery/"
        class="project-link"
        target="_blank"
        >Voir plus</a
      >

      <div class="links-container">
        <router-link to="/projects/Titanime" @click="scrollToTop()">
          <i class="fa-solid fa-arrow-left-long"></i>Projets
          Précèdents</router-link
        >
        <router-link to="" @click="scrollToTop()">
          Projets Suivant<i class="fa-solid fa-arrow-right-long"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project-Delivery",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    // goBack() {
    //   this.$router.push("/projects");
    // },
  },
};
</script>

<style lang="scss">
.Delivery {
  width: 75%;

  .container {
    width: 80%;
    margin: 50px auto;
  }
}
</style>
