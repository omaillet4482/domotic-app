<template>
  <div id="app">
    
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div id="listCard" class="container">
    <ListeTest/>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import ListeTest from './components/ListeTest.vue';

//import Vuex from 'vuex';

@Component({
  components: {
    HelloWorld,
    ListeTest
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}

#listCard {
  max-width: 30rem;
}
</style>
