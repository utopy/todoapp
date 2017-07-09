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
        background:#30302F; 
        text-align: center;
        margin: 0;
        box-shadow: 0px -4px 45px -5px rgba(61,61,74,0.37);
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


