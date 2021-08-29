import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      title: "Trang chủ",
      iconName: "estate",
      sidebar: true,
      component: require("@/pages/HomePage").default,
    },
    {
      path: "/latest",
      name: "latest",
      title: "Mới nhất",
      iconName: "music",
      sidebar: true,
      component: require("@/pages/LatestPage").default,
    },
    {
      path: "/genres",
      name: "genres",
      title: "Thể loại",
      iconName: "apps",
      sidebar: true,
      component: require("@/pages/LatestPage").default,
    },
    {
      path: "/top",
      name: "top",
      title: "Top 100",
      iconName: "star",
      sidebar: true,
      component: require("@/pages/LatestPage").default,
    },
    {
      path: "/album/:id",
      name: "album",
      component: require("@/pages/AlbumPage").default,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
