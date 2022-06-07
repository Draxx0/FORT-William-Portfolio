<template>
  <div class="WitchWeather">
    <div class="container">
      <h1 class="section-title">Witch Weather ?</h1>
      <h3 class="section-subtitle colored">
        Créer une application web consommant une API en Angular/NodeJs
      </h3>
      <p class="section-description">
        Pendant une semaine nous avions pour objectif de créer une application
        web basé sur une API, mon équipe et moi avons créer une app météo
        faisant appel à une API nommé « Weather API » nous renvoyant les
        informations relative à la météo en fonction de la ville. Afin
        d’accueillir les informations de l’API il nous fallait du Front End
        évidemment, Angular a été le framework utilisé mais il nous a également
        fallu du Backend afin de récupérer les informations que nous renvoyé
        l’API, nous avons donc utilisé NodeJs Express. Une application sur
        laquelle vous pourrez sélectionner une des villes sur le menu en haut à
        droite, que vous pourrez également ajouter à vos favoris garder en
        mémoire via le LocalStorage du JavaScript. L’image de fond changera en
        fonction du temps !
      </p>

      <img src="../../assets/img/WitchWeather.png" alt="" class="section-img" />
      <img
        src="../../assets/img/WitchWeather2.png"
        alt=""
        class="section-img"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/variables.scss";

.WitchWeather {
  width: 75%;

  .container {
    width: 80%;
    margin: 50px auto;
  }
}
</style>

<script>

export default {
  name: "project-Witch-Weather",
};
</script>
