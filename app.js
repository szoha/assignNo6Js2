
/////////////////////////////////////////////
// Chapter no 21-25
/////////////////////////////////////////////

//  Task-1  

// var first = prompt("Enter First Name");
// var last = prompt("Enter Last Name");

// var fullname = last +" " + first;

// document.write("Welcome " + fullname );



// Task-2

// var mobile = prompt("Enter your favoriate mobile model:");
// document.write("My favoriate mobile is:" + mobile);
// document.write("<br>");
// document.write("Length of string: "+mobile.length);



// Task-3

// var x = "Pakistani";
// var indexofn = x.indexOf("n");
// document.write("String: Pakistani<br>");
// document.write("Index of 'n':"+indexofn);



// Task-4

//  var x = "Hello World";
//  

//  for (var i = lenofx-1;i>=0;i--){
//      if(x[i] == "l"){
//          var indexofx = x-i
//          var     }
//  }
//  var indexofn = x.indexOf("i",);
//  document.write("String: Pakistani<br>");
//  document.write("Index of 'n':"+indexofn);

// var str = "Hello World";
// var indices = [];
// for(var i=0; i<str.length;i++) {
//     if (str[i] === "l") indices.push(i);
// }
// document.write("String:"+str);
// document.write("<br>");
// var lenofindices = indices.length;
// document.write("Last index of 'l':" + indices[lenofindices-1]);




// Task-5

// var str = "Pakistani";
// var ch = str[3];
// document.write("String:Pakistani <br>");
// document.write("Character at index 3:"+ch)


// Task-6
//  var first = prompt("Enter First Name");
//  var last = prompt("Enter Last Name");
//  var fullname = first.concat(last);
//  document.write("Welcome " + fullname );



// Task-7

// var str = "Hyderabad";
// var t = str.replace("Hydera","Islam");
// document.write("City: Hyderabad <br>");
// document.write("After replacement:" +t);


// Task-8

// var message = "Ali and Sami are best friends.They play cricket and football together.";

// var t = message.split("and").join(" & ");
// document.write(message+"<br>");
// document.write(t)


//Task-9

// var value = "472";
// document.write("value:"+value);
// document.write("<br>");
// document.write("Type:" + typeof(value));
// document.write("<br>");
// var intvalue = parseInt(value);
// document.write("value:"+intvalue);
// document.write("<br>");
// document.write("value:"+ typeof(intvalue));

// Task-10

// var u = prompt("Enter someting");
// var v = u.toUpperCase();
// document.write("User input:"+u)
// document.write("<br>");
// document.write("Upper case:"+v);


// Task-11

//  var u = prompt("Enter someting");
//  var v = u.toLowerCase();
//  document.write("User input:"+u);
//  document.write("<br>");
//  var b = v.charAt(0).toUpperCase();
// //  v.charAt(0) = b.toUpperCase();
//  document.write(" case:"+b);


//Task - 12

// var num = 35.36;
// var str = num.toString();
// var final = str.replace(".","");
// document.write("Number:"+str);
// document.write("<br>");
// document.write("Result:" + final);


//Task - 13

// var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
// var checkForSpecialChar = function(string){
//  for(i = 0; i < specialChars.length;i++){
//    if(string.indexOf(specialChars[i]) > -1){
//        return true
//     }
//  }
//  return false;
// }

// var str = prompt("Enter Username");
// if(checkForSpecialChar(str)){
//   alert("Enter valid username");
// } 




// Task-14

// var a = ["cake","apple pie", "cookie","chips","patties"];

// var userinput = prompt("Welcome to ABC bakery. What do you want to order sir/mam ?");

// userinput = userinput.toLowerCase();

// for(var i=0; i<a.length;i++) {
//        if (a[i] === userinput) {
//         document.write(userinput+" is available at index "+ i +" in our bakery")
//        }
//        else{
//         document.write("We are sorry."+userinput+" available is not available in our bakery.")
//        }
//        break;
//     }



// task-15


//  var password = prompt("Enter Password");
//  var firstchar =  password.charCodeAt(0);
//  var list = new Array ("/","!", "@", "#","$","%","%","^","&","*","(",")","_","+","=","-","`","~",";","<",">",".","?","[","]","{","}",",");
//  if(firstchar >=48 && firstchar<= 57){
//  alert("Password cannot begin with number.");
 
