<template>
  <div class="school">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
export default {
    name: 'MySchool',
    data(){
        return {
            name: 'wsh',
            address: '河北',
        }
    }
};
</script>

<style>
    .school {
        background:pink;
    }
</style>