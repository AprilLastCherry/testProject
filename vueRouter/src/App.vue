<template>
  <div id="app">
    <img src="./assets/logo.png">
    <header>
      <!-- <router-link to="/home">Home</router-link> -->
      <p @click="toHome">click</p>
      <router-link to="/about">About</router-link>
      <router-link to="/user/123">User123</router-link>
      <router-link to="/user/456">User456</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
      args:{
        a:"afgddffd",
        b:"b",
        c:123
      }
    }
  },
  methods:{
    toHome(){
      this.$router.push({path:'/home',query:this.args})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
