
import {createRouter, createWebHashHistory} from "vue-router";

const Login = () => import("../views/Login/index.vue");

const routes = [
  
  {
    path: "/Login",
    name:"Login",
    component: Login,
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
export default router
