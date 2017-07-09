<template>
  <ul class="container">
        <li class="button1">
            <div class="button"></div>     
        </li>
        <li class="button2">
            <div class="button"></div>     
        </li>
        <li class="button3">
            <div class="button" @click="newTodo()"></div>     
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
  name:"dock",
  methods:{
      newTodo(){
          this.$router.push('/new-todo')
      }
  }
}
</script>
<style scoped>
    .container{
        width: 100vw;
        height: 50px;
        background:white; 
        text-align: center;
        margin: 0;
    }

    .container li{
        width: 50px;
        height: 50px;
        display: inline-block;
        margin: 0 2%;
    }

    .button3  .button{
        border:2px solid #9cec5b;
        border-radius: 25px;
        height: 40px;
        width: 40px;
        margin: 3px;
    }
</style>


