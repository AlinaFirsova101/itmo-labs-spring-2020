<template>
  <div id="app">
    <Color
      v-for="(color, index) of colors"
      v-bind:key="index"
      v-bind:color="color"
      v-on:color-change="colorChange"
    />
  </div>
</template>

<script>
import Color from "@/components/Color"

export default {
  name: 'App',
  data() {
    return { colors: ['Red', 'Green', 'Blue'], background: [255, 255, 255] }
  },
  components: {
    Color
  },
  methods:{
    colorChange(color, value) {
      const el = document.getElementById('app');
      this.background[this.colors.indexOf(color)] = value;
      el.setAttribute('style', `background: rgb(${this.background.join(',')})`);
    }
  }
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
