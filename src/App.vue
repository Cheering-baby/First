<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 *{
  margin:0;
  padding:0;
 }
  html,body{
    height:100%;
    width:100%;
  }

  #app{
    height:100%;
    width:100%;
    background-image:url('./images/1-1.jpg');
    background-size:100% 100%;
  }
</style>
