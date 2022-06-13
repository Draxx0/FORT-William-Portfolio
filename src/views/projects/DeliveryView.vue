<template>
  <div class="Delivery">
    <div class="container">
      <h1 class="section-title">Delivery</h1>
      <h3 class="section-subtitle colored">Intégration d'une maquette</h3>
      <p class="section-description">
        Durant deux semaines j’ai participé à la création de A à Z d’un escape
        game en ligne. Période de Covid-19 oblige nous nous somme tenus à créer
        un escape game sur le net ou le joueur devrait en 30 minutes réussir à
        terminer celui-ci. Lors de ces deux semaines nous avions plusieurs
        équipes, les scénaristes afin d’imaginer l’histoire et son déroulement,
        les créatifs afin de créer l’identité visuel de l’escape game et enfin
        l’équipe dont j’ai fais partit, les développeurs afin de coder et rendre
        fonctionnel l’escape game.<br /><br />
        Lors de cet évènement, pour créer l’escape game il était au début prévue
        que nous utilisions Construct, un moteur de jeux vidéos adapté au web.
        Cependant après avoir reçu le cours d’introduction à Construct, le
        leader de notre team de 4 développeurs nous a proposé de partir plutôt
        sur React. Problème étant que nous, les 3 autres développeurs n’avais
        encore jamais touché à React auparavant. Au final nous nous sommes
        dirigé vers du React aidé de notre Intervenant Thomas Mouchelet et de
        notre Leader Dev Cyriac Du Chatenet nous sommes parvenu à nos fin.
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
