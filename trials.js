// variable practices
var car = "jepp";
var date = "Today";
let fullName = "Wesley, Jaboin";
const myAddress = 16;
var isItSaturday = true;
let isItNight = false;
console.log(myAddress)
console.log(date + "isItSaturday")
//Example of arrays
let toDoList = ['Eat','Love','pray','Repeat'];
var favoritePlayersNumber = [12,23, 8, 24, 21];
console.log(toDoList);
console.log(favoritePlayersNumber)
var a = 12;
var b = 14;
var c = 2;
var d = c + (b- a);
console.log(c)
//functions trials
let  makeEffort = function(name1) 
{
    console.log(`hello ${name1}`)
}
makeEffort("Wes");
let spaceJam = 200;
let redOctober = 1000;
let blackCat = 400;
let budget = 3000;

function getSpaceJam(){
budget = budget - spaceJam;
console.log(budget);
}

function getRedOctober(){

    budget = budget - redOctober;
    console.log(budget);
}
function getBlackCat(){
    budget = budget - blackCat
    console.log(budget);
}
getSpaceJam();
getRedOctober();
getBlackCat();

let wishList =[getSpaceJam, getRedOctober, getBlackCat]; //Other example of arrays

function myWishList(wList){
    //for loop
    let (i=0, num= wList.length; i<num; i++) {
        wList[i]()
    }

}
myWishList(wishList);