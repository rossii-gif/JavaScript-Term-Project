function Food(name,flavor,region,difficulty){
    this.name=name;
    this.flavor=flavor;
    this.region=region;
    this.difficulty=difficulty;
    this.cost=function(){
        var totalCost = parseInt(this.price) - parseInt(this.discount);
        return "$" + totalCost;
    }
    this.message = function(){
        var discountPercent = "You received a " + parseInt(this.discount)/parseInt(this.price) * 100 + "% discount!";
        return discountPercent;
    }
};
var n=prompt("Enter the food name: ");
var b=prompt("Enter the food flavor (sweet, sour, savory, salty, bitter, umami): ");
var p=prompt("Enter the food region: ");
var d=prompt("Enter the food difficulty (Easy, Medium, Hard): ");
var firstFood=new Food(n,b,p,d);

var secondFood = new Food("Pizza","Savory","Italy","Medium");

    var today = new Date();
var weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

document.getElementById("foodName1").innerHTML = firstFood.name;
document.getElementById("foodFlavor1").innerHTML = firstFood.flavor;
document.getElementById("foodRegion1").innerHTML = firstFood.region;
document.getElementById("foodDifficulty1").innerHTML = firstFood.difficulty;

document.getElementById("foodName2").innerHTML = secondFood.name;
document.getElementById("foodFlavor2").innerHTML = secondFood.flavor;
document.getElementById("foodRegion2").innerHTML = secondFood.region;
document.getElementById("foodDifficulty2").innerHTML = secondFood.difficulty;

document.getElementById("date").innerHTML = weekFromToday;