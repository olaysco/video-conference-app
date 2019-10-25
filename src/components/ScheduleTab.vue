<template>
  <a-empty
    image="/img/fogg-list-is-empty.png" class="empty"
  >
    <span slot="description"> Your scheduled meeting is <b>Empty</b> </span>
    <a-button type="primary" aria-disabled="true" disabled>Schedule Now</a-button>
  </a-empty>
</template>
<style >
.ant-empty-image{
  height: 60vh !important;
}
</style>