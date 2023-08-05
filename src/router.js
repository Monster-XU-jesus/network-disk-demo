import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(`./components/HelloWorld.vue`),
  },
  {
    path: "/main",
    name: "DiskWindow",
    component: () => import(`./views/DiskWindow.vue`),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
