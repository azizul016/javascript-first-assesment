// 01|

function feetToMile(ft){
   const mile = ft / 5280;
    return mile;
}
let convertMile = feetToMile(22);
let result =  convertMile.toFixed(3);
console.log(result, 'mile');



// 02|

 function woodCalculator(chair, table, bed){

    chairCount = chair * 1;
    tableCount = table * 3;
    bedCount = bed * 5;
    let total = chairCount + tableCount + bedCount;
    return total;
 }
    var result = woodCalculator(12, 3, 2);
    console.log(result, "Cubic Feet.");
  
  

//   03|

    function brickCalculator(floor){
    if (floor <= 10 ) {
        let feet = floor * 15;
        let bricks = feet * 1000;
        return bricks;
    }
    else if (floor <= 20 && floor >= 11) {
        let firstTenthFloor = 10 * 15;
         let AfterTenthFloor = (floor - 10) * 12;
         let feet =  firstTenthFloor + AfterTenthFloor;
         let bricks = feet * 1000;
        return bricks;
    }
    else if (floor > 20) {
        let firstTenthFloor = 10 * 15;
        let AfterTenthFloor = (floor - 10) * 12;
        let AfterTweentythFloor = (floor - 20) * 10;
        let feet =  firstTenthFloor + AfterTenthFloor + AfterTweentythFloor;
        let bricks = feet * 1000;
        return bricks;
    }
 
}
let result = brickCalculator(7);
console.log(result);



// 04|

function tinyFriend(name){
    let min = name[0];
    for (let i = 0; i < name.length; i++) {
        const currentWord = name[i];
        if(currentWord.length < min.length){
            min = currentWord;
        }
    }
    return min;
 }
let friendsName = ["azizul", "rahim", "karim", "joy", "masud", "rana"];
let result = tinyFriend(friendsName);
console.log("The smalest name of the arrey is ", result);

