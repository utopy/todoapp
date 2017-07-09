<template>
  <div class="container">
        <div class="button1">
            <div class="button"></div>     
        </div>
        <div class="button2">
            <div class="button"></div>     
        </div>
        <div class="button3">
            <div class="button"></div>     
        </div>
        <div class="button4">
            <div class="button"></div>     
        </div>
        <div class="button5">
            <div class="button"></div>     
        </div>
  </div>
</template>
<script>
export default {
  name:"dock"
}
</script>
<style scoped>
    .container{
        width: 100vw;
        height: 50px;
        background: red;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .container .button3{
        width: 100px;
        
    }

    .container div{
        width: 50px;
        height: 50px;
        background: blue;
        display: inline-block;
    }
</style>


