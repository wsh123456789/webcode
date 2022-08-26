<!-- 动画 -->
<template>
    <div>
        <button @click="isShow=!isShow">显示/隐藏</button>
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
    </div>
</template>
 
<script>
    export default {
        name:'MyTest',
        data(){
            return {
                isShow:true
            }
        }
    }
</script>
 
<style scoped>
    h1{
        background-color: orange;
    }
 
    /* 动画进 */
    .hello-enter-active{
        animation: atguigu 1s linear;
    }
    .hello-leave-active{
        animation: atguigu 1s reverse;
    }
 
    /* 动画名 */
    @keyframes atguigu {
        /* 来的位置 */
        from{
            transform: translateX(-100%);
        }
        /* 停的位置 */
        to{
            transform: translateX(0px);
        }
    }
</style>
