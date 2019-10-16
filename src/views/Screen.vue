<template>
  <!-- eslint-disable-next-line -->
    <div class="container-fluid">
      <tooltip/>
    <div class="row">
      <div class="col-md-12 h-100v p-0">
        <div class="top-element">
          <div class="top-bar">
            <!--<div class="user-avatar">
              <img
                src="../assets/female.jpg"
                alt="user-avatar"
                class="user-avatar-img"
              />
            </div>
             <div class="input-group border rounded-pill p-1 custom-search">
              <div class="input-group-prepend border-0">
                <button id="button-addon4" type="button" class="btn btn-link">
                  <i class="fa fa-search"></i>
                </button>
              </div>
              <input
                type="search"
                placeholder="Search people"
                aria-describedby="button-addon4"
                class="form-control bg-none border-0"
              />
            </div>  -->
            <div class="controls">
              <ul class="control-list">
                <li  v-popover:tooltip="'Settings'">
                  <i class="fa fa-cog faa-spin animated-hover"></i>
                </li>
                <li id="setup-new-room" v-popover:tooltip="'start call'">
                  <button class="btn" @click="initVideo" :disabled="isConfStarted"><i class="fas fa-video"></i></button>
                </li>
                <li id="end-call" v-popover:tooltip="'End call'"  tabindex="0">
                  <button class="btn" @click="disconnect" style="pointer-events: none;" :disabled="!isConfStarted"><i class="fas fa-phone"></i></button>
                </li>
                <li v-popover:tooltip="'apply filter'"><i class="fas fa-magic"></i></li>
                <li v-popover:tooltip="'Mute or Unmute mic'">
                  <button class="btn" @click="muteLocalTrack" ><i :class="{'fas fa-microphone-alt-slash':isMuted, 'fas fa-microphone-alt':!isMuted}"></i></button>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom-bar">
            <div class="track-list" @click="setMainTrack">
             
              <!-- <div class="track" v-for="(item,i) in trackList" :key="i" :id="item.id">

              </div> -->
            </div>
            <!-- <div
              class="side-chat d-none d-md-block"
              :class="{ 'body-open': chatShow }"
            >
              <div class="side-chat-head">
                <span
                  class="side-chat-body-toggle"
                  @click="chatShow = !chatShow"
                  >Everyone <i class="fa fa-chevron-down"></i></span
                ><span><i class="fa fa-ellipsis-h"></i></span>
              </div>
              <div
                class="side-chat-body hide"
                :class="{ hide: !chatShow, show: chatShow }"
              >
                <div class="messages">
                  <div class="d-flex justify-content-start mb-4">
                    <div class="img_cont_msg">
                      <img
                        src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                        class="rounded-circle user_img_msg"
                      />
                    </div>
                    <div class="msg_cotainer">
                      Hello, Kingsley?
                      <span class="msg_time">8:40 AM, Today</span>
                    </div>
                  </div>
                  <div class="d-flex justify-content-end mb-4">
                    <div class="msg_cotainer_send">
                      Am good Lawrence the law, you?
                      <span class="msg_time_send">8:55 AM, Today</span>
                    </div>
                    <div class="img_cont_msg">
                      <img
                        src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                        class="rounded-circle user_img_msg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="side-chat-form-area">
                <form class="chat-form">
                  <textarea
                    class="form-control rounded-pill"
                    placeholder="Send a chat..."
                    rows="1"
                    style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 37px;"
                  ></textarea>
                  <div class="chat-form-buttons">
                    <div class="emoji">
                      <img src="@/assets/emoji.svg" alt="plane" />
                    </div>
                    <div class="custom-file custom-file-naked">
                      <input
                        id="customFile"
                        type="file"
                        class="custom-file-input d-none"
                      />
                      <label
                        class="custom-file-label file-label"
                        for="customFile"
                      >
                        <img src="@/assets/paper-clip.svg" alt="paper clip" />
                      </label>
                    </div>
                    <div class="btn-send">
                      <a href="">
                        <img src="@/assets/plane.svg" alt="plane" />
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div> -->
          </div>
        </div>
        <div id="videos-container" class="grid-container">
          <videoChat> </videoChat>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import videoChat from "../components/video-chat";
import {bridge} from '../utils/bridge';
export default {
  mixins: [bridge],
  components: {
    videoChat: videoChat
  },
  data() {
    return {
      chatShow: false,
      roomId: "public-room"
    };
  },
  created() {},
  methods: {}
};
</script>
