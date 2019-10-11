<template>
  <!-- eslint-disable-next-line -->
<div class="container d-flex flex-row mt-4 page-container">      
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
          Create your VDConf Account
        </h4>
        <router-link to="/login" class="login-here-link">
          or Login here
        </router-link>
      </div>

      <div
        class="signUpForm w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center"
      >
        <span v-if="$v.$error">
          Ensure all fields are filled correctly
        </span>
        <div
          class="signUpForm w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center" v-if="!showSecondForm"
        >
          <form id="book-form" class="mySlides">
            <div class="form-group">
              <input
                id="title"
                type="text"
                name="organisationName"
                v-model.trim="$v.form.organisation.$model"
                placeholder="Organization name"
                class="form-control bs-input"
                style="width: 300px; border-radius: 20px; padding: 20px;"
                :class="{'is-invalid':$v.form.organisation.$error}"
              />
              <div 
                class="invalid-feedback"
              >
                Field must contain at least 2 characters 
              </div>
            </div>
            <div class="form-group">
              <input
                id="author"
                type="text"
                name="workEmail"
                v-model.trim="$v.form.email.$model"
                placeholder="Work email"
                class="form-control bs-input"
                style="width: 300px; border-radius: 20px; padding: 20px;"
                :class="{'is-invalid':$v.form.email.$error}"
              />
              <div 
                class="invalid-feedback"
              >
                Please provide a valid email 
              </div>
            </div>
          </form>
        </div>

        <div
          class="signUpForm2 w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center" v-if="showSecondForm"
        >
          <form id="book-form" class="mySlides">
            <div class="form-group">
              <input
                id="title"
                type="text"
                name="username"
                v-model="$v.form.username.$model"
                placeholder="Username"
                class="form-control bs-input"
                style="width: 300px; border-radius: 20px; padding: 20px;"
                :class="{'is-invalid':$v.form.username.$error}"
              />
              <div 
                class="invalid-feedback"
              >
                Username must contain at least 2 characters 
              </div>
            </div>
            <div class="form-group">
              <input
                id="author"
                type="password"
                name="password"
                v-model="$v.form.password.$model"
                placeholder="Password"
                class="form-control bs-input"
                style="width: 300px; border-radius: 20px; padding: 20px;"
                :class="{'is-invalid':$v.form.password.$error}"
              />
              <div 
                class="invalid-feedback"
              >
                Password must be alphanumeric and min length is 7
              </div>
              <span class="d-flex flex-row mt-2 ml-4"
                ><input type="checkbox" name="agree" style="margin-top: 6px" v-model="form.agree" />
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
        <span v-show="!form.busy">{{(showSecondForm)?'submit':'next'}}</span>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-show="form.busy"></span>
        <span v-show="form.busy">Creating account...</span>
        </button>
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

    <div class="rightCon col-md-4 d-none d-md-flex align-items-center ">
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
import { required, minLength, between, email, alphaNum } from 'vuelidate/lib/validators';
export default {
  data(){
    return {
      form : {
        organisation : '',
        email : '',
        password : '',
        username : '',
        agree : '',
        busy : false,
      },
      showSecondForm : false
    }
  },
  validations: {
    form : {
      organisation: {
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
    async register(){
      this.$v.form.$touch();
      if(this.$v.form.$error) return
      this.form.busy = true;
      console.log(this.form.busy)
      this.$store.dispatch("togglePageBusy");
      this.$http.post('https://vidconf-api.herokuapp.com/user', this.form).then(response => {
        if(response.ok){
          alert('registeration successful');
          this.$store.dispatch("setUser", response.data.data.user);
          this.$router.push({path:"host", query: {newuser: true}});
        }
      }).catch(e => {
        console.log(e);
      }).finally(e => {
        this.form.busy = false;
        this.$store.dispatch("togglePageBusy");
      });
    },
    progressForm(){
      if(this.showSecondForm){
        this.register();
      }else{
        this.showSecondForm = true;
      }
    }
  },
};
</script>
<style scoped></style>
