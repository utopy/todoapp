<template>
    <div class="todo">
    <div class="check">

    </div>
    <div class="content">
        <p>{{todo.title}}</p>
    </div>
    </div>
</template>
<script>
export default {
  props: ['todo']
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.todo{
  width:100vw;
  min-height: 70px;
  border-bottom: 1px solid gray;
}

.check{
  float:left;
  height:38px;
  width:38px;
  margin: 15px 0;
  border-radius: 25px;
  border: 2px solid gray;  
}

.content{
   display: inline-block;
   text-align:center;
   margin-left: 20px;
}

p{
  margin-top:30px
}
</style>

