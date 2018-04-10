function smoothies (flavor, meal, servings) {
// Created the properties I want to define for each recipe.
this.flavor = flavor;
this.meal = meal;
this.servings = servings;

this.recipe = function() {
	document.querySelector(".recipe").innerHTML = flavor + " Smoothie" + "<br>for " + meal + "<br>yields " + servings + " servings";
}
// Listed the characteristics of each smoothie to push to the DOM and display stats for user's selection.
}
var kiwiSmoothie = new smoothies("Kiwi", "breakfast", 4);
var strawberrySmoothie = new smoothies("Strawberry", "breakfast", 4);
var beetRootSmoothie = new smoothies("Beet Root", "lunch", 4);
var peanutButterSmoothie = new smoothies("Peanut Butter", "dinner", 4);
var mochaSmoothie = new smoothies("Mocha", "dessert", 4);
// Created a function on-click to output the user's choice to the DOM with conditions for whichever recipe that is being selected.
function choice() {
var choiceSmoothie = document.querySelector("input[name='flavor']:checked").value;
if (choiceSmoothie == 0){
	kiwiSmoothie.recipe();
}
else if (choiceSmoothie == 1){
	strawberrySmoothie.recipe();
}
else if (choiceSmoothie == 2){
	beetRootSmoothie.recipe();
}
else if (choiceSmoothie == 3){
	peanutButterSmoothie.recipe();
}
else if (choiceSmoothie == 4){
	mochaSmoothie.recipe();
}
// Created another function to output the calculations based on user's imput of how many people they are creating the recipe for.
}
function calculate() {
var people = document.querySelector(".people").value;
document.querySelector(".yields").innerHTML = "You will need x" + people / 4 + " the amount of ingredients this recipe calls for.<br>Yields 1 22oz smoothie, per person."; 
}