"use strict";

// switch case

// =================================== 1-misol  ===================================

// let week = +prompt("Hafta kuni (1-7): ");

// switch (week) {
//   case 1:
//     alert("Dushanba");
//     break;
//   case 2:
//     alert("Seshanba");
//     break;
//   case 3:
//     alert("Chorshanba");
//     break;
//   case 4:
//     alert("Payshanba");
//     break;
//   case 5:
//     alert("Juma");
//     break;
//   case 6:
//     alert("Shanba");
//     break;
//   case 7:
//     alert("Yakshanba");
//     break;
//   default:
//     alert("Boshqa kun yo'q ");
// }

// =================================== 2-misol  ===================================

// let bal=+prompt("Nechchi baho oldingiz (1-5): ");

// switch (bal) {
//    case 1:
//       alert("Yomon ;( ")
//            break;
//    case 2:
//       alert:("Qoniqarsiz :{")
//       break;
//    case 3:
//       alert("Qoniqarli :|")
//       break;
//    case 4:
//       alert("Yaxshi :}")
//       break;
//    case 5:
//       alert("Alo :)")
//       break;
//    default:
//       alert("Bunday baho yo'q :/ ")
// }

// =================================== 3-misol  ===================================

// let oy = +prompt("Oy raqamini kiriting: ");

// switch (oy) {
//   case 1:
//     alert("Qish");
//     break;
//   case 2:
//     alert: "Qish";
//     break;
//   case 3:
//     alert("Bahor");
//     break;
//   case 4:
//     alert("Bahor");
//     break;
//   case 5:
//     alert("Bahor");
//     break;
//   case 6:
//     alert("Yoz");
//     break;
//   case 7:
//     alert("Yoz");
//     break;
//   case 8:
//     alert("Yoz");
//     break;
//   case 9:
//     alert("Kuz");
//     break;
//   case 10:
//     alert("Kuz");
//     break;
//   case 11:
//     alert("Kuz");
//     break;
//   case 12:
//     alert("Qish");
//     break;
//   default:
//     alert("Bunday oy yo'q");
// }

// =================================== 4-misol  ===================================

// let day=+prompt("Oyda necha kun bor: ")

// switch (oy) {
//    case 1:
//      alert("31");
//      break;
//    case 2:
//      alert("28");
//      break;
//    case 3:
//      alert("31");
//      break;
//    case 4:
//      alert("30");
//      break;
//    case 5:
//      alert("31");
//      break;
//    case 6:
//      alert("30");
//      break;
//    case 7:
//      alert("31");
//      break;
//    case 8:
//      alert("31");
//      break;
//    case 9:
//      alert("30");
//      break;
//    case 10:
//      alert("31");
//      break;
//    case 11:
//      alert("30");
//      break;
//    case 12:
//      alert("31");
//      break;
//    default:
//      alert("Bunday oy yo'q");
//  }

// =================================== 5-misol  ===================================

// let amal = prompt("Amalni kiriting: ");
// let a = +prompt("Sonni kiriting: ");
// let b = +prompt("Sonni kiriting: ");

// switch (amal) {
//   case "*":
//     alert(a * b);
//     break;
//   case "/":
//     alert(a / b);
//     break;
//   case "-":
//     alert(a - b);
//     break;
//   case "+":
//     alert(a + b);
//     break;
//   default:
//     alert("amal topilmadi! ");
// }

// =================================== 6-misol  ===================================

// let baho=+prompt("Nechchi baho oldingiz (1-5): ");

//  switch (baho) {
//     case 1:
//        alert("100$ stependiya")
//             break;
//     case 2:
//        alert:("200$ stependiya")
//        break;
//     case 3:
//        alert("300$ stependiya")
//        break;
//     case 4:
//        alert("400$ stependiya")
//        break;
//     case 5:
//        alert("500$ stependiya")
//        break;
//    default:
//        alert("Chopilding!")
//  }

//  FOR LUB

// =================================== 1-misol  ===================================

//  let k =+prompt("Son kiriting: ");
//  let n=+prompt("Necha marta chiqsin: ");

// for( let i=1 ; i<=n;  i++){
//    console.log(k);
// }

// =================================== 2-misol  ===================================

// let a =+prompt(" A sonni kiriting: ");
//  let b=+prompt(" B sonni kiriting: ");

