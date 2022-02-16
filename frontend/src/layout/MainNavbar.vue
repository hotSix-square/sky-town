<template>
  <navbar
    v-if="userInfo"
    :position="position"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link class="navbar-brand" to="/"> SKY TOWN </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'login' }">
          <p>{{ userInfo }} 님 환영합니다.</p>
        </router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'logOut' }">
          <p>로그아웃</p>
        </router-link> 
      </li> -->
      <b-nav-item class="link align-self-center" @click="onClickLogout"
        >로그아웃</b-nav-item
      >
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'RHouse' }">
          <n-button
            type="primary"
            size="lg"
            @click="$router.push({ name: 'RHouse' })"
            >매물 추천받기</n-button
          >
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'map' }">
          <p>House</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'question' }">
          <p>Q&A</p>
        </router-link>
      </li>
      <drop-down tag="li" title="more" class="nav-item">
        <nav-link to="/news"> News </nav-link>
        <nav-link to="/dust"> Dust Info </nav-link>
      </drop-down>
    </template>
  </navbar>
  <navbar
    v-else
    :position="position"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link class="navbar-brand" to="/"> SKY TOWN </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'login' }">
          <p>Login</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'register' }">
          <p>Register</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'map' }">
          <p>House</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'question' }">
          <p>Q&A</p>
        </router-link>
      </li>
      <drop-down tag="li" title="more" class="nav-item">
        <nav-link to="/news"> News </nav-link>
        <nav-link to="/dust"> Dust Info </nav-link>
      </drop-down>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from "@/components";
import { mapState, mapActions } from "vuex";

const memberStore = "memberStore";

export default {
  name: "main-navbar",
  computed: {
    ...mapState(memberStore, ["isLogin", "userInfo"]),
  },
  methods: {
    // ...mapMutations(memberStore, ["userLogoutConfirm","SET_IS_LOGIN", "SET_USER_INFO"]),
    ...mapActions(memberStore, ["userLogoutConfirm"]),
    async onClickLogout() {
      await this.userLogoutConfirm();
      // this.SET_IS_LOGIN(false);
      // this.SET_USER_INFO(null);
      // sessionStorage.removeItem("access-token");
      // if (this.$route.path != "/") this.$router.push({ name: "index" });
      this.$router.push({ name: "index" });
    },
  },
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
    position: String,
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
  },
};
</script>

<style scoped></style>
