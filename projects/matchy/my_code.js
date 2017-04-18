var animal = {
    
};

animal.species = "Canine";
animal["name"] = "Cujo";
animal.noises = [];
console.log(animal);


var noises = [];
noises[0] = "bark";
noises.push("howl");
noises.unshift("woof");
noises[noises.length] = "yowl";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

 animal["noises"] = noises;
console.log(animal);


/* The different ways of accesing properties are:
dot and bracket notation.
The different ways of accessing elements in an array 
is bracket notation. 

*/

var animals = [];
animals.push(animal);
console.log(animals);

var duck = { 
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
    
}

animals.push(duck);

var alligator = { 
    species: 'reptile',
    name: 'Alex',
    noises: ['hiss', 'laugh', 'growl'] 
    
}
animals.push(alligator);

var sloth = { 
    species: 'Bradypus',
    name: 'Seth',
    noises: ['yawn', 'buzz'] 
    
}
animals.push(sloth);

console.log(animals);


// I chose an array because arrays hold list.

var friends = [];

function randomAnimals() {
    
 var randAnimal = Math.floor(Math.random()*animals.length);
       return animals[randAnimal].name;
    
}
 randomAnimals();

friends.push(randomAnimals(animals["name"]));
console.log(friends);

animals[3]["friends"] = friends;

function search(name) {
    for(var i = 0; i < animals.length; i++){
    if(name.toLowerCase()===animals[i]['name'].toLowerCase()) {
        return animals[i];
        }
    } return null;
}
search('Seth');

function edit(name, object) {
    for(var i = 0; i < animals.length; i++){
    if(name===animals[i]['name']) {
       animals[i] = object;
        }
    } 
}

function remove(name) {
    for(var i = 0; i < animals.length; i++){
    if(name===animals[i]['name']) {
       animals.splice(i,1);
        }
    } 
}

function create(obj){
    if(obj.name.length > 0 && obj.species.length > 0){
        for(var i=0;i < animals.length;i++){
            if(animals[i]['name'].toLowerCase() === obj.name.toLowerCase()){
                return null;
            }
        }
    } return animals.push(obj);
}
create();