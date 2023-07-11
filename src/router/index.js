import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ContactView from "../views/ContactView.vue";
import WitchWeatherView from "../views/projects/WitchWeatherView.vue";
import DigitalEvent2022View from "../views/projects/DigitalEvent2022View.vue";
import DigitalEvent2023View from "../views/projects/DigitalEvent2023View.vue";
import WeatherItView from "../views/projects/WeatherItView.vue";
import LBView from "../views/projects/LBView.vue";
import VanalyserView from "../views/projects/V-analyserView.vue";
import HomerunView from "../views/projects/HomerunView.vue";
import JungleReflexView from "../views/projects/JungleReflexView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },

  {
    path: "/projects/Jungle-Reflex",
    name: "Jungle-Reflex",
    component: JungleReflexView,
  },

  {
    path: "/projects/Witch-Weather",
    name: "project-Witch-Weather",
    component: WitchWeatherView,
  },

  {
    path: "/projects/Digital-Event-2022",
    name: "projects-Digital-Event-2022",
    component: DigitalEvent2022View,
  },

  {
    path: "/projects/Weather-it",
    name: "projects-Weather-it",
    component: WeatherItView,
  },

  {
    path: "/projects/Digital-Event-2023",
    name: "projects-Digital-Event-2023",
    component: DigitalEvent2023View,
  },

  {
    path: "/projects/L&B",
    name: "projects-L&B",
    component: LBView,
  },

  {
    path: "/projects/V-analyser",
    name: "projects-v-analyser",
    component: VanalyserView,
  },

  {
    path: "/projects/Homerun",
    name: "projects-Homerun",
    component: HomerunView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
