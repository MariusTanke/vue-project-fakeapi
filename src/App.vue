<template>
  <div>
    <div id="nav">
      <router-link to="/tabla">Lista de contactos</router-link> |
      <router-link to="/agregar">Añadir contactos</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
      #app {
            font-family: "Avenir", Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;
            margin-top: 60px;
      }
</style>
