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
                    <li>

                    </li>
                    <li>

                    </li>
                    <li></li>
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
    
    min-height: 50px;
    width: 100vw;
    font-size: 12px;
}
.description{
    text-align: left;
    padding: 10px 20px;
}

p{
  margin-top:27px
}

.completed{
    background: rgba(244, 66, 188, 0.5);
    border:2px solid rgba(244, 66, 188, 0.3);
}

.details ul{
    list-style: none;
}

.details ul li{
    float: right;
    padding: 20px;
    background: red;
}
</style>

