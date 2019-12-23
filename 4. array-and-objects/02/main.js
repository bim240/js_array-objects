var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };
  var myPenguin = {
    name:"Alfred",
    origin:"Zig et Puce" ,
    author:"Alain Saint-Ogan",
    favoriteFoods :["Alfred", "Zig et Puce", "Alain Saint-Ogan"],
}

  var penguins = [gunter, ramon, fred];
  console.log(penguins[0]);
  var secondPenguin = penguins[1];
  console.log(penguin[-1]);
  penguins.push(myPenguin);
  console.log (penguins.length);
  gunter.canFly = true;
  penguins[0].sayHello;
 var numberOfFeet = 2;
  for(let i = 0;i < penguins.length; i++) {
      penguins[i].push()
  }