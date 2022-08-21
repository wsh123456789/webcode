<template >
  <div class="school">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>
<script>
export default {
  name: "MyStudent",
  data() {
    return {
      msg: "我是一个学生",
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },

  //简单声明接受
  props: ["name", "age", "sex"],

  // 接受的同时对数据进行类型限制
  /* props:{
        name:String,
        age:Number,
        sex:String 
    } */

  // 接受的同时对数据进行类型限制+默认值的指定+必要性的限制
  /* props:{
        name:{
            type:String,//name的类型是字符串
            required:true//name是必须要有的
        },
        age:{
            type:Number,//age的类型是数字型
            default:99//age可有可无，如果没有先设一个默认值99
        },
        sex:{
            type:String,
            required:true
        },
    } */
};
</script>