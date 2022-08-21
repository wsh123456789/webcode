<template >
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <input type="text" v-fbind:value="name" />
    <button @click="test">点我打招呼</button>
  </div>
</template>
 
<script>
// 这些为局部混合
// import {hunhe,hunhe2} from '../mixin'

export default {
  name: "MyStudent",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  // mixins:[hunhe,hunhe2]
  methods: {
    test() {
        this.hello();
    },
  },
};
</script>