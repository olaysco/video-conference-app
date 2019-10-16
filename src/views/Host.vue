<template>
  <!-- eslint-disable-next-line -->
<div class="container-fluid d-flex flex-row pl-0 page-container">      
    <div class="leftCon col-md-8 col-sm-12 d-flex">
      <div class="d-flex flex-column m-auto left-container">
        <div
          class="logo col-md-12 col-sm-12 d-flex flex-row justify-content-center"
        >
          <div
            class="circle d-flex flex-column justify-content-center align-items-center mt-4"
          >
            <img src="@/assets/logo.png" alt="logo-img" class="w-100" />
          </div>
        </div>

        <div
          class="signUpForm w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center"
        >
          <div
            v-if="!host"
            class="signUpForm w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center mb-3"
          >
            <form id="book-form" class="mySlides">
              <div class="form-group w-100">
                <div
                  class="input-group mb-3 join-input-group rounded-pill bs-input"
                >
                  <input
                    type="text"
                    class="form-control border-0 rounded-pill"
                    placeholder="Enter meeting ID"
                    aria-label="Enter meeting ID"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-primary rounded-pill px-4"
                      type="button"
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </form>

            <span class="or-host">- or -</span>
          </div>

          <button
            id="enter"
            class="btn btn-primary-inverse btn-block col-md-12 col-sm-12 submit bs-input"
            style=" border-radius: 20px;width: 300px "
            @click="hostMeeting"
          >
            Host a meeting
          </button>
          <p><br /></p>
          <p v-if="host">
            Meeting Url: <a :href="hostUrl">{{ hostUrl }}</a>
          </p>
        </div>
      </div>
    </div>

    <div class="rightCon col-md-4 col-sm-12 d-flex align-items-center">
      <div>
        <h4 class="text-light text-center mb-4">
          Your video conferencing Meetings reimagined!
        </h4>
        <img src="@/assets/group-bg.svg" alt="group image" class="w-100" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      host: false,
      hostUrl: ""
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    randomString(length) {
      let chars =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let result = "";
      for (let i = length; i > 0; --i)
        result += chars[Math.round(Math.random() * (chars.length - 1))];
      return result;
    },
    hostMeeting() {
      this.host = true;
      this.hostUrl = `${this.$store.state.url}/${this.randomString(5)}`;
    }
  }
};
</script>
<style scoped>
.left-container {
  min-height: 400px;
  justify-content: space-evenly;
}
</style>
