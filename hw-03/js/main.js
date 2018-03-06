/* Created 3 separate arrays for each variable, product, style, and price. */
var items = ["Potion", "Potion", "Cake", "Herbs", "Herbs", "Thread", "Thread", "Cloth", "Bag", "Vial"];
var style = ["Health", "Mana", "Mana", "Small Bag of", "Large Bag of", "Silk", "Wool", "Wool", "Leather", "Crystal"];
var price = ["5", "5", "10", "15", "20", "10", "5", "15", "30", "10"];

/* When I first wrote this line I had 'i' set for less than or equal to items.length, however I realized I needed to set it to 9 to refelct exactly 10 products for sale without an undefined value at the end. */
for (var i = 0; i <= 9; i++) {
	document.querySelector(".shop-array").innerHTML += style[i] + " " + items[i] + " " + price[i] + "g" + "<br><br>";
} // I concatenated the three arrays, with spaces, per each line and  added "g" for the unit of measure.

/* Created a prompt for the amount of gold the user is willing to spend. */
var goldPieces = [];
var userGold = prompt("How much gold you are willing to spend today?");
/* and pushed to the empty array goldPieces. */
goldPieces.push(userGold);

document.querySelector(".user-gold").innerHTML = goldPieces + " gold";
