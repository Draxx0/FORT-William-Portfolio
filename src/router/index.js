import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ContactView from "../views/ContactView.vue";
import UnityCavescapeView from "../views/projects/UnityCavescapeView.vue";
import WitchWeatherView from "../views/projects/WitchWeatherView.vue";
import DigitalEvent2022View from "../views/projects/DigitalEvent2022View.vue";
import LBView from "../views/projects/LBView.vue";
import TitanimeView from "../views/projects/TitanimeView.vue";

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
    path: "/projects/Unity-Cave'scape",
    name: "project-Unity-Cave'scape",
    component: UnityCavescapeView,
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
    path: "/projects/L&B",
    name: "projects-L&B",
    component: LBView,
  },

  {
    path: "/projects/Titanime",
    name: "projects-Titanime",
    component: TitanimeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
