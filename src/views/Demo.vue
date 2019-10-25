<template>
  <div>
    <div class="full-container container-fluid p-0" id="vdconf">

    </div>
  </div>

</template>
<script>
export default {
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("user"));
    }
  },
  created(){
    let id = this.$route.query.meetingID;

    if(id){
    this.$loadScript("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY")
    .then(function() {
      
        var parent = document.getElementById('vdconf');
        var domain = "vdconf.xyz";
        var options = {
            roomName: id,
            width: "100%",
            height: "100%",
            parentNode: parent,
            configOverwrite: {},
            interfaceConfigOverwrite: {
                filmStripOnly: false
            }
        }
        var api = new JitsiMeetExternalAPI(domain, options);
        api.executeCommand('displayName', this.user.username);
        api.executeCommand('email', this.user.email);
    })
    .catch(() => {
      
    });
     }else{
        console.log('jbhjb');
         this.$router.push({ path: "/profile"});
      }
  
  }
}
</script>
<style scoped>
.full-container{
  width:100vw;
  height: 100vh;
}
</style>