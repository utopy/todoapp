<template>
    <div>
        <div v-for="todo in todos">
                <todo v-bind:todo="todo" v-on:remove="removeTodo(todo)"></todo>
        </div>
    </div>
</template>
<script>
import utils from '../../assets/utils.js'
import todo from './todo.vue'
export default {
  name:"Index",
  data(){
      return{
          todos: []
      }
  },
  methods:{
      removeTodo(todo){
        console.log(todo)
      }
  },
  components: {todo},
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
ul{
    list-style: none;
    width: 100vw;
    padding: 0;
}
</style>
