<template>
  <div id="app">
    <h1>ToDo Application</h1>
    <hr>
    <ToDo/>
  </div>
</template>

<script>
import ToDo from '@/components/ToDo'


export default {
  name: 'App',
  components: {
    ToDo
  },
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
