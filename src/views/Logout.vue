<template>
  <div class="text-white">
    Logout
  </div>

</template>
<script>
import { SERVER_URL } from '../utils/cofig';
export default {
  data() {
    return {}
  },
  created: async function(){
    console.log("cretaed")
    const token = localStorage.getItem("token");
    await this.$http
      .get(`${SERVER_URL}/api/logout`, {
        "headers":{"X-access-token": token}
      })
      .then(response => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.$router.push("/");
        console.log('logout')
      }).catch(e=>{
        console.log(e);
      })
  }
}
</script>
<style scoped>
</style>