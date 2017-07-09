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
        text-align: center;
    }

    .container li{
        width: 50px;
        height: 50px;
        background: blue;
        display: inline-block;
        margin: 0 5%;
    }
</style>


