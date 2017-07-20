<template>
  <div id="app">
    <Signin></Signin>
  </div>
</template>

<script>
import Signin from './components/SignIn'
export default {
  name: 'app',
  components:{ Signin }
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
