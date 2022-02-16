import Vue from "vue";
import Router from "vue-router";
import Index from "./pages/Index.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import House from "./pages/House.vue";
import RHouse from "./pages/RHouse.vue";
import QnA from "./pages/QnA.vue";
import CreateForm from "./pages/components/qna/CreateForm.vue";
import News from "./pages/News.vue";
import Dust from "./pages/Dust.vue";
import Chat from "./pages/Chat.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import LoginOk from "./pages/LoginOk.vue";
import KakaoMap from "./pages/components/house/KakaoMap.vue";
import AptTable from "./pages/components/house/AptTable.vue";
import SideTab from "./pages/components/house/SideTab.vue";
// import store from "./store/index"
import store from "./store/modules/spinnerStore";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400, position: "fixed" },
      },
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400, position: "fixed" },
      },
    },
    {
      path: "/register",
      name: "register",
      components: { default: Register, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400, position: "fixed" },
      },
    },
    {
      path: "/house",
      name: "house",
      components: { default: House, header: MainNavbar },
      children: [
        {
          path: "",
          name: "map",
          components: { default: KakaoMap },
        },
        {
          path: ":code",
          name: "apt",
          components: { default: KakaoMap, side: AptTable },
        },
        {
          path: ":code",
          name: "grpApt",
          components: {
            default: KakaoMap,
            side: SideTab,
          },
          props: (route) => ({ query: route.query.sidoName }),
        },
      ],
      props: {
        header: { colorOnScroll: 0, position: "relative" },
      },
    },
    {
      path: "/recommendhouse",
      name: "RHouse",
      components: { default: RHouse, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, position: "fixed" },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/question",
      name: "question",
      components: { default: QnA, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400, position: "fixed" },
      },
    },
    {
      path: "/createquestion",
      name: "questionForm",
      components: {
        default: CreateForm,
        header: MainNavbar,
      },
      props: {
        header: { colorOnScroll: 400, position: "fixed" },
      },
    },
    {
      path: "/news",
      name: "news",
      components: { default: News, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, position: "fixed" },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/dust",
      name: "dust",
      components: { default: Dust, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, position: "fixed" },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/chat",
      name: "chat",
      components: { default: Chat, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, position: "fixed" },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/loginOk",
      name: "LoginOk",
      components: { default: LoginOk, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, position: "fixed" },
        footer: { backgroundColor: "black" },
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  beforeEach: (next) => {
    store.commit("startSpinner");
    setTimeout(() => {
      next();
    }, 3);
  },
  afterEach: () => {
    store.commit("endSpinner");
  },
});
