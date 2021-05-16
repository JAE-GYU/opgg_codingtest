import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "@/views/Layout";
import NoSummoner from "@/views/NoSummoner";
import Summoner from "@/views/Summoner";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "NoSummoner",
    },
  },
  {
    path: "/summoner",
    component: Layout,
    children: [
      {
        path: "",
        redirect: {
          name: "NoSummoner",
        },
      },
      {
        path: "/",
        name: "NoSummoner",
        component: NoSummoner,
      },
      {
        path: ":summonerName",
        name: "Summoner",
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
