<template lang="">
    <div>
        <Student name="李四" sex="女" :age="18" />
        <!-- <Student name="张三" sex="男" age="19" /> -->
    </div>
</template>
<script>
    // 引入Student组件
    import Student from './components/Student'
 
    export default {
        name:'App',
        components:{Student},
        
    }
</script>