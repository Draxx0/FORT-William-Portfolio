<template>
  <div class="cookbyfrichti">
    <div class="container">
      <h1 class="section-title">Cook By Frichti</h1>
      <h3 class="section-subtitle colored">
        Créer une application mêlant Streaming Audio & Frichti
      </h3>
      <p class="section-description">
        Au cour d'une semaine de projet au sein de l'école supérieur du digital
        j'ai travaillé sur une application que nous avons réalisé sur Adobe
        XD.<br />
      </p>
      <img
        src="../../../public/img/Cook-frichti.png"
        alt=""
        class="section-img"
      />

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
export default {
  name: "project-Cook-by-Frichti",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
.cookbyfrichti {
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
  .cookbyfrichti {
    width: 100%;
  }
}
</style>
