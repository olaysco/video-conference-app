<template>
  <!-- eslint-disable-next-line -->
<div class="container-fluid d-flex flex-row page-container">      
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
          style="text-align: center; font-weight: 500; color: rgb(255, 255, 255);"
        >
          Your video conferencing Meetings reimagined!
        </h4>
      </div>

      <div
        class="signUpForm w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center"
      >
        <div
          class="signUpForm w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center"
        >
          <span v-if="loginError" class="text-danger mb-1">
            Invalid Username or password, Please try again.
          </span>
          <form id="login-form" class="mySlides">
            <div class="form-group">
              <input
                id="username"
                v-model.trim="$v.form.email.$model"
                type="email"
                name="email"
                placeholder="Email"
                class="form-control bs-input"
                style="width: 300px; border-radius: 20px; padding: 20px;"
                :class="{ 'is-invalid': $v.form.email.$error }"
                autocomplete="off"
              />
              <div class="invalid-feedback">
                Please provide a valid email
              </div>
            </div>
            <div class="form-group">
              <input
                id="password"
                v-model.trim="$v.form.password.$model"
                type="password"
                name="password"
                autocomplete="false"
                placeholder="Password"
                class="form-control bs-input"
                style="width: 300px; border-radius: 20px; padding: 20px;"
                :class="{ 'is-invalid': $v.form.password.$error }"
              />
              <div class="invalid-feedback">
                Please provide a password
              </div>
            </div>
          </form>
        </div>

        <button
          name="signup"
          class="btn btn-primary btn-block col-md-12 col-sm-12 submit bs-input"
          style="color: #FFF; border-radius: 20px;width: 300px "
          @click="login"
        >
          <span v-show="!form.busy">Login</span>
          <span
            v-show="form.busy"
            class="spinner-border spinner-border-sm mr-1"
            role="status"
            aria-hidden="true"
          ></span>
          <span v-show="form.busy">authenticating...</span>
        </button>
      </div>
      <router-link to="/register" class="login-here-link">
        or create account
      </router-link>

      <div class="headText col-sm-12 col-sm-12">
        <p style="text-align: center; color: #fff; font-size: 1rem">
          or Signin using
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

    <div class="rightCon col-md-4 d-none d-md-flex align-items-center ">
      <div>
        <!-- <h4 class="text-light text-center mb-4">
          Your video conferencing Meetings reimagined!
        </h4> -->
        <img src="@/assets/group-bg.svg" alt="group image" class="w-100" />
      </div>
    </div>
  </div>
</template>
<script>
import {
  required,
  minLength,
  between,
  email,
  alphaNum
} from "vuelidate/lib/validators";
import { SERVER_URL } from '../utils/cofig';
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        busy: false
      },
      loginError: false
    };
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  methods: {
    async login() {
      this.loginError = false;
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      this.form.busy = true;
      this.$store.dispatch("togglePageBusy");
      this.$http
        .post(`${SERVER_URL}/api/login`, this.form)
        .then(response => {
          console.log(response);
            // this.$store.dispatch("setUser", response.data.data.user);
            // this.$router.push({path:"host", query: {newuser: true}});
        })
        .catch(e => {
          this.loginError = true;
          console.log(e);
        })
        .finally(e => {
          this.form.busy = false;
          this.$store.dispatch("togglePageBusy");
        });
      await setTimeout(() => {
        this.form.busy = false;
      }, 3000);
    }
  }
};
</script>
<style scoped></style>
