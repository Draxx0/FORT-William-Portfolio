<template>
  <SettingsMenu />
  <nav>
    <div class="logo">
      <h1><span>W</span>illiam</h1>
    </div>
    <div class="menu">
      <router-link to="/" @click="scrollToTop">
        <i class="fa-solid fa-house"></i> Accueil</router-link
      >
      <router-link to="/about" @click="scrollToTop"
        ><i class="fa-solid fa-user-graduate"></i>A propos</router-link
      >
      <router-link to="/projects" @click="scrollToTop"
        ><i class="fa-solid fa-folder-open"></i>Projets</router-link
      >
      <router-link to="/contact" @click="scrollToTop"
        ><i class="fa-solid fa-envelope"></i>Contact</router-link
      >
    </div>
  </nav>
  <router-view />
</template>

<script>
import SettingsMenu from "./components/SettingsMenu.vue";
import { gsap } from "gsap";

export default {
  name: "App",
  components: {
    SettingsMenu,
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  mounted() {
    gsap.from("body", { opacity: 0, duration: 1 });

    const app = document.querySelector("#app");

    if (localStorage.getItem("colorTheme")) {
      app.classList.remove("green");
      app.classList.add(localStorage.getItem("colorTheme"));
    } else {
      app.classList.add("green");
    }

    if (localStorage.getItem("isDarkMode") === "false") {
      app.classList.remove("dark-mode");
      app.classList.add("light-mode");
    } else {
      app.classList.remove("light-mode");
      app.classList.add("dark-mode");
    }
  },
};
</script>

<style lang="scss">
//----------------------------------------------------- IMPORTS -----------------------------------------------------

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap");
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

//----------------------------------------------------- STATIC -----------------------------------------------------

body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;

  &::before,
  ::after {
    box-sizing: border-box;
  }
}

h1,
h2,
h3,
h4,
h5,
p {
  padding: 0;
  margin: 0;
}

#app {
  display: flex;
  width: 100%;
  height: 100%;
  transition: 0.5s ease-in-out;
}

body:has(.dark-mode) {
  background-color: $dark-mode-background-color;
}

body:has(.light-mode) {
  background-color: $light-mode-background-color;
}

.back {
  font-size: 1.1rem;
  font-family: "Montserrat Alternates", sans-serif;
  cursor: pointer;
}

.pointer {
  cursor: pointer;
}

.row {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  i {
    transition: 0.3s ease-in-out;
  }

  &:hover > i {
    transform: translateX(-10px);
  }
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  border-right: 0.5px solid $border-color;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  transition: 0.5s ease-in-out;

  .logo {
    width: auto;

    h1 {
      position: relative;
      font-family: "Montserrat Alternates", sans-serif;
      font-size: 38px;

      &::before {
        position: absolute;
        top: -25px;
        left: -25px;
        display: block;
        content: "";
        width: 33px;
        height: 33px;
        transition: 0.5s ease-in-out;
      }

      &::after {
        position: absolute;
        bottom: -25px;
        right: -25px;
        display: block;
        content: "";
        width: 33px;
        height: 33px;
        transition: 0.5s ease-in-out;
      }
    }

    span {
      font-family: "Clicker Script", cursive;
      font-size: 52px;
    }
  }

  .menu {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 35px;
    font-family: "Montserrat Alternates", sans-serif;
  }

  a {
    position: relative;
    display: flex;
    gap: 15px;
    color: #2c3e50;
    font-size: 24px;
    text-decoration: none;
    transition: 0.3s ease-in-out;

    &::after {
      content: "";
      display: block;
      width: 120%;
      height: 0.5px;
      position: absolute;
      left: 0;
      bottom: -5px;
      background-color: $border-color;
    }
  }
}

.btn {
  @include btn;
}

.text {
  font-size: 1.2rem;
}

.bold {
  font-weight: bold;
}

.section-title {
  width: fit-content;
  position: relative;
  font-size: 2.5rem;
  font-weight: bold;
  font-family: "Montserrat Alternates", sans-serif;
  margin-bottom: 100px;

  &::before {
    position: absolute;
    left: 0;
    bottom: -10px;
    content: "";
    width: 25%;
    height: 6px;
  }

  &::after {
    position: absolute;
    left: 0;
    bottom: -25px;
    content: "";
    width: 10%;
    height: 6px;
  }
}

.section-subtitle {
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 500;
  font-size: 2rem;
}

.section-description {
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 100px;
}

.section-img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 50px;
}

.video-container {
  width: 100%;
}

