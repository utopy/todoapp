<template>
    <div class="todo">
        <div class="check">
            <div class="checkbox"></div>
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
  height:70px;
  width:40px;
  border-radius: 25px;
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

