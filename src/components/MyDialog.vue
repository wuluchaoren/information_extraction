<template>
    <div class="root">
      <div>{{info.who}}</div>
      <div>{{info.when}}</div>
      <div>{{info.what}}</div>
      <div>{{info.where}}</div>
    </div>
</template>

<script>
    export default {
      name: "MyDialog",
      props:{
        content:Object
      },
      data(){
        return{
          info:this.content
        }
      }
    }
</script>

<style scoped>

</style>
