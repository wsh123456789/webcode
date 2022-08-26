<template>
 
    <div class="container">
        <Search/>
        <List/>
    </div>
 
 
</template>
 
<script>
    // 法一：assts/css/bootstrap 如此引入，bootstrap中有未被使用的资源，会报错，
    // import './assets/css/bootstrap.css'
    // 法二：在public文件夹中引入静态资源，在index.html中引入
    import Search from './components/Search'
    import List from './components/List'
    export default {
        name:'App',
        components:{Search,List}
    }
</script>
 
<style>
    
</style>