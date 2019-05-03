<template>
    <div class="root">
      <div class="myLine">
        <div class="point" @mouseover="mouseOn" @mouseout="mouseOut" id="point"></div>
        <div class="row"></div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "ResultLine",
      props:{
        content:Object
      },
      methods:{
        mouseOn:function(){
          this.$emit("myMouseOn",this.pointContent);
        },
        mouseOut:function(){
          this.$emit("myMouseOut",this.pointContent);
        }
      },
      data(){
        return {
          pointContent:this.content
        }
      }
    }
</script>

<style scoped>
  .row{
    width: 75%;
    height: 0;
    border: 2px solid cornflowerblue;
  }
  .point{
    width: 20%;
    padding: 10% 0;
    background: cornflowerblue;
    border-radius: 50%;
    height: 0;
    border: 2px solid #8F48ED;
  }
  .root{
    width: 4%;
    display: flex;
    align-items: center;
  }
  .myLine{
    width: 100%;
    display: flex;
    align-items: center;
  }
</style>
