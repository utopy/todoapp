<template>
  <div class="container">
        <div class="button1"></div>
        <div class="button2"></div>
        <div class="button3"></div>
        <div class="button4"></div>
        <div class="button5"></div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.container {
    height: 50px;
    width: 100vw;
    background: red;
	display: box;
	box-orient: horizontal;
	box-pack: center;
	box-direction: normal;
	box-align: center;
}

#box1 {
	box-ordinal-group: 1;
	box-flex: 0;
}

#box2 {
	box-ordinal-group: 1;
	box-flex: 0;
}

#box3 {
	box-ordinal-group: 1;
	box-flex: 0;
}

ul{
    list-style: none;
}
li{
    display: inline-block;
    width: 50px;
    height: 50px;
    background: blue;
    padding: 0;
}
</style>


