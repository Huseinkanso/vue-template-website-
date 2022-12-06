<template>
  <div id="app">
    <HeaderView/>
  
  <router-view/>
  <FooterPage/>
  <ButtonUp/>
  </div>
</template>
<script>
import HeaderView from './components/HeaderVue.vue';
import FooterPage from '@/components/FooterPage';
import ButtonUp from '@/components/ButtonUp';
export default{
  components:{
    HeaderView,
    FooterPage,
    ButtonUp
  }
}

</script>
<style lang="scss">
#app {
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}


</style>
