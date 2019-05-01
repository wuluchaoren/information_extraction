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
  .head1{
    height: 100%;
    width: 100%;
    background: cornflowerblue;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
