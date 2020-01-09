<template>
  <div id="tabbar">
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background-color: #f6f6f6;
    z-index: 99;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 5px rgba(100,100,100,.2);
  }
</style>
