<template>
    <div>
        <ul>
            <li v-for="todo in todos">
                <todo todo="{{todo}}"></todo>
            </li>
        </ul>
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
  components: {todo},
  mounted(){
      utils.rq('http://json-generator.appspot.com/api/json/get/cfcUlkIaKW?indent=2', {}, (err, res)=>{
          if(err){
              console.log(err)
          } else {
             res.forEach((n)=>{
                 this.todos.push(n)
             }, this)
          }
      })
  }
}
</script>
<style scoped>

</style>
