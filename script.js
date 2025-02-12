let btn=document.querySelector(".btn");
let height=document.querySelector(".inph");
let weight=document.querySelector(".inpw");
let output=document.querySelector(".output");
btn.addEventListener('click',function(){
    let h=(height.value);
    let w=(weight.value);
    let ans=(w)/(h**2);
    console.log(ans);
    if(ans<18){
        output.innerHTML=ans+"-UNDERWEIGHT";
    }
    else if(ans>=18&&ans<=25){
        output.innerHTML=ans+"-NORMAL";
    }
    else{
        output.innerHTML=ans+"-OVERWEIGHT";
    }
});