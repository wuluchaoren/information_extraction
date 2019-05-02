<template>
  <div id="back" class="back" @click="Extraction"><</div>
</template>

<script>
    export default {
      name: "BackButton",
      methods:{
        Extraction:function(){
          this.$router.push({
            name:'Extraction'
          });
        },
        init:function(){
          let h=window.innerHeight*0.04;
          let b=document.getElementById("back");
          b.style.height=h+"px";
          b.style.width=h+"px";
          b.style.cursor="default";
        }
      },
      mounted() {
        this.init();
      }
    }
</script>

<style scoped>
  @import "../assets/css/BackButtonStyle.css";
</style>
