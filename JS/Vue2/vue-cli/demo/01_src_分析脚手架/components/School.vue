<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>
 
<script>
// 组件交互相关的代码（数据、方法等）

// 向外暴露三种方法
// 法一：分别暴露  在const前面加export
// /* export */ const school = Vue.extend({
//     name:'School',
//     data(){
//         return {
//             name:'尚硅谷',
//             address:'北京'
//         }
//     },
//     methods:{
//         showName(){
//             alert(this.name)
//         }
//     }
// })

// 法二：统一暴露
// export {school};

/* // 法三：默认暴露(√) 一般选这个
    export default school;
    // 那么会直接在定义school组件时：
    export default{ data:(){},methods:{}} */
export default {
  name: 'school-01',
  data() {
    return {
      name: "Vue",
      address: "北京",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>
 
<style>
/* 组件样式 */
.demo {
  background-color: orange;
}
</style>