/* 
  该文件是整个项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false
 
 
/* 
  关于不同版本的Vue: 
    1. vue.js与vue.runtime.xxx.js的区别:
      (1) vue.js是完整版的Vue，包含:核心功能+模板解析器。
      (2) vue.runtime.xxx. js是运行版的Vue,只包含:核心功能;没有模板解析器。
    
    2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
    render函数接收到的createElement函数去指定具体内容。
*/
 
 
// 创建Vue实例对象---vm
new Vue({
  el:"#app",
  // 下面的代码以后解释
  // 完成了这个功能，将App组件放入容器中
  render: h => h(App),
 
  /* 
    render(createElement){
    // console.log(typeof a);
    return createElement('h1','你好啊')
  } 
  等价于
    render:(createElement)=>{
      // console.log(typeof a);
      return createElement('h1','你好啊')
  } 
  等价于
    render:createElement=>creatElement('h1','你好啊')
  等价于
    render:q=>q('h1','你好啊')
  与上方16行内容等价，h1是html内置元素，可在标签后添加内容
  而App是组建，具体内容在组件内已写好，故只有一个参数
  */
 
 
  // template:`<h1>你好啊</h1>`,
  /* components:{
      App
  }, */
})/* .$mount('#app') */
// 上面这行等价于 el:'#app'
 