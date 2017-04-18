var data = {
    a: "one", 
    b: "two", 
    ponies: "crayons", 
    dingle: "dangle"
};

function objectValues(obj) {
    var newArray = [];
    for(var key in obj) {
        newArray.push(obj[key]);
    }
          return newArray;
}
console.log(objectValues(data));

function keysToString(obj) {
    return Object.keys(obj).join(" ");
}

function valuesToString(obj) {
    var output = [];
    for(var key in obj) {
        if(typeof (obj[key]) === 'string') output.push(obj[key]);
    }
    return output.join(" ");
}

function arrayOrObject(collection) {
    if(Array.isArray(collection)) return 'array';
    if(typeof collection === 'object') return 'object';
}

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.substr(1);
}


function capitalizeAllWords(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function welcomeMessage(obj) {
    return "Welcome " + capitalizeWord(obj['name']) + "!";
}

function profileInfo(obj) {
    return capitalizeWord(obj.name) + " is a " + capitalizeWord(obj.species);
}

function maybeNoises(obj) {
    if(!Array.isArray(obj.noises) || obj.noises.length === 0 ) {
    return 'there are no noises';
    }
    return valuesToString(obj.noises);
}
 
 function hasWord(str, word) {
    if(str.includes(word)) {
            return true;
        }
    return false;
 }
 
 function addFriend(name, obj){
    obj.friends.push(name);
    return obj;
 }
 
 function isFriend(name, obj) {
    if(obj.friends) {
        for(let i = 0; i < obj.friends.length; i ++) {
            if (obj.friends[i] === name) return true;
        }
    }
    return false;
 }
 
 function nonFriends(name, list) {
    let output = [];
    for (let i = 0; i < list.length; i++) {
        if(name !== list[i].name) {
            if(!isFriend(name, list[i])) 
            output.push(list[i].name);
        }
    }
    return output;
 }
 
 function updateObject(obj, key, value) {
    obj[key] = value;
    return obj;
 }
 
 function removeProperties(obj, arr) {
    for(var i = 0; i < arr.length; i++) {
        if(obj.hasOwnProperty(arr[i])) {
            delete obj[arr[i]];
        
        }
    }
 }
 
 function dedup(arr) {
   var newArr= [];
   for(var i = 0; i < arr.length; i++)
    if(newArr.indexOf(arr[i])===-1) {
        newArr.push(arr[i]);
    }
    return newArr;
 }