// 此处用的是分别暴露，故引用需要花括号
export const hunhe = {
  methods: {
    showName() {
      alert(this.name);
    },
  },
  mounted() {
    console.log("你好啊");
  },
};

export const hunhe2 = {
  data() {
    return {
      x: 100,
      y: 200,
    };
  },
};
