// 该文件用于创建Vuex中最为核心的store
// 引入Vue
import Vue from "vue";
//引入Vuex
import Vuex from "vuex";
// 应用Vuex插件
Vue.use(Vuex);

// 准备actions--用于响应组件中的动作
const actions = {
  /* jia:function(context,value){
        console.log('actions中的jia被调用',context,value);
        context.commit('JIA',value)
    },
    jian:function(context,value){
        console.log('actions中的jian被调用',context,value);
        context.commit('JIAN',value)
    }, */
  jiaOdd: function (context, value) {
    console.log("actions中的jiaOdd被调用", context, value);
    if (context.state.sum % 2) {
      context.commit("JIA", value);
    }
  },
  jiaWait: function (context, value) {
    console.log("actions中的jiaWait被调用", context, value);
    setTimeout(() => {
      context.commit("JIA", value);
    }, 500);
  },
};
// 准备mutations--用于操作数据（state）
const mutations = {
  JIA(state, value) {
    // console.log('mutations中的JIA被调用了',state,value);
    state.sum += value;
  },
  JIAN(state, value) {
    // console.log('mutations中的JIAN被调用了',state,value);
    state.sum -= value;
  },
};
// 准备state--用于存储数据
const state = {
  sum: 0, //当前的和
};

// 创建store
const store = new Vuex.Store({
  // 对象中的key和保存对应值的变量重名，可以简写
  actions: actions,
  mutations,
  state,
});

// 暴露store
export default store;

/* 
    等同于
    export default new Vuex.Store({
    })
*/
