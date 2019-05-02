<template>
  <div class="head1">{{text}}</div>
</template>

<script>
    export default {
      name: "MyHead",
      props:{
          text:String
      },
    }
</script>

<style scoped>
  @import "../assets/css/HeadStyle.css";
</style>