//  }
//  else if (password.length >6)
//      {
//          alert("Password length should be less than 7.");
        
//      }
// else if(password!=" ")
// {
//     var i;
//     var llength = list.length;
    
//     for(i=0; i<llength;i++){
//         if(password === list[i])
//         {
//             alert("Special symbols are not allowed.");
            
            
//         }
        
    
//         }
        
     
        
//     }

  
  
    
 


// Task-16

// var university = "University of Karachi";
// var arr = [];
// arr = university.split("");
// // document.write(arr.length)
//  for(var i=0; i <arr.length;i++){
//      document.write(arr[i]+"<br>");
//  }


// Task-17

// var input = prompt("Enter something");

// var lastchar = input.charAt(input.length-1);

// document.write("User input:" + input+"<br>");
// document.write("Last Character of input: " + lastchar);



// Task-18

// var t = "The quick brown fox jumps over the lazy dog";
// t = t.toLowerCase();
// var check = "the";

// var arr = [];
// var count=0;
// arr = t.split(" ");
// var arrlen = arr.length;

// for(var i =0 ; i <arrlen ; i++){
//     if(arr[i]==="the"){
//         count++;
//     }

// }

// document.write("Text: The quick brown fox jumps over the lazy dog <br>");
// document.write("There are "+count +" occurrence(s) of word 'the'");


/* <--:: Chapter 26-30  */


// Task 1 ---------------------------------------

function positiveInteger() {
    var number = prompt("Enter a positive integer");

    if (number > 0) {
        console.log(number + " is a positive");
        console.log(Math.round(number));
        console.log(Math.floor(number));
        console.log(Math.ceil(number));
    } else {
        alert("you can't enter negative number")
        console.log(number + " is negative" + "<br/>");
        positiveInteger(); 
    }
}

// positiveInteger();



//  Task 2 -------------------------------------------

function negativeInteger() {
    var number = prompt("Enter a negative floating point number");

    if (number < 0) {
        console.log(number + " is -ve");
        console.log(Math.round(number));
        console.log(Math.floor(number));
        console.log(Math.ceil(number));
    } else {
        alert("you can't enter positive number")
        console.log(number + " is positive" + "<br/>");
        negativeInteger(); 
    }
}
// negativeInteger();



//  Task 3 -------------------------------------------------------


 const absolute = () => {

  var num = prompt("Enter number");

  if(num > 0) {
    Math.abs(num);
    console.log(num + " is absolute");
  } else {
    console.log("It is -ve");
    let absolute = Math.abs(num);
    console.log({absolute});
  }
}
// absolute();





//  Task 4 ---------------------------------------------------


 const rollDice = () => {

  let random = Math.random() * 6;
  console.log(random);
  let dice = Math.ceil(random);
  console.log('Dice Shows', dice);
  alert('Dice rolled and shows ' + dice);
}
// rollDice();




//  Task 5 ------------------------------------------------------

 const flipCoin = () => {

  let random = Math.random() * 2;
  let coin = Math.ceil(random);

  if(coin == 2) {
    alert(coin + " Its Heads");
  } else {
    alert( coin + " Its Tails");
  }
}

// flipCoin();




//  Task 6 ----------------------------------------------------------

 const randomNumber = () => {

  let random = Math.random() * 100;
  let number = Math.ceil(random);

  alert( "Random number between 1 and 100 ==> " + number);
  console.log( "Random number between 1 and 100 ==> " , number);

}
// randomNumber();



//  Task 7 -----------------------------------------------------

 const weightFunc = () => {

  var weight = prompt("Enter you weight (50, 50kgs, 50.5kgs or 50.2kilograms)");

  if(weight * 1) {
    console.log("The weight is " + weight + " kilograms");
  } else if (weight.indexOf(' ')) {
    alert("There is a space in your entry, enter the mentioned format");
    weightFunc();
  } else {
    let extracted = weight.split('k');
    
    console.log("It was string", weight);
    console.log("Extracted weight " + extracted[0] + " kilograms");
  }
}

// weightFunc();




