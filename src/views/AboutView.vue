<template>
  <div class="about">
    <div class="container">
      <h1 class="section-title">Qui-suis-je ?</h1>

      <div class="introduction-container">
        <h2 class="title">
          Je suis FORT William <span class="colored"> Frontend Developper</span>
        </h2>

        <p class="text">
          J’ai un attrait pour les jolis visuels, j’aime coder de belle
          maquettes<br />
          afin de leur donner vie ! Je suis quelqu’un de perseverant, quand
          je<br />
          fais des erreurs je ne lâche jamais avant d'avoir trouvé le
          pourquoi<br />
          du comment !
        </p>
      </div>

      <div class="about-me-container">
        <h3 class="about-me-items">
          <span class="bold">Date de naissance :</span> 10 Janvier 2003
        </h3>

        <h3 class="about-me-items">
          <span class="bold">Ville d'habitation :</span> Bordeaux
        </h3>

        <h3 class="about-me-items">
          <span class="bold">École :</span> École supérieure du digital
        </h3>

        <h3 class="about-me-items"><span class="bold">Age :</span> 19 ans</h3>
      </div>

      <div class="btn-container">
        <a class="btn" @click="downloadCV()">Télécharger mon CV</a>
        <router-link to="/contact" class="btn" @click="scrollToTop()">
          Me contacter</router-link
        >
      </div>

      <!-- <div class="skills-container">
        <div class="skills-grid">
          <div class="skill" v-for="skill in skills" :key="skill.name">
            <div class="skill-row">
              <span class="skill-name">{{ skill.name }}
                <img :src="'img/' + skill.img" class="skill-img" alt="" /></span>
              <span class="skill-level">{{ skill.level }}</span>
            </div>
          </div>
        </div>
      </div> -->

      <div class="skills-container">
        <h3 class="skill-type">Frontend</h3>

        <div class="skills-row">
          <div
            class="skill-flex"
            v-for="skill in skillsFront"
            :key="skill.name"
          >
            <span class="skill-name">{{ skill.name }}</span>
            <img :src="'img/' + skill.img" class="skill-img" />
            <span class="skill-hours">{{ skill.hours }}</span>
          </div>
        </div>
      </div>

      <div class="skills-container">
        <h3 class="skill-type">Backend</h3>

        <div class="skills-row">
          <div class="skill-flex" v-for="skill in skillsBack" :key="skill.name">
            <span class="skill-name">{{ skill.name }}</span>
            <img :src="'img/' + skill.img" class="skill-img" />
            <span class="skill-hours">{{ skill.hours }}</span>
          </div>
        </div>
      </div>

      <div class="skills-container">
        <h3 class="skill-type">Autre compétences</h3>

        <div class="skills-row">
          <div
            class="skill-flex"
            v-for="skill in otherSkills"
            :key="skill.name"
          >
            <span class="skill-name">{{ skill.name }}</span>
            <img :src="'img/' + skill.img" class="skill-img" />
            <span class="skill-hours">{{ skill.hours }}</span>
          </div>
        </div>
      </div>

      <div class="experience-school-container">
        <h3 class="experience-school-title">Formations</h3>
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

        <h3 class="experience-school-title">Expériences</h3>
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
          type: "front",
          img: "html.png",
          hours: "125h",
        },
        {
          name: "CSS",
          type: "front",
          img: "CSS.png",
          hours: "125h",
        },
        {
          name: "Javascript",
          type: "front",
          img: "Javascript.png",
          hours: "65h",
        },
        {
          name: "Typescript",
          type: "front",
          img: "typescript.png",
          hours: "10h",
        },
        {
          name: "Git",
          type: "other",
          img: "git.png",
        },
        {
          name: "Vue",
          type: "front",
          img: "vue.png",
          hours: "45h",
        },
        {
          name: "React",
          type: "front",
          img: "React.png",
          hours: "5h",
        },
        {
          name: "Angular",
          type: "front",
          img: "angular.png",
          hours: "10h",
        },
        {
          name: "Node JS",
          type: "back",
          img: "nodejs.png",
          hours: "10h",
        },
        {
          name: "PHP",
          type: "back",
          img: "php.png",
          hours: "20h",
        },
        {
          name: "C#",
          type: "other",
          img: "csharp.svg",
          hours: "5h",
        },

        {
          name: "Figma",
          type: "other",
          img: "figma.png",
          hours: "35h",
        },

        {
          name: "Adobe XD",
          type: "other",
          img: "adobexd.png",
          hours: "10h",
        },

        {
          name: "Photoshop",
          type: "other",
          img: "photoshop.png",
          hours: "15h",
        },
      ],
      skillsFront: [],
      skillsBack: [],
      otherSkills: [],
      schools: [
        {
          year: "2021 - 2024",
          type: "Bachelor",
          text: "Bachelor Développeur Web ( ESD Bordeaux )",
        },

        {
          year: "2021",
          type: "English Certificate",
          text: "Cambridge english certificate ( CEC ) Niveau B1 +",
        },

        {
          year: "2021",
          type: "Baccalauréat",
          text: "Baccalauréat Professionnel Système Numérique Option Réseaux informatiques et systèmes communicants - Mention Bien",
        },
      ],
      stages: [
        {
          year: "2022",
          type: "Stage - Agence Backstages",
          text: "Développement Frontend HTML / CSS / JS refonte du site de l’agence - création du site SAGC",
        },

        {
          year: "2019",
          type: "Stage - Direction générale de l’armement",
          text: "Aide au déploiement réseau",
        },

        {
          year: "2019",
          type: "Stage - Microtek",
          text: "Montages / Dépannages / Déploiements sur sites de matériels informatiques",
        },
      ],
    };
  },

  methods: {
    downloadCV() {
      const link = document.createElement("a");
      link.href = "CV - FORT William.pdf";
      link.setAttribute("download", "CV - FORT William.pdf");
      link.click();
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  mounted() {
    this.skillsFront = this.skills.filter((skill) => skill.type === "front");
    this.skillsBack = this.skills.filter((skill) => skill.type === "back");
    this.otherSkills = this.skills.filter((skill) => skill.type === "other");

    console.log(this.skillsBack);
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
      flex-direction: column;
      margin: 50px 0 45px 0;
      gap: 25px;

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

    .btn-container {
      display: flex;
      gap: 50px;

      a {
        margin: 0;
      }
    }

    .skills-container {
      display: flex;
      flex-direction: column;
      gap: 25px;
      width: 100%;
      margin-top: 100px;

      .skill-type {
        position: relative;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 36px;
        width: fit-content;

        &::before {
          position: absolute;
          left: 0;
          bottom: -5px;
          content: "";
          display: block;
          width: 30%;
          height: 4px;
        }
      }

      .skills-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        grid-gap: 100px;
        margin-top: 50px;

        .skill-flex {
          display: flex;
          align-items: center;
          gap: 25px;

          .skill-name {
            display: flex;
            align-items: center;
            gap: 15px;
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            font-size: 1.5rem;
          }

          .skill-hours {
            display: flex;
            align-items: center;
            gap: 15px;
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            font-size: 1.5rem;
          }

          .skill-img {
            width: 48px;
            height: 48px;
          }

          .skill-level {
            position: relative;
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            font-size: 1.3rem;
            width: fit-content;

            &::before {
              position: absolute;
              content: "";
              display: block;
              left: 0;
              bottom: -5px;
              width: 100%;
              height: 4px;
              border-radius: 25px;
            }
          }
        }
      }
    }

    .experience-school-container {
      display: flex;
      flex-direction: column;

      .experience-school-title {
        margin: 100px 0 25px 0;
        font-family: "Poppins", sans-serif;
        text-transform: uppercase;
      }

      .experience-school-card {
        position: relative;
        background-color: $light-mode-nav-background-color;
        border: solid 0.5px $border-color;
        border-radius: 15px;
        width: 50%;
        padding: 40px 60px;

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

@media screen and (max-width: 1117px) {
  .about .container .skills-container .skills-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 1334px) {
  .about {
    width: 100%;
    .container {
      .experience-school-container {
        width: fit-content;
        .experience-school-card {
          width: auto;
        }
      }
    }
  }
}

@media screen and (max-width: 945px) {
  .about {
    .container {
      .skills-container {
        .skills-grid {
          grid-template-columns: repeat(1, 1fr);
        }
      }
      .about-me-container {
        .about-me-items {
          &::before {
            width: 100%;
          }
        }
      }
      .experience-school-container {
        flex-direction: column;
        width: fit-content;

        .experience-school-card {
          width: fit-content;
        }
      }
    }
  }
}

@media screen and (max-width: 1117px) {
  .about .container .skills-container .skills-row {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 693px) {
  .about {
    .container {
      .experience-school-container {
        .experience-school-card {
          .card-content {
            .card-year:nth-child(1)::after {
              height: 410px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 659px) {
  .about {
    .container {
      .experience-school-container {
        .experience-school-card {
          .card-content {
            .card-year:nth-child(1)::after {
              height: 430px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 618px) {
  .about {
    .container {
      .btn-container {
        a {
          padding: 10px;
        }
      }
      .experience-school-container {
        .experience-school-card {
          .card-content {
            .card-year:nth-child(1)::after {
              height: 440px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 547px) {
  .about {
    .container {
      .experience-school-container {
        .experience-school-card {
          .card-content {
            .card-year:nth-child(1)::after {
              height: 500px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 468px) {
  .about {
    .container {
      .btn-container {
        a {
          font-size: 0.8rem;
        }
      }
      .experience-school-container {
        .experience-school-card {
          .card-content {
            .card-year:nth-child(1)::after {
              height: 520px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 468px) {
  .about {
    .container {
      .btn-container {
        a {
          font-size: 0.8rem;
        }
      }
      .experience-school-container {
        .experience-school-card {
          .card-content {
            .card-year:nth-child(1)::after {
              height: 550px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 375px) {
  .about {
    .container {
      .btn-container {
        a {
          font-size: 0.7rem;
        }
      }
      .experience-school-container {
        .experience-school-card {
          .card-content {
            .card-year:nth-child(1)::after {
              height: 666px;
            }
          }
        }
      }
    }
  }
}
</style>
