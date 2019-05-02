<template>
  <div class="root">
    <div class="head">
      <MyHead text="抽取结果"></MyHead>
    </div>
    <div class="main">
      <ResultBody></ResultBody>
    </div>
    <div class="foot">
      <BackButton></BackButton>
    </div>
  </div>
</template>

<script>
  import MyHead from "../components/MyHead";
  import BackButton from "../components/BackButton";
  import ResultBody from "../components/ResultBody";
    export default {
        name: "Result",
        components: {ResultBody, BackButton, MyHead },
    }
</script>

<style scoped>
  .root{
    height: 100%;
    width: 100%;
  }
  .head{
    height: 7%;
    width: 100%;
  }
  .main{
    height: 85%;
    width: 100%;
  }
  .foot{
    width: 100%;
    height: 8%;
    display: flex;
    justify-content: center;
  }
</style>
