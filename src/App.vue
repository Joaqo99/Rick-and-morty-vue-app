<template>
  <Navegacion />
  <router-view/>
</template>

<script>
import Navegacion from './components/Navegacion.vue'

export default {
  components:{ Navegacion }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: 'Questrial', sans-serif;
}

body{
  background: #001;
}

</style>
