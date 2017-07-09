<template>
    <div class="wrapper">
        <div class="todo-container">
            <div v-for="todo in todos">
                    <todo v-bind:todo="todo" v-on:remove="removeTodo(todo)"></todo>
            </div>
        </div>
        <dock></dock>
    </div>
</template>
<script>
import utils from '../../assets/utils.js'
import todo from './todo.vue'
import dock from './dock.vue'
export default {
  name:"Index",
  data(){
      return{
          todos: []
      }
  },
  methods:{
      removeTodo(todo){
        this.todos.forEach((n, i)=>{
            if(n._id === todo._id){
                console.log(i)
                this.todos.splice(i,1)
            }
        },this)
      }
  },
  components: {todo, dock},
  mounted(){
      utils.rq('http://json-generator.appspot.com/api/json/get/ceLmONtyMi?indent=2', {}, (err, res)=>{
          if(err){
              console.log(err)
          } else {
             res.forEach((n)=>{
                 n.expanded = false
                 this.todos.push(n)
             }, this)
          }
      })
  }
}
</script>
<style scoped>
.wrapper{
    height: 100vh;
}

.todo-container{
    height: calc(100vh - 50px;);
}
ul{
    list-style: none;
    width: 100vw;
    padding: 0;
}
</style>
