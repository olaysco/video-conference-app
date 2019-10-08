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
      connections : [],
      socketCount : 0,
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
  sockets: {
    connect: function(){
      console.log('successfully connected');
    },
    userJoined: function([id, count, clients]){
      clients.forEach(socketListId => {
        if(!this.connections[socketListId]){

          this.connections[socketListId] = new RTCPeerConnection(this.config);
          console.log('adding new RTCPeerConnection');
         console.log(this.connections[socketListId]);
          this.connections[socketListId].onicecandidate = ()=>{
            console.log('ice ready');
            if(event.candidate !== null){
              console.log('sending ice');
              this.$socket.emit('signal', socketListId, JSON.stringify({'ice': event.candidate}));
            }
          }
          // this.connections[socketListId].onaddstream = function(){
          //   console.log('stream here');
          //   this.gotRemoteStream(event, socketListId);
          // }
          console.log('checking for :', this.connections[socketListId]);
          this.connections[socketListId].ontrack =  function(event){
            console.log('received stream');
          };

          this.connections[socketListId].onnegotiationneeded = function(e) {
            console.log('negotiation needed', e);
          }

           this.connections[socketListId].onaddstream =  function(event){
            console.log('received stream');
          };
         
          setTimeout(() => {
            // this.connections[socketListId].addStream(this.localStream);
            this.localStream.getTracks().forEach(track => { this.connections[id].addTrack(track, this.localStream); console.log('add track',track)   });
             console.log(this.localStream);
          },1000)
          
        }

        if(count >= 2 && this.connections[id]){
          console.log('attempting to create offer')
          this.connections[id].createOffer(this.sdpConstraints).then((localDesc)=>{
            this.connections[id].setLocalDescription(localDesc).then(()=> { 
              this.$socket.emit('signal', id, JSON.stringify({'sdp': this.connections[id].localDescription}));
            }).catch((err)=> { console.log(`Failed to create session description: ${err.toString()}`); });
            
          }).catch((err)=> {
            console.log(`Failed to create session description: ${err.toString()}`);
          });
        }
      });
    },
    signal: function(data){
      this.gotSignal(data);
    }
  },
  async created(){
    console.log(navigator);
    await navigator.mediaDevices.getUserMedia(this.mediaConstraints).then(this.gotLocalStream);
  },
  methods : {
    async gotLocalStream(stream) {
      console.log('Adding local stream.');
      let video = {
        id: stream.id,
        muted: true
      };
      this.localStream = await stream;
     console.log(this.localStream)
    },
    gotRemoteStream(e){
      // let  video = document.createElement('video'),
      //   div = document.createElement('div');
      
      // video.setAttribute('data-socket', id);
      // video.srcObject = e.streams[0];
      // video.autoplay = true;
      // video.playsinline = true;

      // div.appendChild(video);
      // document.querySelector('.videos').appendChild(div);
      
      
      console.log('pc2 received remote stream');
      console.log(e);
          
    },
    gotSignal([fromId, message]){
      let signal = JSON.parse(message);
      console.log('received signal : ', signal)
      if(fromId != this.$socket.id){
        if(signal.sdp){
          this.connections[fromId].setRemoteDescription(new RTCSessionDescription(signal.sdp)).then(()=>{
            if(signal.sdp.type == 'offer') {
              this.connections[fromId].createAnswer().then((description)=> {
                this.connections[fromId].setLocalDescription(description).then(()=>{
                  this.$socket.emit('signal', fromId, JSON.stringify({'sdp': this.connections[fromId].localDescription}));
                }).catch(e => console.log(e));
              }).catch(e=> console.log(e));
              
            }
          }).catch(e=> console.log(e));
        }

        if(signal.ice){
          console.log('received ice stream');
          this.connections[fromId].addIceCandidate(new RTCIceCandidate(signal.ice)).catch(e => console.log(e))
        }
      }
    }

  },
  watch: {
      localStream : function(newVal, oldVal){
        this.$refs.myVideo.srcObject = newVal
      }
  }
}
</script>