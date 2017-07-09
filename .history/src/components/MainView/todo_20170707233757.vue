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
  min-height: 75px;
  margin: 0 0 20px 0;
}

.check{
  float:left;
  height:75px;
  width:40px;
  background:green
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