.stacks-container {
  margin-bottom: 100px;

  .section-list {
    list-style: none;
    padding: 0;

    .section-list-item {
      display: flex;
      align-items: center;
      font-family: "Poppins", sans-serif;
      gap: 25px;
      margin: 0 0 10px 0;
      font-size: 1.2rem;
      font-weight: bold;
      padding: 20px 0;

      img {
        width: 64px;
      }
    }
  }
}

.links-container {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  font-family: "Poppins", sans-serif;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 15px;
    font-size: 1.3rem;

    i {
      transition: 0.3s ease-in-out;
    }

    &:hover {
      &:nth-child(1) {
        i {
          transform: translateX(-10px);
        }
      }

      &:nth-child(2) {
        i {
          transform: translateX(10px);
        }
      }
    }
  }
}

.project-link {
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  width: fit-content;
  margin: auto;
  display: flex;
  text-decoration: none;

  &::before {
    position: absolute;
    left: 0;
    bottom: -10px;
    content: "";
    display: block;
    width: 30%;
    height: 4px;
    border-radius: 15px;
    transition: 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }
}

//----------------------------------------------------- MODE COLORS -----------------------------------------------------

.light-mode {
  background-color: $light-mode-background-color;
  color: $light-mode-text-color;

  nav {
    background-color: $light-mode-nav-background-color;
    color: $light-mode-text-color;
  }

  .btn {
    &:hover {
      box-shadow: inset 0 0 0 2px #000;
    }
  }

  .themes-menu-wrap,
  .mode-menu-wrap,
  .mobile-nav-wrap {
    background-color: $light-mode-nav-background-color;
    color: $light-mode-text-color;
    transition: 0.2s all ease-in-out;

    &:hover {
      box-shadow: inset 0 0 0 2px #000;
    }
  }

  .project-card {
    transition: 1s;
    border: 3px solid;
  }

  .links-container {
    a {
      color: $light-mode-text-color;
    }
  }

  .project-link {
    color: $light-mode-text-color;
  }

  .section-subtitle {
    &::before {
      background-color: $light-mode-text-color;
    }
  }

  .mobile-nav-container {
    background-color: $light-mode-nav-background-color;
    border-top: solid 3px $border-color;

    a {
      color: $light-mode-text-color;
    }
  }
}

.dark-mode {
  background-color: $dark-mode-background-color;
  color: $dark-mode-text-color;

  nav {
    background-color: $dark-mode-nav-background-color;
    color: $dark-mode-text-color;

    a {
      color: $dark-mode-text-color;

      &:hover {
        color: $green;
      }
    }
  }

  .btn {
    &:hover {
      box-shadow: inset 0 0 0 2px #fff;
    }
  }

  .themes-menu-wrap,
  .mode-menu-wrap,
  .mobile-nav-wrap {
    background-color: $dark-mode-nav-background-color;
    transition: 0.2s ease-in-out;

    &:hover {
      box-shadow: inset 0 0 0 2px #fff;
    }

    i {
      color: $dark-mode-text-color;
    }
  }

  .project-card {
    transition: 1s;
    border: 3px solid;
  }

  .title {
    color: $dark-mode-text-color;
  }

  .text {
    color: $dark-mode-text-color;
  }

  .experience-school-card {
    background-color: $dark-mode-background-color !important;
    color: $dark-mode-text-color;
  }

  .contact-me-content {
    a {
      transition: 1s;
      color: $dark-mode-text-color !important;
    }
  }

  .themes-container {
    background-color: $dark-mode-nav-background-color !important;
    color: $dark-mode-text-color !important;
  }

  .links-container {
    a {
      color: $dark-mode-text-color;
    }
  }

  .project-link {
    color: $dark-mode-text-color;
  }

  .section-subtitle {
    &::before {
      background-color: $dark-mode-text-color;
    }
  }

  .mobile-nav-container {
    background-color: $dark-mode-nav-background-color;
    border-top: solid 3px $border-color;

    a {
      color: $dark-mode-text-color;
    }
  }
}

//----------------------------------------------------- THEME COLORS -----------------------------------------------------

