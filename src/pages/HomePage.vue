<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld msg="Home Page"/>

  <router-link to="/login">登录页router-link{{count}}</router-link>
  <div @click="toUserPage">用户信息页router-link</div>
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import { useRouter } from 'vue-router'
import { ref } from "vue";

const router = useRouter()

const count = ref(1)
count.value++

const toUserPage = () => {
  router.push('users/123')
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
