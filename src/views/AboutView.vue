<template>
  <div class="about">
    <div class="container">
      <div class="about-header">
        <h1 class="section-title">Qui-suis-je ?</h1>

        <div class="introduction-container">
          <h2 class="title">
            Je suis FORT William
            <span class="colored"> Développeur Web </span>
          </h2>

          <p class="text">
            J'ai développé une vraie passion pour les web-applications,
            j'investis beaucoup de temps à construire des projets personnels
            afin de mettre à l'épreuve mes connaissances ! Je suis quelqu’un de
            perseverant, toute erreur est une opportunité d'apprendre.
          </p>
        </div>

        <div class="about-me-container">
          <h3 class="about-me-items">
            <span class="bold">Réside à :</span> Bordeaux
          </h3>

          <h3 class="about-me-items">
            <span class="bold">École :</span> École supérieure du digital
          </h3>

          <h3 class="about-me-items"><span class="bold">Age :</span> 21 ans</h3>
        </div>

        <div class="btn-container">
          <a class="btn" @click="downloadCV()">Télécharger mon CV</a>
          <router-link to="/contact" class="btn" @click="scrollToTop()">
            Me contacter</router-link
          >
        </div>
      </div>

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
          </div>
        </div>
      </div>

      <div class="skills-container">
        <h3 class="skill-type">Backend</h3>

        <div class="skills-row">
          <div class="skill-flex" v-for="skill in skillsBack" :key="skill.name">
            <span class="skill-name">{{ skill.name }}</span>
            <img :src="'img/' + skill.img" class="skill-img" />
          </div>
        </div>
      </div>

      <div class="skills-container">
        <h3 class="skill-type">Devops</h3>

        <div class="skills-row">
          <div
            class="skill-flex"
            v-for="skill in skillsDevops"
            :key="skill.name"
          >
            <span class="skill-name">{{ skill.name }}</span>
            <img :src="'img/' + skill.img" class="skill-img" />
          </div>
        </div>
      </div>

      <div class="soft-skills-container">
        <h3 class="soft-skills-title">Mes Softs Skills</h3>

        <div class="soft-skills-grid">
          <div
            class="soft-skill"
            v-for="softSkill in softSkills"
            :key="softSkill.name"
          >
            <h4 class="soft-skill-name">
              {{ softSkill.name }}
            </h4>
          </div>
        </div>
      </div>

      <div class="experience-school-container">
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
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "AboutView",

  data() {
    return {
      softSkills: [
        {
          name: "Travail d'équipe",
        },
        {
          name: "Autonomie",
        },
        {
          name: "Rigueur",
        },
        {
          name: "Curiosité",
        },
        {
          name: "Motivé",
        },
        {
          name: "Sérieux",
        },
      ],
      skills: [
        {
          name: "React",
          type: "front",
          img: "React.png",
        },
        {
          name: "Typescript",
          type: "front",
          img: "typescript.png",
        },
        {
          name: "SASS",
          type: "front",
          img: "sass.png",
        },
        {
          name: "Tailwind",
          type: "front",
          img: "tailwind.png",
        },
        {
          name: "Nest JS",
          type: "back",
          img: "NestJS.png",
        },
        {
          name: "PostgreSQL",
          type: "back",
          img: "Postgresql_elephant.svg",
        },
        {
          name: "MongoDB",
          type: "back",
          img: "mongodb.webp",
        },
        {
          name: "Docker",
          type: "devops",
          img: "docker.webp",
        },
        {
          name: "Git",
          type: "devops",
          img: "git.png",
        },
        {
          name: "Github",
          type: "devops",
          img: "github.png",
        },
        {
          name: "Gitlab",
          type: "devops",
          img: "gitlab.webp",
        },
        {
          name: "Firebase",
          type: "back",
          img: "firebase.png",
        },
      ],
      skillsFront: [],
      skillsBack: [],
      skillsDevops: [],
      schools: [
        {
          year: "2021 - 2024",
          type: "Bachelor",
          text: "Bachelor Développeur Web ( ESD Bordeaux ).",
        },

        {
          year: "2021",
          type: "English Certificate",
          text: "Cambridge english certificate ( CEC ) Niveau B1 +.",
        },

        {
          year: "2021",
          type: "Baccalauréat",
          text: "Baccalauréat Professionnel Système Numérique Option Réseaux informatiques et systèmes communicants - Mention Bien.",
        },
      ],
      stages: [
        {
          year: "Octobre 2023 - Aujourd'hui",
          type: "Alternance - Agence Marketing Box",
          text: "Développement web & mobile - web app, application mobile native, sites statiques, automatisations...",
        },
        {
          year: "Avril 2023 - Juillet 2023",
          type: "Stage - Yabawt",
          text: "Développement Fullstack JS - React / NestJS - Développement en micro-services du SaaS Webmarketer, Ajout de fonctionnalitées & Correction de bugs sur une web-app de gestion des demandes clients.",
        },

        {
          year: "Septembre 2022 - Mars 2023",
          type: "Contrat étudiant - Agence Backstages",
          text: "Développement Frontend de plusieurs sites, DPDA Bordeaux, Neo-Process, Rock Hill ainsi que la refonte du site de l'agence backstages.",
        },
        {
          year: "Février 2022 - Avril 2022",
          type: "Stage - Agence Backstages",
          text: "Refonte du site de l'agence, développement du site SAGC.",
        },
      ],
    };
  },

  methods: {
    downloadCV() {
      const link = document.createElement("a");
      link.href = "CV.jpg";
      link.setAttribute("download", "CV.jpg");
      link.click();
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  mounted() {
    this.skillsFront = this.skills.filter((skill) => skill.type === "front");
    this.skillsBack = this.skills.filter((skill) => skill.type === "back");
    this.skillsDevops = this.skills.filter((skill) => skill.type === "devops");

    const aboutHeader = document.querySelector(".about-header");
    const experienceCards = document.querySelector(
      ".experience-school-container"
    );
    const skillsContainer = document.querySelectorAll(".skills-container");
    const softSkillsContainer = document.querySelector(
      ".soft-skills-container"
    );

    gsap.from(aboutHeader, {
      scrollTrigger: {
        trigger: aboutHeader,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });

    gsap.from(softSkillsContainer, {
      scrollTrigger: {
        trigger: softSkillsContainer,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });

    gsap.from(experienceCards, {
      scrollTrigger: {
        trigger: experienceCards,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });

    skillsContainer.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });
    });
  },
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";

.about {
  margin-left: 450px;
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

    .soft-skills-container {
      .soft-skills-title {
        font-family: "Poppins", sans-serif;
        font-size: 2rem;
        font-weight: 500;
        margin: 100px 0;
        position: relative;
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
      .soft-skills-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        gap: 100px;
        font-family: "Poppins", sans-serif;
        font-size: 1.5rem;

        .soft-skill {
          position: relative;
          .soft-skill-name {
            font-weight: 500;
          }
        }
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

          .skill-img {
            width: 48px;
            height: 48px;
            object-fit: contain;
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

        .card-year {
          &::before {
            position: absolute;
            left: 25px;
            content: "";
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 10px;
          }
        }

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
    margin: 0;
    width: 100%;
    .container {
      .experience-school-container {
        width: fit-content;
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
          width: initial;
        }
      }
    }
  }
}

@media screen and (max-width: 809px) {
  .about {
    .container {
      .soft-skills-container {
        .soft-skills-grid {
          display: flex;
          flex-direction: column;
        }
      }
      .skills-container {
        .skills-row {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}

@media screen and (max-width: 618px) {
  .about {
    .container {
      .btn-container {
        flex-wrap: wrap;
        gap: 25px;
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

      .experience-school-container .experience-school-card {
        padding: 20px;

        .card-year {
          &::before {
            display: none;
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
    }
  }
}

@media screen and (max-width: 809px) {
  .about {
    .container {
      .soft-skills-container {
        .soft-skills-grid {
          font-size: 1.3em;
        }
      }
    }
  }
}
</style>
