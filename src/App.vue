<template>
  <div id="app">
    <router-view />
    <div class="d-flex justify-content-center align-items-center loader" v-if="pageBusy">
      <div class="spinner-grow" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    pageBusy(){
      return this.$store.state.pageBusy;
    }
  }
}
</script>
<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.loader{
  position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: #14214aba;
    .spinner-grow{
      height: 4rem;
      width: 4rem;
    }
}
</style>
