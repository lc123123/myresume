<template>
  <div class="log" v-bind:class="{active:xxx===1}">
      <form>
          <input type="text">
          <button type="text" value="登录" v-bind:xxx="xxx" v-on:click="xxx=1">登录</button>
      </form>
  </div>
</template>

<script>
    export default{
        data(){
            return{
                xxx: 0
            }
        }
    }
</script>
<style>
    .log.active{
        display: none;
    }
</style>
