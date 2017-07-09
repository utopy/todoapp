<template>
  <ul class="container">
        <li class="button1">
            <div class="button"></div>     
        </li>
        <li class="button2">
            <div class="button"></div>     
        </li>
        <li class="button3">
            <div class="button"></div>     
        </li>
        <li class="button4">
            <div class="button"></div>     
        </li>
        <li class="button5">
            <div class="button"></div>     
        </li>
  </ul>
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
        right: 
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


