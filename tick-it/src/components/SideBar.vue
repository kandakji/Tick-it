<template>
  <div id="sidebar">
    <b-nav vertical class="w-25">
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>
</div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
