// setTimeout(() => {
//     console.log("Gulzoda");
    
//   setTimeout( ()+> {
//         const newSTate.textContent = "Gulzoda";
//         document.body.appendChild(newState);
//     },5000)
// }













// let count = 0;

// const newState = document.createElement('h1')
// document.body.appendChild(newState);


// setInterval(() => {
//     count++;
//     newState.textContent = count;
//    },1000)









// const oclock = new Date();
// console.log(oclock.getHours());
// console.log(oclock.getMinutes());
// console.log(oclock.getSeconds());
// console.log(oclock.getFullYear());






// let flowers = "Gulzoda";
// console.log(flowers.length);


// console.log(flowers.padStart( , "J"));





let soat = document.querySelector("#hours");
let daqiqa = document.querySelector("#minute");
let soniya = document.querySelector("#second");

function time (){
    let now = new Date();


    soat.textContent = String(now.getHours()).padStart(2, "0");
    daqiqa.textContent = String(now.getMinutes()).padStart(2, "0");
    soniya.textContent = String(now.getSeconds()).padStart(2, "0");

}

setInterval(time,1000)

















  
   


//    let num = 1;
//    console.log(num--);
//    console.log(num--);
//    console.log(num--);

// }, 5000);

   
   
   