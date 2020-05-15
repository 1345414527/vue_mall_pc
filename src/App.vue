<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
  import Login from "components/login/Login";

  export default {
    name: 'App',
    components: {
      Login
    }
  }
</script>

<style>
@import "assets/css/base.css";
@import "assets/fonts/iconfont.css";




</style>
