<template>
    <div class="todo">
    <div class="check">
        
    </div>
    <div class="content">
        <p>ciao</p>
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
  background:red;
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
}

p{
  margin-top:30px
}
</style>

