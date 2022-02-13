Vue.createApp({
  data() {
    return {
      inputValue: 0,
      zandaka: 0,
      logs: [{ data: "", type: "", money: 0 }],
    }
  },
  methods: {
    plusPrice: function () {
      this.zandaka += this.inputValue
      this.logs.push({ date: new Date(), type: "入金", money: this.inputValue })
    },
    minusPrice: function () {
      this.zandaka -= this.inputValue
      this.logs.push({ date: new Date(), type: "出金", money: this.inputValue })
    },
  },
}).mount("#app-input, #app-zadaka, #app-record")
