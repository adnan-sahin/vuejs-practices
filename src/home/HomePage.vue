<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png" alt aria-hidden="true">
    </div>
    <div>
      <a href>Get Started</a> building your first robot!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
.robot {
  height: 300px;
}
</style>
