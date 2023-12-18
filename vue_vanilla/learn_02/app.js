Vue.createApp({


  data() {
    return {
      goalsBoard: ['react','vue', 'angular'],
      goals: 'khoa',
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
