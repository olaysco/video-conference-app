<template>
  <div class="components-input-demo-presuffix d-flex flex-column w-100 h-100 justify-content-center">
    <div class="row">
      <div class="col-md-12">
        <h4 class="text-center">Start A Meeting</h4>
        <a-form :form="form" @submit.prevent="startMeeting">
          <a-form-item>
            <a-input placeholder="Provide Meeting ID" ref="meetingID"
             v-decorator="['MeetingID', { rules: [{ required: true, message: 'MeetingID must be at least 5 characters!', min: 5 }] }]">
              <a-icon slot="prefix" type="key" />
              <a-tooltip slot="suffix" title="Meeting ID is to be shared among participants only, vdconf is not liable for any privacy invasion">
                <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
              </a-tooltip>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" block>Start meeting</a-button>
          </a-form-item>
        </a-form>
        
       
      </div>
    </div>
   
  </div>
</template>

<script>
import { SERVER_URL } from '../utils/cofig';
  export default {
    data() {
      return {
        meetingID: '',
        formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      };
    },
    methods: {
      emitEmpty() {
        this.$refs.meetingID.focus();
        this.meetingID = '';
      },
      startMeeting(e)
      {
              e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
            this.$router.push({ path: "/meeting", query: { meetingID: values["MeetingID"] } });
          // this.$http
          //   .post(`${SERVER_URL}/api/meeting/create`, this.form)
          //   .then(response => {

          //   }).catch(console.log).finally(()=>{

          //   });
        }
      });

      }
    },
  };
</script>
<style scoped>
  .components-input-demo-presuffix .anticon-close-circle {
    cursor: pointer;
    color: #ccc;
    transition: color 0.3s;
    font-size: 12px;
  }
  .components-input-demo-presuffix .anticon-close-circle:hover {
    color: #999;
  }
  .components-input-demo-presuffix .anticon-close-circle:active {
    color: #666;
  }
</style>
