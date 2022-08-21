<template >
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM" ref="btn">点我输出上方DOM元素</button>
        <School ref="sch"/>
    </div>
</template>
 
<script>
    // 引入School组件
    import School from './components/School'
 
    export default {
        name:'App',
        components:{School},
        data(){
            return {
                msg:'欢迎您'
            }
        },
        methods:{
            showDOM:function(){
                console.log(this.$refs.title),      //真实DOM元素
                console.log(this.$refs.btn),        //真实DOM元素
                console.log(this.$refs.sch)         //School组件实例对象(vc)
 
            }
        }
    }
</script>