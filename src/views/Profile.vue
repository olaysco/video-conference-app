<template>
  <div>
    <div class="container-fluid d-flex flex-column">
      <div class="row nav-section p-2">
        <div class="col-md-12 d-flex h-100 justify-content-between">
          <div class="user-avatar mr-2">
            <img
              src="../assets/female.jpg"
              alt="user-avatar"
              class="user-avatar-img mr-2"
            /><span>Hi, {{user.name}}</span>
          </div>
          
          <router-link to="/logout"><i class="fa fa-power-off"></i> Logout</router-link>
        </div>
      </div>
      <div class="row body ">
        <div class="actions d-flex" v-if="showLess">
          <div class="d-flex flex-column align-items-center">
            <div class="join d-flex justify-content-center align-items-center">
              <img src="@/assets/user-con.svg" alt="users" />
            </div>
            <router-link to="/home/join" 
              >Join a meeting</router-link
            >
          </div>
          <div class="d-flex flex-column align-items-center">
            <div class="start d-flex justify-content-center align-items-center">
              <img src="@/assets/vid.svg" alt="start" />
            </div>
            <router-link to="/home/host">Host Meeting</router-link>
          </div>
          <div class="d-flex flex-column align-items-center">
            <div
              class="schedule d-flex justify-content-center align-items-center"
            >
              <img src="@/assets/calendar.svg" alt="calendar" />
            </div>
            <a href="#" @click="showLess = false">My Schedule</a>
          </div>
        </div>
      </div>
      <div class="row footer">VideoConf | Version 1.0</div>
    </div>

    <!-- Base Modal -->

    <div
      id="customModal"
      class="modal fade "
      tabindex="-1"
      role="dialog"
      aria-labelledby=""
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div v-if="true" class="modal-content border-0 bs-light">
          <div class="modal-body">
            <h6>
              <img src="@/assets/user-con-blue.svg" alt="users" class="h-24p" />
              Enter Meeting ID
            </h6>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Meeting ID"
              />
            </div>
            <button type="submit" class="btn btn-primary float-right">
              Join Meeting
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Base Modal -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLess: true,
    };
  },
  created() { },
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("user"));
    }
  }
};
</script>
<style lang="scss" scoped>
.container-fluid {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: #fff;
  justify-content: space-between;
}
.nav-section {
  align-self: flex-start;
  width: 100vw;
  display: block;
}
.body {
  justify-content: center;
}
.actions img {
  width: 40%;
  height: auto;
}
.actions {
  width: 70%;
  justify-content: space-between;
  padding: 4rem 2rem;
  border: 1px #eee solid;
  border-radius: 2rem;
}
.footer {
  background-color: #122383;
  justify-content: center;
  color: #fff;
  padding: 15px;
}
.join {
  background-color: #0089ff;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  ~ a {
    color: #0089ff;
  }
}
.start {
  background-color: #2d027e;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  ~ a {
    color: #2d027e;
  }
}
.schedule {
  background-color: #ffaf30;
  color: #ffaf30;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  ~ a {
    color: #ffaf30;
  }
}
img.h-24p {
  height: 24px;
  width: auto;
}
.h-fill{
  height: calc( 100vh - 120px );;
}
.join-nav{
  background-color: #0089ff;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
}
</style>
