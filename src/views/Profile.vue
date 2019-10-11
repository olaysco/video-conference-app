<template>
  <div>
    <div class="container-fluid d-flex flex-column">
      <div class="row nav-section p-2"> 
        <div class="col-md-12 d-flex h-100 align-items-center">
          <div class="user-avatar mr-2">
            <img
              src="../assets/female.jpg"
              alt="user-avatar"
              class="user-avatar-img"
            />
          </div>
          <span>Hi, Mr. Uyi</span>
        </div>
      </div>
      <div class="row body ">
        <div class="actions d-flex">
          <div>
            <div class="join d-flex justify-content-center align-items-center">
              <img src="@/assets/user-con.svg" alt="users" />
            </div>
            <span>Join Meeting</span>
          </div>
          <div>
            <div class="start d-flex justify-content-center align-items-center">
              <img src="@/assets/vid.svg" alt="start" />
            </div>
            <span>Start Meeting</span>
          </div>
          <div>
            <div class="schedule d-flex justify-content-center align-items-center">
              <img src="@/assets/calendar.svg" alt="calendar" />
            </div>
            <span>My Schedule</span>
          </div>
        </div>
      </div>
      <div class="row footer">VideoConf | Version 1.0</div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.container-fluid{
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: #fff;
  justify-content: space-between;
}
.nav-section{
  align-self:flex-start;
  width: 100vw;
  display: block;
}
.body{
  justify-content: center;
}
.actions img{
  width: 40%;
  height: auto;
}
.actions{
  width: 70%;
  justify-content: space-between;
  padding: 4rem 2rem;
  border: 1px #eee solid;
  border-radius: 2rem;
}
.footer{
  background-color: #122383;
  justify-content: center;
  color: #fff;
  padding: 15px;
}
.join{
  background-color: #0089FF;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
}
.start{
  background-color: #2D027E;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
}
.schedule{
  background-color: #FFAF30;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
}
</style>