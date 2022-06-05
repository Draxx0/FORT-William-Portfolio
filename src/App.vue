<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
  />
  <nav>
    <div class="logo">
      <h1><span>W</span>illiam</h1>
    </div>
    <div class="menu">
      <router-link to="/"
        ><i class="fa-solid fa-house"></i> Accueil</router-link
      >
      <router-link to="/about"
        ><i class="fa-solid fa-user-graduate"></i>A propos</router-link
      >
      <router-link to="/projects"
        ><i class="fa-solid fa-folder-open"></i>Projets</router-link
      >
      <router-link to="/contact"
        ><i class="fa-solid fa-envelope"></i>Contact</router-link
      >
    </div>
  </nav>
  <router-view />
</template>

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

#app {
  display: flex;
  width: 100%;
  height: 100%;
  margin-left: 400px;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  padding: 20px 0;
  border-right: 0.5px solid $border-color;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;

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
        border-top: 4px solid $green;
        border-left: 4px solid $green;
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
        border-bottom: 4px solid $green;
        border-right: 4px solid $green;
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

    &:hover {
      color: $green;
    }

    &.router-link-exact-active {
      color: $green;
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
    background-color: $green;
  }

  &::after {
    position: absolute;
    left: 0;
    bottom: -25px;
    content: "";
    width: 10%;
    height: 6px;
    background-color: $green;
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

  .themes-menu-wrap,
  .mode-menu-wrap {
    background-color: $light-mode-nav-background-color;
    color: $light-mode-text-color;
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

      &.router-link-exact-active {
        color: $green;
      }
    }
  }

  .themes-menu-wrap,
  .mode-menu-wrap {
    background-color: $dark-mode-nav-background-color;
    transition: 0.5s ease-in-out;

    i {
      color: $dark-mode-text-color;
    }
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
}

//----------------------------------------------------- THEME COLORS -----------------------------------------------------

.green {
  color: $green;
}

.background-green {
  background-color: $green;
}

.orange {
  color: $orange;
}

.background-orange {
  background-color: $orange;
}

.pink {
  color: $pink;
}

.background-pink {
  background-color: $pink;
}

.red {
  color: $red;
}

.background-red {
  background-color: $red;
}

.blue {
  color: $blue;
}

.background-blue {
  background-color: $blue;
}
</style>
