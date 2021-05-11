import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "@/views/Layout";
import Summoner from "@/views/Summoner";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "Summoner",
    },
  },
  {
    path: "/summoner/:userName",
    component: Layout,
    name: "Summoner",
    children: [
      {
        path: "",
        component: Summoner,
      },
    ],
  },
  {
    path: "*",
    redirect: {
      name: "Summoner",
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
