Vue.createApp({
  data() {
    return {
      goalsBoard: [],
      enteredNewGoalString: "",
    };
  },
  methods: {
    addNewGoalString() {
      this.goalsBoard.push(this.enteredNewGoalString);
      this.enteredNewGoalString = "";
    },
  },
}).mount("#app");
