<template>
  <a-layout id="components-layout-demo-custom-trigger" class="h-100v">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" >
        <img
              src="../assets/female.jpg"
              alt="user-avatar"
              class="user-avatar-img mr-2"
            /><span class="text-white">
              {{user.name}}
            </span>
      </div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="[key]" class="sidemenu">
        <a-menu-item key="1">
          <router-link to="/home"><a-icon type="home" />
          <span>Home</span></router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/home/join"><a-icon type="video-camera" />
          <span>Join Meeting</span></router-link>
        </a-menu-item>
        <a-menu-item key="3">
         <router-link to="/home/host"> <a-icon type="usergroup-add" />
          <span>Host Meeting</span></router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/home/schedule"><a-icon type="schedule" />
          <span>My Schedule</span></router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="d-flex justify-content-between pr-4" style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <router-link class="logout" to="/logout"><i class="fa fa-power-off"></i> </router-link>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  export default {
    data() {
      return {
        collapsed: false,
        navKeys:{
          '/home': '1',
          '/home/': '1',
          '/home/join': '2',
          '/home/join/': '2',
          '/home/host': '3',
          '/home/host/': '3',
          '/home/schedule': '4',
          '/home/schedule/': '4',
        },
        key: '1'
      };
    },
    computed:{
      currentPath: ()=>{
        return window.location.pathname;
      },
      user() {
      return JSON.parse(localStorage.getItem("user"));
    }
    },
    created(){
      console.log(this.key = this.navKeys[this.currentPath]);
    }
  };
</script>
<style>
.h-100v{
  height: 100vh;
}
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    margin: 16px;
  }
  #components-layout-demo-custom-trigger .logo img{
    width: 32px;
    height: auto;
  }
  .logout{
    color: rgba(0, 0, 0, 0.65);
  }
  .sidemenu a{
    text-decoration: none !important;;
    color: #fff;
  }
  .sidemenu a:hover{
    text-decoration: none !important;
    color: #fff;
  }
  a:active {
    color: #fff;
}
</style>

