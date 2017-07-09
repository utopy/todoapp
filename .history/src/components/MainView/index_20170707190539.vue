<template>
    <div>
        ciao
    </div>
</template>
<script>
import utils from '../../assets/utils.js'
export default {
  name:"Index",
  mounted(){
      utils.rq('http://json-generator.appspot.com/api/json/get/cfcUlkIaKW?indent=2', {}, (err, res)=>{
          if(err){
              console.log(err)
          } else {
              console.log(res)
          }
      })
  }
}
</script>
<style scoped>

</style>
