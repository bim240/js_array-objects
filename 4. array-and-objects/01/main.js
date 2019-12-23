var myPenguin = {
    name:"Alfred",
    origin:"Zig et Puce" ,
    author:"Alain Saint-Ogan",
    favoriteFoods :["Alfred", "Zig ret Puce", "Alain Saint-Ogan"],
}
console.log(myPenguin.favoriteFoods[1]);

var firstFavFood = myPenguin.favoriteFoods[0];
myPenguin.favoriteFoods.push("fruit");
console.log(myPenguin.favoriteFoods.length);
myPenguin.favoriteFoods[3]= "pineApple";
var lastFavFood = myPenguin.favoriteFoods[-1];

for (let key in myPenguin.favoriteFoods) {
    console.log(myPenguin.favoriteFoods[key]);
}