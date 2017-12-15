//Input field. Ask the user how much they are betting. Min and max
//Create a slot game object with 3 reels
//Each reel is an array with five elements
//the slot object has method to pull the rod
function SlotMachine(){
  this.reel1 = ["pear","apple","banana","cherry","grapes"];
  this.reel2 = ["pear","apple","banana","cherry","grapes"];
  this.reel3 = ["pear","apple","banana","cherry","grapes"];
}
SlotMachine.prototype.pullRod = function (x) {
  var resultArray=[];
  var money = x;
  //take every reel in  the prototype
  //define a random number between 0-4
  var num1 = Math.floor(Math.random()*5);
  var num2 = Math.floor(Math.random()*5);
  var num3 = Math.floor(Math.random()*5);
  resultArray.push(this.reel1[num1]);
  resultArray.push(this.reel2[num2]);
  resultArray.push(this.reel3[num3]);
  console.log(resultArray);
  //evaluate the result
  if ((resultArray[0]==resultArray[1])&&(resultArray[1]==resultArray[2])){
    console.log("You multiplied by 10!");
    money = money*10;
  } else if ((resultArray[0]==resultArray[1])||(resultArray[1]==resultArray[2])||(resultArray[0]==resultArray[2])) {
    //user duplicates
    console.log("You doubled!");
    money = money*2;
  } else{
    //user looses
    console.log("You lost!");
    money=0;
  }
};
var slot = new SlotMachine();
slot.pullRod(10);
