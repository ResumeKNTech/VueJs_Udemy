const buttonAddGoal = document.querySelector("button");

const inputNewGoalString = document.querySelector("input");

const listNewGoalString = document.querySelector("ul");

function addNewGoalString() {

  const enteredNewGoalString = inputNewGoalString.value;

  const listItemNewGoalString = document.createElement("li");

  listItemNewGoalString.textContent = enteredNewGoalString;

  listNewGoalString.appendChild(listItemNewGoalString);

  inputNewGoalString.value = "";
}

buttonAddGoal.addEventListener("click", addNewGoalString);
