document.querySelector("#button")
.addEventListener("click",function(){
    if(Math.random() <= 0.1){
        alert("ピカチュウをゲットした！");
    }else{
        alert("ざんねん！もう少しでつかまえられたのに！");
    }
})