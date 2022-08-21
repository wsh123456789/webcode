<template lang="">
    <div>
        <School></School>
        <hr>
        <Student></Student>
    </div>
</template>
 
<script>
    // 引入Student组件
    import Student from './components/Student'
    import School from './components/School'
 
    export default {
        name:'App',
        components:{Student,School},
        
    }
</script>