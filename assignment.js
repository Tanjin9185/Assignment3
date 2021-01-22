//   https://github.com/Tanjin9185/Assignment3/blob/main/assignment.js


// 1. kilometerToMeter
function kilometerToMeter(kiloMeter){
  if(kiloMeter<0){
      var meter = "Kilometer Can not be Negetive Digit!!";
      return meter;
  }
  else{
      meter = kiloMeter*1000;                 //we know, 1k.m = 1000m
      return meter;   
  }
}
var Meter = kilometerToMeter(11);             //input kilometer
console.log("Total meter is :",Meter);


// 2. budgetCalculator
function budgetCalculator(watch, phone, laptop){
  if(watch < 0){
    console.log("Watch Quantity Can not be Negetive Digit!!");       // check quantity(can not be -1<=) 
    watch = 0;                                                       // negetive quantity return 0 quantity
  }
  if(phone < 0){
    console.log("Phone Quantity Can not be Negetive Digit!!");
    phone = 0;
  }
  if(laptop < 0){
    console.log("Laptop Quantity Can not be Negetive Digit!!");
    laptop = 0;
  }
  return watch*50+phone*100+laptop*500;                              //return total budget amount.
}
var result = budgetCalculator(1,1,-1);                               //budgetCalculator(watch quantity, phone quantity, laptop quantity)
console.log("Total budget is :",result); 


// 3. hotelCost
var amount = 0;                                                     //initially total amount = 0
function hotelCost(day){
    if(day<0){
        amount = "Day Can not be Negetive Digit!!";
        return amount;
    }
    else if(day<=10){
        amount = day*100;
        return amount;
    }
    else if(day<=20){
        var firstDay = 10*100;           //1st 10 days amount
        var remaining = day-10;          //20-11 days 
        var secondDay = remaining*80;    //20-11 days amount
        amount = firstDay + secondDay;
        return amount;
    }
    else{
        var firstDay = 10*100;           //1st 10 days amount
        var secondDay = 10*80;           //11 to 20day = 10 days amount
        var remaining = day - 20;        //21- days
        var thirdDay = remaining*50;
        amount = firstDay + secondDay + thirdDay;
        return amount;
    }
} 
var totalCost = hotelCost(127);          //hotelCost(total days)
console.log("Total cost is :",totalCost); 


// 4. megaFriend
function megaFriend(arr){
  var len = 0;                             // initially declar array lengtgh(len) is 0 
  var longest;
  if(arr.length<1){
      longest = "Your Array is empty";
      return longest;
  }
  else{
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > len) {           //arr er index i r length len teke boro kina check krbe
        var len = arr[i].length;           //len a arr r i index r value length store krbe
        longest = arr[i];                  //longest a arr er i index er vaulue store krbe
      }
    }
    return longest;
  }     
}
var arr = ["Jhanker Mahbub", "asdfgh asdfghj", "Foysal", "Manik Roy", "Anik", "Najmus Sakib"];
var result = megaFriend(arr);
console.log("Max string name is :",result);