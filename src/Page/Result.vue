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
  @import "../assets/css/PageStyle.css";
</style>
