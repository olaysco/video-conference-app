/* global $, JitsiMeetJS */
export const bridge = {
  data() {
    return {
      options: {
        hosts: {
          domain: "vdconf.xyz",
          muc: "conference.vdconf.xyz" // FIXME: use XEP-0030
        },
        bosh: "//vdconf.xyz/http-bind", // FIXME: use xep-0156 for that

        // The name of client node advertised in XEP-0115 'c' stanza
        clientNode: "http://vdconf.xyz"
      },
      confOptions: {
        openBridgeChannel: true
      },
      connection: null,
      isJoined: false,
      room: null,
      trackList: [],
      isVideo: false,
      isConfStarted: false,
      localTracks: [],
      isMuted: false,
      remoteTracks: {},
      initOptions: {
        disableAudioLevels: true,

        // The ID of the jidesha extension for Chrome.
        desktopSharingChromeExtId: "mbocklcggfhnbahlnepmldehdhpjfcjp",

        // Whether desktop sharing should be disabled on Chrome.
        desktopSharingChromeDisabled: false,

        // The media sources to use when using screen sharing with the Chrome
        // extension.
        desktopSharingChromeSources: ["screen", "window"],

        // Required version of Chrome extension
        desktopSharingChromeMinExtVersion: "0.1",

        // Whether desktop sharing should be disabled on Firefox.
        desktopSharingFirefoxDisabled: true
      }
    };
  },
  methods: {
    /**
     * Handles local tracks.
     * @param tracks Array with JitsiTrack objects
     */
    onLocalTracks(tracks) {
      this.localTracks = tracks;
      this.trackList.push({ id: "local", name: "me" });
      for (let i = 0; i < this.localTracks.length; i++) {
        this.localTracks[i].addEventListener(
          JitsiMeetJS.events.track.TRACK_AUDIO_LEVEL_CHANGED,
          audioLevel => console.log(`Audio Level local: ${audioLevel}`)
        );
        this.localTracks[i].addEventListener(
          JitsiMeetJS.events.track.TRACK_MUTE_CHANGED,
          () => console.log("local track muted")
        );
        this.localTracks[i].addEventListener(
          JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED,
          () => console.log("local track stoped")
        );
        this.localTracks[i].addEventListener(
          JitsiMeetJS.events.track.TRACK_AUDIO_OUTPUT_CHANGED,
          deviceId =>
            console.log(`track audio output device was changed to ${deviceId}`)
        );
        if (this.localTracks[i].getType() === "video") {
          $("#meet").append(`<video autoplay='1' id='localVideo${i}' />`);

          $(".track-list ").html(
            ` <div class="track" id="local"> <video autoplay='1' data-owner="local" id='smallLocalVideo${i}' /> </div>`
          );
          this.localTracks[i].attach($(`#smallLocalVideo${i}`)[0]);

          this.localTracks[i].attach($(`#localVideo${i}`)[0]);
        } else {
          $("body").append(
            `<audio autoplay='1' muted='true' id='localAudio${i}' />`
          );
          this.localTracks[i].attach($(`#localAudio${i}`)[0]);
        }
        if (this.isJoined) {
          this.room.addTrack(this.localTracks[i]);
        }
      }
    },
    /**
     * Handles remote tracks
     * @param track JitsiTrack object
     */
    onRemoteTrack(track) {
      if (track.isLocal()) {
        return;
      }
      const participant = track.getParticipantId();

      if (!this.remoteTracks[participant]) {
        this.remoteTracks[participant] = [];
      }
      const idx = this.remoteTracks[participant].push(track);

      track.addEventListener(
        JitsiMeetJS.events.track.TRACK_AUDIO_LEVEL_CHANGED,
        audioLevel => console.log(`Audio Level remote: ${audioLevel}`)
      );
      track.addEventListener(JitsiMeetJS.events.track.TRACK_MUTE_CHANGED, () =>
        console.log("remote track muted")
      );
      track.addEventListener(JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED, () =>
        console.log("remote track stoped")
      );
      track.addEventListener(
        JitsiMeetJS.events.track.TRACK_AUDIO_OUTPUT_CHANGED,
        deviceId =>
          console.log(`track audio output device was changed to ${deviceId}`)
      );
      const id = participant + track.getType() + idx;

      if (track.getType() === "video") {
        // $("body").append(
        //   `<video autoplay='1' id='${participant}video${idx}' />`
        // );
        $(".track-list").append(
          `<div class="track" id="${participant}"> <video autoplay='1' data-owner="${participant}" id='smallRemoteVideo${idx}' /> </div>`
        );
        track.attach($(`#smallRemoteVideo${idx}`)[0]);
      } else {
        $("body").append(
          `<audio autoplay='1' id='${participant}audio${idx}'/>`
        );
        track.attach($(`#${id}`)[0]);
      }
    },
    /**
     * That function is executed when the conference is joined
     */
    onConferenceJoined() {
      console.log("conference joined!");
      this.isJoined = true;
      for (let i = 0; i < this.localTracks.length; i++) {
        this.room.addTrack(this.localTracks[i]);
      }
    },
    /**
     *
     * @param id
     */
    onUserLeft(id) {
      console.log("user left");
      if (!this.remoteTracks[id]) {
        return;
      }
      const tracks = this.remoteTracks[id];

      for (let i = 0; i < tracks.length; i++) {
        tracks[i].detach($(`#${id}${tracks[i].getType()}`));
      }
    },
    /**
     * That function is called when connection is established successfully
     */
    onConnectionSuccess() {
      console.log("connected successsfully");
      this.isConfStarted = true;
      console.log(this.isConfStarted);
      this.room = this.connection.initJitsiConference(
        "conference",
        this.confOptions
      );
      this.room.on(
        JitsiMeetJS.events.conference.TRACK_ADDED,
        this.onRemoteTrack
      );
      this.room.on(JitsiMeetJS.events.conference.TRACK_REMOVED, track => {
        console.log(`track removed!!!${track}`);
      });
      this.room.on(
        JitsiMeetJS.events.conference.CONFERENCE_JOINED,
        this.onConferenceJoined
      );
      this.room.on(JitsiMeetJS.events.conference.USER_JOINED, id => {
        console.log("user join");
        this.remoteTracks[id] = [];
      });
      this.room.on(JitsiMeetJS.events.conference.USER_LEFT, this.onUserLeft);
      this.room.on(JitsiMeetJS.events.conference.TRACK_MUTE_CHANGED, track => {
        console.log(`${track.getType()} - ${track.isMuted()}`);
      });
      this.room.on(
        JitsiMeetJS.events.conference.DISPLAY_NAME_CHANGED,
        (userID, displayName) => console.log(`${userID} - ${displayName}`)
      );
      this.room.on(
        JitsiMeetJS.events.conference.TRACK_AUDIO_LEVEL_CHANGED,
        (userID, audioLevel) => console.log(`${userID} - ${audioLevel}`)
      );
      this.room.on(JitsiMeetJS.events.conference.PHONE_NUMBER_CHANGED, () =>
        console.log(
          `${this.room.getPhoneNumber()} - ${this.room.getPhonePin()}`
        )
      );
      this.room.join();
      this.room.setReceiverVideoConstraint(360);
    },
    /**
     * This function is called when the connection fail.
     */
    onConnectionFailed() {
      console.error("Connection Failed!");
    },
    /**
     * This function is called when the connection fail.
     */
    onDeviceListChanged(devices) {
      console.info("current devices", devices);
    },
    /**
     * That function  that switches current large video
     */
    switchVideo() {
      // eslint-disable-line no-unused-vars
      this.isVideo = !this.isVideo;
      if (this.localTracks[1]) {
        this.localTracks[1].dispose();
        this.localTracks.pop();
      }
      JitsiMeetJS.createLocalTracks({
        devices: [this.isVideo ? "video" : "desktop"]
      })
        .then(tracks => {
          this.localTracks.push(tracks[0]);
          this.localTracks[1].addEventListener(
            JitsiMeetJS.events.track.TRACK_MUTE_CHANGED,
            () => console.log("local track muted")
          );
          this.localTracks[1].addEventListener(
            JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED,
            () => console.log("local track stoped")
          );
          this.localTracks[1].attach($("#localVideo1")[0]);
          this.room.addTrack(this.localTracks[1]);
        })
        .catch(error => console.log(error));
    },
    /**
     * {}
     * @param selected
     */
    changeAudioOutput(selected) {
      // eslint-disable-line no-unused-vars
      JitsiMeetJS.mediaDevices.setAudioOutputDevice(selected.value);
    },
    /**
     * This function is called when we disconnect.
     */
    disconnect() {
      console.log("disconnect!");
      this.isConfStarted = false;
      this.connection.removeEventListener(
        JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,
        this.onConnectionSuccess
      );
      this.connection.removeEventListener(
        JitsiMeetJS.events.connection.CONNECTION_FAILED,
        this.onConnectionFailed
      );
      this.connection.removeEventListener(
        JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,
        this.disconnect
      );
    },
    /**
     * disposes all tracks when window close or exit
     */
    unload() {
      for (let i = 0; i < this.localTracks.length; i++) {
        this.localTracks[i].dispose();
      }
      this.room.leave();
      this.connection.disconnect();
    },
    initVideo() {
      JitsiMeetJS.init(this.initOptions);
      console.log("init success");
      this.connection = new JitsiMeetJS.JitsiConnection(
        null,
        null,
        this.options
      );
      this.connection.addEventListener(
        JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,
        this.onConnectionSuccess
      );
      this.connection.addEventListener(
        JitsiMeetJS.events.connection.CONNECTION_FAILED,
        this.onConnectionFailed
      );
      this.connection.addEventListener(
        JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,
        this.disconnect
      );

      this.connection.connect();

      JitsiMeetJS.mediaDevices.addEventListener(
        JitsiMeetJS.events.mediaDevices.DEVICE_LIST_CHANGED,
        this.onDeviceListChanged
      );
      JitsiMeetJS.createLocalTracks({ devices: ["audio", "video"] })
        .then(this.onLocalTracks)
        .catch(error => {
          throw error;
        });
      if (JitsiMeetJS.mediaDevices.isDeviceChangeAvailable("output")) {
        JitsiMeetJS.mediaDevices.enumerateDevices(devices => {
          const audioOutputDevices = devices.filter(
            d => d.kind === "audiooutput"
          );

          if (audioOutputDevices.length > 1) {
            $("#audioOutputSelect").html(
              audioOutputDevices
                .map(d => `<option value="${d.deviceId}">${d.label}</option>`)
                .join("\n")
            );
            $("#audioOutputSelectWrapper").show();
          }
        });
      }
    },
    muteLocalTrack() {
      if (this.isMuted) {
        for (let i = 0; i < this.localTracks.length; i++) {
          if (this.localTracks[i].getType() === "audio") {
            this.localTracks[i].unmute();
          }
        }
      } else {
        for (let i = 0; i < this.localTracks.length; i++) {
          if (this.localTracks[i].getType() === "audio") {
            this.localTracks[i].mute();
          }
        }
      }
      this.isMuted = !this.isMuted;
    },
    setMainTrack(event) {
      if (event.target.nodeName == "VIDEO") {
        let owner = event.target.dataset.owner;
        if (owner == "local") {
          for (let i = 0; i < this.localTracks.length; i++) {
            if (this.localTracks[i].getType() === "video") {
              this.localTracks[i].attach($(`#localVideo${i}`)[0]);
            } else {
              this.localTracks[i].attach($(`#localAudio${i}`)[0]);
            }
          }
        } else {
          for (let i = 0; i < this.remoteTracks[owner].length; i++) {
            if (this.remoteTracks[owner][i].getType() === "video") {
              this.remoteTracks[owner][i].attach($(`#localVideo${i}`)[0]);
            } else {
              this.remoteTracks[owner][i].attach($(`#localAudio${i}`)[0]);
            }
          }
        }
      }
    }
  },
  created() {
    this.isVideo = true;
    $(window).bind("beforeunload", this.unload);
    $(window).bind("unload", this.unload);
  }
};

// JitsiMeetJS.setLogLevel(JitsiMeetJS.logLevels.ERROR);
