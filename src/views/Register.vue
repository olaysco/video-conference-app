<template>
  <!-- eslint-disable-next-line -->
<div class="container-fluid d-flex flex-row page-container ">      
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
        class="signUpForm w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center text-white"
      >
        <span v-if="$v.$error">
          Ensure all fields are filled correctly
        </span>
        <span v-if="registerError" v-text="registerError"></span>
        <div
          v-if="!showSecondForm"
          class="signUpForm w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center"
        >
          <form id="book-form" class="mySlides">
            <div class="form-group">
              <input
                id="title"
                v-model.trim="$v.form.name.$model"
                type="text"
                name="nameName"
                placeholder="Organization name"
                class="form-control bs-input"
                style="width: 300px; border-radius: 20px; padding: 20px;"
                :class="{ 'is-invalid': $v.form.name.$error }"
              />
              <div class="invalid-feedback">
                Field must contain at least 2 characters
              </div>
            </div>
            <div class="form-group">
              <input
                id="author"
                v-model.trim="$v.form.email.$model"
                type="text"
                name="workEmail"
                placeholder="Work email"
                class="form-control bs-input"
                style="width: 300px; border-radius: 20px; padding: 20px;"
                :class="{ 'is-invalid': $v.form.email.$error }"
              />
              <div class="invalid-feedback">
                Please provide a valid email
              </div>
            </div>
          </form>
        </div>

        <div
          v-if="showSecondForm"
          class="signUpForm2 w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center"
        >
          <form id="book-form" class="mySlides">
            <div class="form-group">
              <input
                id="title"
                v-model="$v.form.username.$model"
                type="text"
                name="username"
                placeholder="Username"
                class="form-control bs-input"
                style="width: 300px; border-radius: 20px; padding: 20px;"
                :class="{ 'is-invalid': $v.form.username.$error }"
              />
              <div class="invalid-feedback">
                Username must contain at least 2 characters
              </div>
            </div>
            <div class="form-group">
              <input
                id="author"
                v-model="$v.form.password.$model"
                type="password"
                name="password"
                placeholder="Password"
                class="form-control bs-input"
                style="width: 300px; border-radius: 20px; padding: 20px;"
                :class="{ 'is-invalid': $v.form.password.$error }"
              />
              <div class="invalid-feedback">
                Password must be alphanumeric and min length is 7
              </div>
              <span class="d-flex flex-row mt-2 ml-4"
                ><input
                  v-model="form.agree"
                  type="checkbox"
                  name="agree"
                  style="margin-top: 6px"
                />
                <a href="#"
                  ><p style="color: #797979; margin-left: 12px;">
                    I agree to privacy policies
                  </p></a
                ></span
              >
            </div>
          </form>
          <button
            name="previous"
            class="btn btn-default"
            @click="showSecondForm = false"
          >
            previous
          </button>
        </div>

        <button
          name="signup"
          class="btn btn-primary btn-block col-md-12 col-sm-12 submit bs-input"
          style="color: #FFF; border-radius: 20px;width: 300px "
          @click="progressForm"
        >
          <span v-show="!form.busy">{{
            showSecondForm ? "submit" : "next"
          }}</span>
          <span
            v-show="form.busy"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span v-show="form.busy">Creating account...</span>
        </button>
        <router-link to="/login" class="login-here-link">
          or Login here
        </router-link>
      </div>

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
        name: "",
        email: "",
        password: "",
        username: "",
        agree: "",
        busy: false
      },
      showSecondForm: false,
      registerError: false
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email
      },
      username: {
        required,
        between: minLength(2)
      },
      password: {
        required,
        alphaNum,
        minLength: minLength(7)
      }
    }
  },
  methods: {
    async register() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      this.form.busy = true;
      this.$store.dispatch("togglePageBusy");
      this.registerError = false;
      this.$http
        .post(`${SERVER_URL}/api/register`, this.form)
        .then(response => {
          if (response.ok) {
            alert("registeration successful");
            let k = {user: response.body.data.user, token: response.body.data.token};
            this.$store.dispatch("setUser", k);
            this.$router.push({ path: "profile", query: { newuser: true } });
            console.log(k);
          }
        })
        .catch(e => {
          this.registerError = e.body.error;
          alert(e);
        })
        .finally(e => {
          this.form.busy = false;
          this.$store.dispatch("togglePageBusy");
        });
    },
    progressForm() {
      if (this.showSecondForm) {
        this.register();
      } else {
        this.showSecondForm = true;
      }
    }
  }
};
</script>
<style scoped></style>
