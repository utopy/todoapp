<template>
    <div class="todo">
        <div class="check">
            <div class="checkbox" v-bind:class="{completed : todo.completed}"></div>
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
  /*border-bottom: 1px solid gray;*/
}

.check{
  float:left;
  height:70px;
  width:40px;
}

.checkbox{
    margin: 25px 5px;
    height: 20px;
    width: 20px;
    border: 2px solid black;
    border-radius: 25px

}

.content{
   display: inline-block;
   text-align:center;
   margin-left: 10px;
}

.details{
    
    height: 50px;
    width: 100vw;
}

p{
  margin-top:27px
}

.completed{
    background: red;
    border:0;
}
</style>

