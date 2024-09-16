const foodList = document.querySelector("#food-list ul");
const foodNameInput = document.querySelector("#food-name");
const caloriesInput = document.querySelector("#calories");
const addFoodButton = document.querySelector("#add-food");

let totalCalories = 0;

function addFood() {
  const foodName = foodNameInput.value;
  const calories = parseInt(caloriesInput.value);

  if (foodName && !isNaN(calories)) {
    const listItem = document.createElement("li");
    listItem.textContent = `${foodName} (${calories} calories)`;
    foodList.appendChild(listItem);

    totalCalories += calories;
    console.log(`Total calories: ${totalCalories}`);

    foodNameInput.value = "";
    caloriesInput.value = "";
  } else {
    alert("Please enter valid food name and calories.");
  }
}

addFoodButton.addEventListener("click", addFood);