.green {
  ::selection {
    background-color: $green;
  }
  .soft-skills-title {
    &::before {
      background-color: $green;
    }
  }
  .company {
    color: $green;
  }
  .btn {
    background-color: $green;
  }

  .skill-type::before {
    background-color: $green;
  }

  .colored {
    color: $green;
  }

  .project-card {
    border-color: $green;
  }

  .card-year {
    &::before {
      background-color: $green;
    }

    &::after {
      background-color: $green;
    }
  }

  .contact-me-content {
    a {
      &::before {
        background-color: $green;
      }
    }
  }

  .section-title {
    &::before {
      background-color: $green;
    }

    &::after {
      background-color: $green;
    }
  }

  nav,
  .mobile-nav-container {
    a {
      &:hover {
        color: $green;
      }

      &.router-link-exact-active {
        color: $green;
      }
    }
  }

  .logo {
    h1 {
      &::before {
        border-top: 4px solid $green;
        border-left: 4px solid $green;
      }

      &::after {
        border-bottom: 4px solid $green;
        border-right: 4px solid $green;
      }
    }
  }

  .img-wrap {
    &::before {
      border-top: 4px solid $green;
      border-left: 4px solid $green;
    }

    &::after {
      border-bottom: 4px solid $green;
      border-right: 4px solid $green;
    }
  }

  .video-container {
    border: solid 2px $green;
    border-radius: 5px;
  }

  .links-container {
    a {
      i {
        color: $green;
      }
    }
  }

  .project-link {
    &::before {
      background-color: $green;
    }
  }
}

.orange {
  ::selection {
    background-color: $orange;
  }
  .soft-skills-title {
    &::before {
      background-color: $orange;
    }
  }
  .company {
    color: $orange;
  }
  .btn {
    background-color: $orange;
  }

  .skill-type::before {
    background-color: $orange;
  }

  .colored {
    color: $orange;
  }

  .card-year {
    &::before {
      background-color: $orange;
    }

    &::after {
      background-color: $orange;
    }
  }

  .contact-me-content {
    a {
      &:hover {
        color: $green;
      }

      &::before {
        background-color: $orange;
      }
    }
  }

  .project-card {
    border-color: $orange;
  }

  .section-title {
    &::before {
      background-color: $orange;
    }

    &::after {
      background-color: $orange;
    }
  }

  nav,
  .mobile-nav-container {
    a {
      &:hover {
        color: $orange;
      }

      &.router-link-exact-active {
        color: $orange;
      }
    }
  }

  .logo {
    h1 {
      &::before {
        border-top: 4px solid $orange;
        border-left: 4px solid $orange;
      }

      &::after {
        border-bottom: 4px solid $orange;
        border-right: 4px solid $orange;
      }
    }
  }

  .img-wrap {
    &::before {
      border-top: 4px solid $orange;
      border-left: 4px solid $orange;
    }

    &::after {
      border-bottom: 4px solid $orange;
      border-right: 4px solid $orange;
    }
  }

  .video-container {
    border: solid 2px $orange;
    border-radius: 5px;
  }

  .links-container {
    a {
      i {
        color: $orange;
      }
    }
  }

  .project-link {
    &::before {
      background-color: $orange;
    }
  }
}

.pink {
  ::selection {
    background-color: $pink;
  }
  .soft-skills-title {
    &::before {
      background-color: $pink;
    }
  }
  .company {
    color: $pink;
  }
  .btn {
    background-color: $pink;
  }

  .skill-type::before {
    background-color: $pink;
  }

  .colored {
    color: $pink;
  }

  .card-year {
    &::before {
      background-color: $pink;
    }

    &::after {
      background-color: $pink;
    }
  }

  .contact-me-content {
    a {
      &::before {
        background-color: $pink;
      }
    }
  }

  .section-title {
    &::before {
      background-color: $pink;
    }

    &::after {
      background-color: $pink;
    }
  }

  nav,
  .mobile-nav-container {
    a {
      &:hover {
        color: $pink;
      }

      &.router-link-exact-active {
        color: $pink;
      }
    }
  }

  .logo {
    h1 {
      &::before {
        border-top: 4px solid $pink;
        border-left: 4px solid $pink;
      }

      &::after {
        border-bottom: 4px solid $pink;
        border-right: 4px solid $pink;
      }
    }
  }

  .img-wrap {
    &::before {
      border-top: 4px solid $pink;
      border-left: 4px solid $pink;
    }

    &::after {
      border-bottom: 4px solid $pink;
      border-right: 4px solid $pink;
    }
  }

  .video-container {
    border: solid 2px $pink;
    border-radius: 5px;
  }

  .links-container {
    a {
      i {
        color: $pink;
      }
    }
  }

  .project-link {
    &::before {
      background-color: $pink;
    }
  }

  .project-card {
    border-color: $pink;
  }
}