//  task 8 -----------------------------------------------


 const randomSecretNumber = () => {

  let random = Math.random() * 10;
  let secretNumber = Math.ceil(random);

  let userInput = prompt('Enter number between 1 and 10');

  if(userInput < 1 || userInput > 10) {
    alert("you can not enter number less than 1 and greater than 10!");
    randomSecretNumber();
  } else {
    if(userInput == secretNumber) {
      alert("Wow you must be a psychopath xD!");
    } else {
      alert("Try Again");
      randomSecretNumber();
    }
  }


}
 randomSecretNumber();




/////////////////////////////////////////////
// Chapter no 31-34
/////////////////////////////////////////////




// Task-1

// var now = new Date();
// document.write(now)



// Task-2
// var monthsNames = ["Jan", "feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// var month = new Date();
// var monthnumber = month.getMonth();
// document.write(monthsNames[monthnumber]);


// Task-3
// var dayNames = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];

// var day = new Date();
// var daynumber = day.getDay();
//  document.write("Today is "+dayNames[daynumber]);


// Task-4
// var day = new Date();
// var daynumber = day.getDay();
// if( daynumber === 0 || daynumber===7){
//     document.write("It's Fun day");
// }


// Task-5

// var day = new Date();
// var daynumber = day.getDate();
// if(daynumber <16){
// document.write("First fifteen days of the month");
// }
// else
// {
//     document.write("Last days of the month");
// }



// Task-6
// var currentdate = new Date();
// var ms = currentdate.getTime();
// var min = currentdate.getTime()/(1000*60);


// document.write("Current Date: "+currentdate+"<br>");
// document.write("Elapsed milliseconds since January 1,1970: "+ ms+"<br>");
// document.write("Elapsed minutes since January 1, 1970: " + min)



// Task-7
// var day = new Date();
// var ch = day.getHours();

// if(ch <12){
//     document.write("It's AM");
// }
// else{
//     document.write("It's PM");
// }


// Task-8
// var LaterDate = new Date("Dec 31,2020");
// document.write("Later date: " +LaterDate);




//Task-9
// var firstday = new Date("June 18,2015");
// var firstdayday = firstday.getTime();

// var day = new Date();
// var cd = day.getTime();
// var diff = cd - firstdayday;

// var diffday = diff/(1000*60*60*24);

// document.write(diffday.toFixed(0)+" days have passed since 1st Ramadan,2015");




// Task-10
// var firstday = new Date("Jan 1,2015");
// var firstdayday = firstday.getTime();

// var day = new Date();
// var cd = day.getTime();
// var diff = cd-firstdayday;

// var diffday = diff/(1000);
// diffday = diffday.toFixed(0);

// document.write("On reference date "+firstday+" , "+ diffday + " seconds had passed since beginning of 2015");





// Task-11
//  var day = new Date();
//  var hours = day.getHours();
//  var newday = new Date();
//  newday.setHours(hours-1);
//  document.write("Current Date: "+day+"<br>");
//  document.write("1 hour ago,it was: "+newday);


// Task-12
//    var day = new Date();
//    var hours = day.getFullYear();
//    var newday = new Date();
//    newday.setFullYear(hours-100);
//    alert("Current Date: "+day+"\n100 years back,it was: "+newday);




// Task-13
//  var userage = prompt("Enter your age");
//  var d = new Date().getFullYear();
// var by = d-userage;
//  document.write("Your age is "+userage+"<br>");
//  document.write("Your birth year is "+by );


//Task-14
// var monthsNames = ["Jan", "feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// var name = "Zohaib Shah";
// var d = new Date().getMonth();
// var units = 450;
// var unitcharges = 16;
// var extracharges = 350;
// var totalcharges = units*unitcharges+extracharges;

// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: <strong>"+name+"</strong><br>");
// document.write("Month: <strong>"+monthsNames[d]+"</strong><br>");
// document.write("Number of units: <strong>"+units+"</strong><br>");
// document.write("Charges per unit: <strong>"+unitcharges+"</strong><br><br>");
// document.write("Net Amount Payable (within Due Date): <strong>"+units*unitcharges+"</strong><br>");
// document.write("Lat payment surcharge: <strong> 350 </strong><br>");
// document.write("Gross Amount Payable(afer Due Date): <strong>"+totalcharges+"</strong><br>");




//  Chapter No  35-38 

//  TASK1 -----------------------------

const dateTime = () => {
	let date = new Date();
	console.log(date);
}
// dateTime();




// Task 2 ---------------------------------

