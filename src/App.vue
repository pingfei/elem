<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <!-- <tab-bar></tab-bar> -->
  </div>
</template>

<script>
import TabBar from './components/tabbar'
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style lang='scss'>
html, body, p, h1, h2, h3, h4, h5, h6, ol, ul, li, dl, dt, dd {
  margin: 0;
  padding: 0;
}
ol, ul, li {
  list-style: none;
}
input {
  outline: 0;
  border: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.flex-column {
  flex-direction: column;
}
</style>
