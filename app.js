// ........................................ChangingCase............................................


// var a = prompt("Enter any Text");
// a=a.toUpperCase()
// console.log(a);
// alert(a);


// var a = prompt("Enter any Text");
// var b = a.slice(0,1);
// var b = b.toUpperCase();
// var c = a.slice(1);
// var c = c.toLowerCase();
// a = b+c;
// alert(a);
// console.log(a);





// ........................Strings: Measuring length and extracting parts............................




// var a = prompt("Enter Your Favourite Mobile Phone Model");
// console.log(a.length);
// alert(a.length);

// var a = prompt('Enter any text');
// console.log(a)
// var b = a.length;
// console.log(b);
// var c = a.charAt(a.length-1);
// console.log(c)
// alert(c)



// var a = "Pakistani";
// console.log(a)
// var b = a.indexOf("n");
// console.log(b);
// alert("Index of n is " + b)


// var a = prompt("Enter user name")

// for (var i = 0; i <a.length ; i++) {
//      if (a.charAt(i) === "@" || a.charAt(i) === "," || a.charAt(i) === "." ||a.charAt(i) === "!") {
//      prompt("enter a valid username")
//      break;
//      }
//      }




// var a =  "The quick brown fox jumps over the lazy dog"
// a = a.toLowerCase();
// console.log(a)
// var b = a.split(" ")
// console.log(b)
// var c = 0;     //"c is the quantity of word the"

// for(i=0 ; i<b.length ; i++){
//     if(b[i]==="the"){
//         c++
//     }
// }
// console.log(c)






// var a = "Pakistani";
// console.log(a);
// var b = a.charAt(3);
// console.log(b)



// var a = "Hyderabad"
// console.log(a);
// var b = "Islam";
// console.log(b)
// var c = b + a.slice(5) ;
// console.log(c)




// var a =  "Ali and Sami are best friends They play cricket and football together";
// console.log(a);
// var b = a.replace(/and/g,"&");
// console.log(b)







// .............................................Rounding numbers......................................





// var a = Math.abs(parseFloat(prompt("Enter any Number")));
// console.log(a)


// var a = 3.45214;
// console.log(a);
// var b = Math.round(a);
// console.log(b);
// var c = Math.ceil(a);
// console.log(c);
// var d = Math.floor(a);
// console.log(d);



// var a = -Math.abs(parseFloat(prompt("Enter any number")));
// console.log(a);


// var a = -2.678;
// console.log(a);
// var b = Math.round(a);
// console.log(b);
// var c = Math.ceil(a);
// console.log(c);
// var d = Math.floor(a);
// console.log(d);









// .....................................Generating random numbers.....................................





// var a = Math.random();
// var b = (a * 6) + 1;
// var c = Math.floor(b);

// console.log(a);
// console.log(b);
// console.log(c)
// document.write("DICE " + c)


// var a = Math.random();
// var b = (a * 2)+1;
// var c = Math.floor(b);
// console.log(a);
// console.log(b);
// console.log(c);
// document.write("Heads = 2 , Tails = 1 " + "<br>" +  c)


// var a = Math.random();
// var b = (a*10)+1;
// var c = Math.floor(b);
// console.log(b);
// console.log(c);

// var d = parseInt(prompt("Enter any number 1-10"));
// console.log(d);


// if (d==c){

//     alert("Correct! Answer")

// }
// else{
//     alert("Wrong! Answer")
// }


// var a = parseInt(prompt("Enter Weight"));
// alert(a)

// var a = parseInt(prompt("Enter your weight"));
// alert(a+"kgs")


// var a = parseFloat(prompt("Enter your weight"));
// alert(a+"kgs")

// var a = parseFloat(prompt("Enter your Weight"));
// alert(a+"kilograms")








// ...................................Converting strings to numbers, numbers to strings....................




// var a = "472";
// console.log(a);
// var b = Number(a);
// console.log(b)
// document.write(a + typeof(a) + " " +  b  + typeof(b))


// var a = 35.36;
// console.log(a)
// var b = a.toString();
// b = b.replace(".","")
// console.log(b)
// document.write(a + typeof(a) + " " + b + typeof(b))


// var a = 30/45*100;
// console.log(a)
// var b = a.toFixed(2);
// console.log(b)