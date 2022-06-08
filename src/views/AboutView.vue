<template>
  <div class="about">
    <div class="container">
      <h1 class="section-title">Qui-suis-je ?</h1>

      <div class="introduction-container">
        <h2 class="title">
          Je suis FORT William <span class="colored"> Frontend Developper</span>
        </h2>

        <p class="text">
          J’ai un atrait pour les jolies visuel, j’aime coder de belle
          maquettes<br />
          afin de leur donner vie ! je suis quelqu’un de perseverant, quand
          je<br />
          fais des erreurs je lâche rarement avant d’avoir trouver le
          pourquoi<br />
          du comment !
        </p>
      </div>

      <div class="about-me-container">
        <div class="about-me-left-container">
          <h3 class="about-me-items">
            <span class="bold">Date de naissance :</span> 10Janvier 2003
          </h3>

          <h3 class="about-me-items">
            <span class="bold">Ville d'habitation :</span> Bordeaux
          </h3>

          <h3 class="about-me-items">
            <span class="bold">École d'enseignement :</span> École supérieur du
            digital - Bordeaux
          </h3>
        </div>

        <div class="about-me-right-container">
          <h3 class="about-me-items">
            <span class="bold">Age :</span> 10Janvier 2003
          </h3>

          <h3 class="about-me-items">
            <span class="bold">Email :</span> williamfort.lmgl@gmail.com
          </h3>

          <h3 class="about-me-items">
            <span class="bold">Téléphone :</span> 06 83 10 03 51
          </h3>
        </div>
      </div>

      <div class="btn-container">
        <a class="btn" @click="downloadCV()">Télécharger mon CV</a>
        <router-link to="/contact" class="btn"> Me contacter</router-link>
      </div>

      <div class="skills-container">
        <div class="skills-grid">
          <div class="skill" v-for="skill in skills" :key="skill.name">
            <div class="skill-row">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-average">{{ skill.pourcentage }}%</span>
            </div>
            <div class="skill-bar">
              <div
                class="skill-bar-fill"
                :style="{ width: skill.pourcentage + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="experience-school-container">
        <div class="experience-school-card">
          <div
            class="card-content"
            v-for="school in schools"
            :key="school.year"
          >
            <span class="card-year"
              ><i class="fa-solid fa-calendar fa-lg"></i>
              {{ school.year }}</span
            >
            <div class="card-info">
              <span class="card-type">{{ school.type }}</span>
              <span class="card-text">{{ school.text }}</span>
            </div>
          </div>
        </div>

        <div class="experience-school-card">
          <div class="card-content" v-for="stage in stages" :key="stage.year">
            <span class="card-year"
              ><i class="fa-solid fa-calendar fa-lg"></i> {{ stage.year }}</span
            >
            <div class="card-info">
              <span class="card-type">{{ stage.type }}</span>
              <span class="card-text">{{ stage.text }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="school-experience-containe"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",

  data() {
    return {
      skills: [
        {
          name: "HTML",
          pourcentage: 85,
        },
        {
          name: "CSS",
          pourcentage: 85,
        },
        {
          name: "Javascript",
          pourcentage: 55,
        },
        {
          name: "Git",
          pourcentage: 80,
        },
        {
          name: "Vue JS",
          pourcentage: 30,
        },
        {
          name: "React JS",
          pourcentage: 10,
        },
        {
          name: "Angular JS",
          pourcentage: 15,
        },
        {
          name: "Node JS",
          pourcentage: 25,
        },
        {
          name: "PHP",
          pourcentage: 15,
        },
        {
          name: "C#",
          pourcentage: 5,
        },
      ],
      schools: [
        {
          year: "2021",
          type: "Baccalauréat",
          text: "Baccalauréat Professionnel Système Numérique Option Réseaux informatiques et systèmes communicants - Mention Bien",
        },

        {
          year: "2021",
          type: "English Certificate",
          text: "Cambridge english certificate ( CEC ) Niveau B1 +",
        },

        {
          year: "2021 - 2024",
          type: "Bachelor",
          text: "Bachelor Développeur Web ( ESD Bordeaux )",
        },
      ],
      stages: [
        {
          year: "2019",
          type: "Stage - Direction général de l’armement",
          text: "Aide au déploiement réseau",
        },

        {
          year: "2019",
          type: "Stage - Microtek",
          text: "Montages / Dépannages / Déploiements sur sites de matériels informatiques",
        },

        {
          year: "2022",
          type: "Stage - Agence Backstages",
          text: "Développement Frontend HTML / CSS / JS refonte du site de l’agence - création du site SAGC",
        },
      ],
    };
  },

  methods: {
    downloadCV() {
      const link = document.createElement("a");
      link.href = "CV.pdf";
      link.setAttribute("download", "FORT - William CV.pdf");
      link.click();
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";

.about {
  width: 75%;

  .container {
    width: 80%;
    margin: 50px auto;

    .introduction-container {
      display: flex;
      flex-direction: column;
      gap: 25px;

      .title {
        font-family: "Montserrat Alternates", sans-serif;
        font-size: 2rem;
        font-weight: 500;
      }
      .text {
        font-family: "Poppins", sans-serif;
      }
    }

    .about-me-container {
      display: flex;
      gap: 25px;
      margin: 25px 0 45px 0;

      .about-me-left-container,
      .about-me-right-container {
        display: flex;
        flex-direction: column;

        .about-me-items {
          position: relative;
          font-family: "Poppins", sans-serif;
          font-weight: 500;

          &::before {
            position: absolute;
            left: 0;
            bottom: -5px;
            content: "";
            display: block;
            width: 500px;
            height: 1px;
            background-color: $border-color;
          }
        }
      }
    }

    .btn-container {
      display: flex;
      gap: 50px;

      a {
        margin: 0;
      }
    }

    .skills-container {
      display: flex;
      gap: 25px;
      width: 100%;
      margin-top: 100px;

      .skills-grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 25px;

        .skill-row {
          display: flex;
          justify-content: space-between;

          .skill-name {
            font-family: "Poppins", sans-serif;
            font-weight: 500;
          }

          .skill-average {
            font-family: "Poppins", sans-serif;
            font-weight: 500;
          }
        }

        .skill-bar {
          background-color: $border-color;
          border-radius: 25px;
          width: 100%;
          height: 15px;
        }

        .skill-bar-fill {
          height: 15px;
          border-radius: 25px;
        }
      }
    }

    .experience-school-container {
      display: flex;
      justify-content: space-between;
      margin-top: 100px;
      gap: 25px;

      .experience-school-card {
        position: relative;
        background-color: $light-mode-nav-background-color;
        border: solid 0.5px $border-color;
        border-radius: 15px;
        width: 50%;
        padding: 30px 60px;

        .card-content {
          display: flex;
          flex-direction: column;
          gap: 15px;

          .card-year {
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: "Poppins", sans-serif;
            font-size: 1.1rem;
            font-weight: 600;

            &:nth-child(1) {
              &::before {
                position: absolute;
                left: 25px;
                content: "";
                display: block;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                margin-right: 10px;
              }

              &::after {
                position: absolute;
                content: "";
                top: 50px;
                left: 30px;
                display: block;
                width: 10px;
                height: 380px;
                margin-right: 10px;
              }
            }
          }

          .card-text {
            font-family: "Poppins", sans-serif;
            margin-bottom: 15px;
            font-weight: 400;
          }

          .card-info {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }
          .card-type {
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            font-size: 1.3rem;
          }
        }
      }
    }
  }
}
</style>
