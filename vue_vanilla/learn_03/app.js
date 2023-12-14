const app = Vue.createApp({
  data() {
    return {
      stringGoalA: "Course A",
      stringGoalB: "Course B",

      courseGoal: ["React", "Vue", "Angular"],
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.stringGoalA;
      } else {
        return this.stringGoalB;
      }
    },
  },
});

app.mount("#user-goal");