const greet = () => {
  let firstName = prompt("Enter First Name");
  let lastName = prompt("Enter Last Name");

  alert('Welcome ' + firstName + ' ' + lastName);
}




//  Task 3 --------------------------------------

const sum = () => {
  let firstNumber = prompt("Enter First Number");
  let lastNumber = prompt("Enter Last Number");
	
  let sum = Number(firstNumber) + Number(lastNumber);

  return sum;
}
// document.write(sum());



// Task 4 -------------------------------------------


// Calculator

// let num_1 = prompt('Enter number 1');
// let operator = prompt('Enter Operator');
// let num_2 = prompt('Enter number 2');

// const calc = (num1, opr, num2) => {

	
// 	if(opr === '+') {
// 		alert('Sum is: ' + num1 + num2);
// 	} else if(opr === '-') {
// 		alert('Difference is: ' + num1 - num2);
// 	} else if(opr === '*') {
// 		alert('Product is: ' + num1 * num2);
// 	} else if(opr === '/') {
// 		alert('Division is: ' + num1 / num2);
// 	} else {
// 		alert('Invalid Operator: ' + operator + ' passed as operator!');
// 	}

// }

// calc(num1, operator, num2);



// Task 5 --------------------------------------------


// var num = prompt("Enter number to be squared");

// const square = (a) => {
  
//   let square = a * a;
//   return square;
// }
// document.write(square(num));
// alert(square(num));





// Task 6 ----------------------------------------

// var input = prompt("Enter a number to calculate factorial!");

// const factorial = (num) => {

// 	if(num > 1) {
// 		return (num * factorial(num-1));
// 	}else {
// 		return 1;
// 	}

// }

// document.write(factorial(input));




//  Task 7 -----------------------------------


const counting = () => {

	var startNumber = prompt("Enter Start Number");
	var endNumber = prompt("Enter End Number");
  
  for(var i = startNumber; i < endNumber; i++ ) {
  	console.log(i);
  }


}
 counting();





//  Task 8 ---------------------------------------------

// var base = prompt("Enter Base");
// var perpendicular = prompt("Enter perpendicular");


// const calculateSquare = (b, p) => {
// 	return ((b*b) + (p*p));
// }

// const calcHypo = (b, p) => {
//  	let squaresSum = calculateSquare(b,p);
//  	let h = Math.sqrt(squaresSum);

// 	return h;
// }

// var hypo = calcHypo(base, perpendicular);
// console.log('Hypotenuse is: ', hypo);





//  Task 9 ---------------------------------------------


// var width = 20;
// var height = 30;

// const areaOfRectangle = (width, height) => {

// 	return width * height;
  
// }
// console.log('By Variables =>', areaOfRectangle(width,height));
// console.log('By Values => ' , areaOfRectangle(12, 12));





//Task 10 ----------------------------------------


const palindrome = () => {
	var word = prompt('Enter a word to check if it is a palindrome');

	let reverseWord = word.split("").reverse().join("");

	if(word == reverseWord) {
		alert(word + " is palindrom");
	} else {
		alert(word + " and " + reverseWord + " are not palindrome");
	}

}

// palindrome();




//  task 11 --------------------------------------


const capitalize = () => {
	var sentence = prompt('Enter a sentence to make its first letter in uppercase');

	var modifiedSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

	alert('original sentence ' + sentence);
	alert('capitalized sentence ' + modifiedSentence);

}

// capitalize();




//  Task 12 ---------------------------------------


function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  var longestWordValue = '';
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
		longestWord = strSplit[i].length;
		longestWordValue = strSplit[i];
     }
  }
  // console.log({longestWord});
  return longestWordValue;
}

var longest_word = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log({longest_word});




//  Task 13 --------------------------------------

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
     }
  }
  	return letter_Count;
}

console.log('Repeated word "o" in  "oll Vowels JSResourceSo.com" =>> ',char_count('Oll Vowels JSResourceSo.com', 'o'));





//  task 14 ---------------------------------------------

// var radius = prompt('Enter radius of a circle');

// const circumference = (r) => {

// 	var circumference = (2 * 22/7 * r).toFixed(2);

// 	alert('Circumference is ' + circumference);

// }


// const area = (r) => {

// 	var area = (22/7 * r * r).toFixed(2);

// 	alert('Area is ' + area);

// }

// circumference(radius);
// area(radius);







