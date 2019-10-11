<template>
  <div class="video-list" id="meet"> 
    
  </div>
</template>
<script>
require("webrtc-adapter");
export default {
  name: 'videoChat',
  data(){
    return {
    }
  },
  sockets: {
  },
  mounted(){
    
  },
  // async created(){
  //   this.$loadScript("https://meet.jit.si/external_api.js")
  //   .then(() => {
  //     const domain = "meet.jit.si";
  //     const options = {
  //       roomName: 'JitsiMeetAPIExample',
  //       width: "100%",
  //       height: "100%",
  //       parentNode: document.querySelector('#meet')
  //   };
  //   const api = new JitsiMeetExternalAPI(domain, options);
  //   })
  //   .catch(() => {
  //   });
    
  // },
  methods : {
  },
  watch: {
  }
}
</script>