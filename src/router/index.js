import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ContactView from "../views/ContactView.vue";
import UnityCavescapeView from "../views/projects/UnityCavescapeView.vue";

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
    name: "projects-Unity-Cave'scape",
    component: UnityCavescapeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
