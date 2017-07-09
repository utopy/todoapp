<template>
    <div class="todo">
        <div class="check" @click="complete(todo)">
            <div class="checkbox" v-bind:class="{completed : todo.completed}">
            </div>
        </div>
        <div class="content" @click="expand(todo)">
            <p>{{todo.title}}</p>
        </div>

        <div class="details" v-if="todo.expanded">
            <p class="description">
                {{todo.description}}
            </p>
            <div class="buttons">
                <ul>

                    <li @click="remove(todo)"></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['todo'],
  methods: {
    expand(todo){
        todo.expanded = !todo.expanded
    },
    complete(todo){
        todo.completed = !todo.completed
    },
    remove(todo){
        this.$emit('remove')
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
  color: #CDDDDD;
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
    border: 1px solid #2CDA9D;
    opacity: 0.2;
    border-radius: 25px

}

.content{
   display: inline-block;
   text-align:center;
   margin-left: 10px;
}

.details{
    
    min-height: 50px;
    width: 100vw;
    font-size: 12px;
    padding-bottom: 10px;
    border-bottom: 1px solid black
}
.description{
    text-align: justify left;
    padding: 5px 50px;
}

p{
  margin-top:27px
}

.completed{
    background: #2CDA9D;
    opacity: 1
}

.buttons{
    width: 100vw;
    
}

.buttons ul{
    list-style: none;
    text-align: right
}

.buttons ul li{
    display: inline-block;
    padding: 20px;
    background: red;
}
</style>

