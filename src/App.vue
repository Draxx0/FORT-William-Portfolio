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
        ><i class="fa-solid fa-folder-tree"></i>Projets</router-link
      >
      <router-link to="/contact"
        ><i class="fa-solid fa-envelope"></i>Contact</router-link
      >
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap");
@import "@/styles/variables.scss";

body {
  padding: 0;
  margin: 0;

  &::before,
  ::after {
    box-sizing: border-box;
  }
}

#app {
  display: flex;
  width: 100%;
  height: 100vh;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 20px 0;
  color: $light-mode-text-color;
  border-right: 0.5px solid $border-color;
  background-color: $light-mode-nav-background-color;

  .logo {
    margin: 20%;
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
    gap: 20px;
    font-family: "Montserrat Alternates", sans-serif;
  }

  a {
    position: relative;
    font-weight: semi-bold;
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
</style>
