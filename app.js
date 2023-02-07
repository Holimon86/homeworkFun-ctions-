

let arr1 = ["Spawn", "Spiderman", "Goku", "Wolverine", "teenGohan", "Vegeta","SilverSurfer", "Punisher", "Frieza", "Picollo"];
arr1.push(["are all my favorite characeters"]);
console.log(arr1);

let array = ["Spawn", "Spiderman", "Goku", "Wolverine", "Gohan", "SilverSurfer", "Frieza", "Punisher", "GhostRider", "Picollo"];
array.splice(5, 5);
console.log(array)

let newArray = arr1.splice(6,4);
console.log(newArray);

let array1 = ["Spawn", "Spiderman", "Goku", "Wolverine", "Gohan", "SilverSurfer", "Frieza", "Punisher", "GhostRider", "Picollo"];
let array2 = array1.slice(5, 9);
console.log(array2);

