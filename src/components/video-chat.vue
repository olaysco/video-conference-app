<template>
  <div class="video-list" > 
    <video autoplay playsinline ref="myVideo" class="localVideo"></video>
      <div v-for="item in videoList"
          v-bind:video="item"
          v-bind:key="item.id"
          class="video-item">
        <video controls autoplay playsinline ref="videos" :height="cameraHeight" :muted="item.muted" :id="item.id"></video>
      </div>
  </div>
</template>
<script>
require("webrtc-adapter");
export default {
  name: 'videoChat',
  data(){
    return {
      cameraHeight: "300px",
      localVideo: null,
      videoList: [],
      canvas: null,
      isChannelReady :false,
      isInitiator : false,
      isStarted : false,
      localStream : null,
      pc : null,
      remoteStream : null,
      turnReady : null,
      mediaConstraints : {
        audio: false,
        video: true
      },
      config : {
        'iceServers': [{
          'urls': 'stun:stun.l.google.com:19302'
        }]
      },
      sdpConstraints : {
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
      }
    }
  },
  async created(){
    console.log(navigator);
    await navigator.mediaDevices.getUserMedia(this.mediaConstraints).then(this.gotLocalStream);
  },
  methods : {
    gotLocalStream(stream) {
      console.log('Adding local stream.');
      let video = {
        id: stream.id,
        muted: true
      };
      this.localStream = stream;
      
    }
  },
  watch: {
      localStream : function(newVal, oldVal){
        this.$refs.myVideo.srcObject = newVal
      }
  }
}
</script>