//   for( let i=b ; i<=a;  i++){
//      console.log(i);
//   }

// =================================== 3-misol  ===================================
// let a =+prompt(" A sonni kiriting: ");
// let b=+prompt(" B sonni kiriting: ");

//  for( let i=a ; i>=b;  i--){
//     console.log(i);
//  }

// =================================== 4-misol  ===================================

// for(let i=1 ; i<=10; i++){
// console.log(i+"kg",  i*10000,"so'm");
// }

// =================================== 5-misol  ===================================

// for(let i=1 ; i<=10; i++){
//    console.log(i/10+"kg", i*1000,"so'm");
// }

// =================================== 6-misol  ===================================

// for(let i=10 ; i<=20; i+=2){
//        console.log(i/10+"kg", i*1000,"so'm");
//     }

// =================================== 7-misol  =================================== 

// let yiguvchi = 0;
// let a = +prompt("aSon kiriting: ");
// let b = +prompt("bSon kirirting: ");

// for (let i = a; i <= b; i++) {
//  yiguvchi = yiguvchi +i; 
// }
// console.log(yiguvchi);

// =================================== 8-misol  ===================================

// let yiguvchi=1;
// let a=+prompt("a sonini kiriting: ");
// let a=+prompt("b sonini kiriting: ");
// for(let i=a; i<=b; i++){
//    yiguvchi*=i;
// }
// console.log(yiguvchi);

// =================================== 9-misol  ===================================

// let a=+prompt("a sonini kiriting: ");
// let b=+prompt("b sonini kiriting: ");
// let yiguvchi=0;

// for(let i=a; i<=b; i++){
//    let kvadratiga= Math.pow(i,2)
//    yiguvchi+=kvadratiga;

// }
// console.log(yiguvchi);

// =================================== 10-misol  ===================================

// let son = +prompt("enter number:");
// let numbers = 0;

// for (let i = 1; i <= son; i++) {
//   let n = 1 / i;
//   numbers = numbers + n;
// }
// console.log(numbers);

// =================================== 11-misol  ===================================

// let n=+prompt("Son kiriting: ")

// for(let i=1; i<=n; i+=2){
//    console.log(i);
// }

// =================================== 12-misol  ===================================

// let n=+prompt("Son kiriting: ")

//  for(let i=2; i<=n; i+=2){
//     console.log(i);
//  }

// =================================== 13-misol  ===================================

//  let number=+prompt("Son kiriting: ");

//  for(let i=1 ; i<=number ; i++){
//  if(number % i==0){
//     console.log(i)
//  }else{

//  }
//  }

// =================================== 14-misol  ===================================

// let number=+prompt("Son kiriting: ");

//  for(let i=1 ; i<=number ; i++){

//    if(i % 2==0){
//       console.log(i**2,"juft")
//    }else{
//       console.log(i**2 ,"toq")
//    }

//  }

// =================================== 15-misol  ===================================

// let number=+prompt("Son kiriting: ");

// for(let i=number; i>=0; i-- ){
//    console.log(i);
// }

// =================================== 16-misol  ===================================

// let number=+prompt("Son kiriting: ");

// for(let i=0 ; i<=number; i++){
//   i % 5==0 ? console.log() : console.log(i)
// }

// =================================== 17-misol  ===================================

// let n =+prompt("enter number: ");
// let yiguvchi = 1;
// for (let i = 1; i <= n; i++) {
//   yiguvchi *= i;
// }
// console.log(yiguvchi);

// =================================== 18-misol  ===================================

// =================================== 19-misol  ===================================

// =================================== 20-misol  ===================================

// let n=+prompt("Son kiriting: ");
// let x=+prompt("Shu songa bo'linadi: ");

// for(let i=1; i<=n; i++){
//    if(i % x==0){
 //  console.log(i);
//    }else{
//       
//    }
// }

// =================================== 21-misol  ===================================
// =================================== 24-misol  ===================================
// =================================== 25-misol  ===================================


// let a=+prompt("Qancha puling bor? : ");

// let dollar=(500+250)*10650.34
// let yevro =120*11650.03

// let summa=(dollar+yevro);

// if(a>summa){
// document.getElementById('white_way').textContent="Oq yo'l, Alisher!"
// }else{
//    document.getElementById('black_way').textContent="Alisher, ozgina sabr qil!"
// }
