<template >
  <div class="demo">
    <h2 @click="showName">学校名称：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>
 
<script>
// 引入一个hunhe
// import {hunhe,hunhe2} from '../mixin'

export default {
  name: "MySchool",
  data() {
    return {
      name: "Vue-1234",
      address: "北京",
      x: 666,
    };
  },
  // mixins:[hunhe,hunhe2],
  mounted() {
    console.log("你好啊人世间！");
  },
};
</script>

<style >
.demo {
  background-color: pink;
}
</style>