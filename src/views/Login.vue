<template>
  <!-- eslint-disable-next-line -->
<div class="container d-flex flex-row mt-4 pl-0 page-container">      
    <div class="leftCon col-md-8 col-sm-12">
      <div
        class="logo col-md-12 col-sm-12 d-flex flex-row justify-content-center"
      >
        <div
          class="circle d-flex flex-column justify-content-center align-items-center mt-4"
        >
          <img src="@/assets/logo.png" alt="logo-img" class="w-100" />
        </div>
      </div>
      <div class="headText col-sm-12 col-sm-12 pt-4">
        <h4
          style="text-align: center; font-weight: 500; color: rgb(112, 112, 112);"
        >
          Login to your VDConf Account
        </h4>
        <router-link to="/register" class="login-here-link">
          or create account
        </router-link>
      </div>

      <div
        class="signUpForm w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center"
      >
        <div
          class="signUpForm w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center"
        >
          <form id="book-form" class="mySlides">
            <div class="form-group">
              <input
                id="title"
                type="text"
                name="userName"
                placeholder="Username"
                class="form-control bs-input"
                style="width: 300px; border-radius: 20px; padding: 20px;"
              />
            </div>
            <div class="form-group">
              <input
                id="author"
                type="text"
                name="password"
                placeholder="Password"
                class="form-control bs-input"
                style="width: 300px; border-radius: 20px; padding: 20px;"
              />
            </div>
          </form>
        </div>

        <input
          id="enter"
          type=""
          value="Login"
          name="signup"
          class="btn btn-primary btn-block col-md-12 col-sm-12 submit bs-input"
          style="background-color: #6C63FE; color: #FFF; border-radius: 20px;width: 300px "
          onclick=""
        />
      </div>

      <div class="headText col-sm-12 col-sm-12">
        <p style="text-align: center; color: #797979; font-size: 1rem">
          or Signup with
        </p>
        <div
          class="logo col-md-12 col-sm-12 d-flex flex-row justify-content-center"
        >
          <div
            class="signin-icon d-flex flex-column justify-content-center align-items-center mt-4"
          >
            <img
              src="@/assets/google.svg"
              alt="google-sign-in"
              class="signin-icon"
            />
          </div>
          &nbsp;
          <div
            class="signin-icon d-flex flex-column justify-content-center align-items-center mt-4"
          >
            <img
              src="@/assets/fb.svg"
              alt="google-sign-in"
              class="signin-icon"
            />
          </div>
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
export default {};
</script>
<style scoped></style>
