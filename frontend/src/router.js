import { createRouter, createWebHistory } from "vue-router";
import MainSection from "./components/MainSection.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue"; // Import the Contact component

const routes = [
  { path: "/", component: MainSection },
  { path: "/about", component: About },
  { path: "/contact", component: Contact }, // Add the route for the Contact component
  // Other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
