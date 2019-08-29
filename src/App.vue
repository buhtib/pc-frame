<template>
  <div id="app">
    <router-view :key="$route.fullpath"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
 
};
</script>

<style lang="less">
@import "./style/base.less";
@import "./style/global.less";
@import "./style/bootstarp-ui.less";

#app {
  height: 100%;
  width: 100%;
}
</style>
