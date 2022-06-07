<template>
  <div class="DigitalEvent">
    <div class="container">
      <h1 class="section-title">The Last Chance</h1>
      <h3 class="section-subtitle colored">
        Deux Semaines, un escape game virtuel
      </h3>
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

      <video class="video-container" controls poster="../../assets/img/The-last-chance.png">
        <source src="../../assets/video/lastchance.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>

export default {
  name: "project-Digital-Event-2022",
};
</script>

<style lang="scss">
.DigitalEvent {
  width: 75%;

  .container {
    width: 80%;
    margin: 50px auto;

    .video-container {
      width: 100%;
    }
  }
}
</style>
