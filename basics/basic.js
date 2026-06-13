// document.querySelector("#button")
// .addEventListener("click",function(){
//     if(Math.random() <= 0.1){
//         alert("ピカチュウをゲットした！");
//     }else{
//         alert("ざんねん！もう少しでつかまえられたのに！");
//     }
// })



const array = ["a", "b", "c"];
array.push("c");
array.push("b");
console.log(array.join("").replaceAll("b", "a"));


Promise

for (let i = 0; i < 3; i++) {
    console.log(i)
};