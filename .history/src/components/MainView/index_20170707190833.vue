<template>
    <div>
        <ul>
            <li v-for></li>
        </ul>
    </div>
</template>
<script>
import utils from '../../assets/utils.js'
export default {
  name:"Index",
  data(){
      return{
          todos: {}
      }
  },
  mounted(){
      utils.rq('http://json-generator.appspot.com/api/json/get/cfcUlkIaKW?indent=2', {}, (err, res)=>{
          if(err){
              console.log(err)
          } else {
              this.todos = this.todos.append
          }
      })
  }
}
</script>
<style scoped>

</style>
