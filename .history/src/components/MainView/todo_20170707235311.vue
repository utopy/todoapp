<template>
    <div class="todo">
        <div class="check">
            <div class="checkbox"></div>
        </div>
        <div class="content" @click="expand(todo)">
            <p>{{todo.title}}</p>
        </div>

        <div class="details" v-if="todo.expanded">
            ciao
        </div>
    </div>
</template>
<script>
export default {
  props: ['todo'],
  methods: {
    expand(todo){
        todo.expanded = !todo.expanded
    }
  }
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
}

.checkbox{
    margin: 20px 5px;
    height: 30px;
    width: 30px;
    border: 1px solid black;
    border-radius: 25px

}

.content{
   display: inline-block;
   text-align:center;
   margin-left: 20px;
}

p{
  margin-top:27px
}
</style>

