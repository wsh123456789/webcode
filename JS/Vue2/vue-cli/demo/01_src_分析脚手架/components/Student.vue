<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>
 
<script>
export default {
  name: 'student-01',
  data() {
    return {
      name: "zs",
      age: 18,
    };
  },
};
</script>