.red {
  ::selection {
    background-color: $red;
  }
  .soft-skills-title {
    &::before {
      background-color: $red;
    }
  }
  .company {
    color: $red;
  }
  .btn {
    background-color: $red;
  }

  .skill-type::before {
    background-color: $red;
  }

  .colored {
    color: $red;
  }

  .card-year {
    &::before {
      background-color: $red;
    }

    &::after {
      background-color: $red;
    }
  }

  .contact-me-content {
    a {
      &::before {
        background-color: $red;
      }
    }
  }

  .section-title {
    &::before {
      background-color: $red;
    }

    &::after {
      background-color: $red;
    }
  }

  nav,
  .mobile-nav-container {
    a {
      &:hover {
        color: $red;
      }

      &.router-link-exact-active {
        color: $red;
      }
    }
  }

  .logo {
    h1 {
      &::before {
        border-top: 4px solid $red;
        border-left: 4px solid $red;
      }

      &::after {
        border-bottom: 4px solid $red;
        border-right: 4px solid $red;
      }
    }
  }

  .project-card {
    border-color: $red;
  }

  .img-wrap {
    &::before {
      border-top: 4px solid $red;
      border-left: 4px solid $red;
    }

    &::after {
      border-bottom: 4px solid $red;
      border-right: 4px solid $red;
    }
  }

  .video-container {
    border: solid 2px $red;
    border-radius: 5px;
  }

  .links-container {
    a {
      i {
        color: $red;
      }
    }
  }

  .project-link {
    &::before {
      background-color: $red;
    }
  }
}

.blue {
  ::selection {
    background-color: $blue;
  }
  .soft-skills-title {
    &::before {
      background-color: $blue;
    }
  }
  .company {
    color: $blue;
  }
  .btn {
    background-color: $blue;
  }

  .skill-type::before {
    background-color: $blue;
  }

  .colored {
    color: $blue;
  }

  .card-year {
    &::before {
      background-color: $blue;
    }

    &::after {
      background-color: $blue;
    }
  }

  .contact-me-content {
    a {
      &::before {
        background-color: $blue;
      }
    }
  }

  .project-card {
    border-color: $blue;
  }

  .section-title {
    &::before {
      background-color: $blue;
    }

    &::after {
      background-color: $blue;
    }
  }

  nav,
  .mobile-nav-container {
    a {
      &:hover {
        color: $blue;
      }

      &.router-link-exact-active {
        color: $blue;
      }
    }
  }

  .logo {
    h1 {
      &::before {
        border-top: 4px solid $blue;
        border-left: 4px solid $blue;
      }

      &::after {
        border-bottom: 4px solid $blue;
        border-right: 4px solid $blue;
      }
    }
  }

  .img-wrap {
    &::before {
      border-top: 4px solid $blue;
      border-left: 4px solid $blue;
    }

    &::after {
      border-bottom: 4px solid $blue;
      border-right: 4px solid $blue;
    }
  }

  .video-container {
    border: solid 2px $blue;
    border-radius: 5px;
  }

  .links-container {
    a {
      i {
        color: $blue;
      }
    }
  }

  .project-link {
    &::before {
      background-color: $blue;
    }
  }
}

.yellow {
  ::selection {
    background-color: $yellow;
  }
  .soft-skills-title {
    &::before {
      background-color: $yellow;
    }
  }
  .company {
    color: $yellow;
  }
  .btn {
    background-color: $yellow;
  }

  .skill-type::before {
    background-color: $yellow;
  }

  .colored {
    color: $yellow;
  }

  .card-year {
    &::before {
      background-color: $yellow;
    }
    &::after {
      background-color: $yellow;
    }
  }

  .contact-me-content {
    a {
      &::before {
        background-color: $yellow;
      }
    }
  }

  .project-card {
    border-color: $yellow;
  }

  .section-title {
    &::before {
      background-color: $yellow;
    }
    &::after {
      background-color: $yellow;
    }
  }

  nav,
  .mobile-nav-container {
    a {
      &:hover {
        color: $yellow;
      }
      &.router-link-exact-active {
        color: $yellow;
      }
    }
  }

  .logo {
    h1 {
      &::before {
        border-top: 4px solid $yellow;
        border-left: 4px solid $yellow;
      }
      &::after {
        border-bottom: 4px solid $yellow;
        border-right: 4px solid $yellow;
      }
    }
  }

  .img-wrap {
    &::before {
      border-top: 4px solid $yellow;
      border-left: 4px solid $yellow;
    }
    &::after {
      border-bottom: 4px solid $yellow;
      border-right: 4px solid $yellow;
    }
  }

  .video-container {
    border: solid 2px $yellow;
    border-radius: 5px;
  }

  .links-container {
    a {
      i {
        color: $yellow;
      }
    }
  }

  .project-link {
    &::before {
      background-color: $yellow;
    }
  }
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: $border-color;
}

::-webkit-scrollbar-thumb {
  background: gray;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

// --------------------------------------------------RESPONSIVE--------------------------------------------------

@media screen and (max-width: 1334px) {
  nav {
    display: none;
  }
}
</style>
