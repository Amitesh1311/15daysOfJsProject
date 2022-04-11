const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
    // console.log("working");
    //get random element from colors array

    const randomNumber=getRandom();
    //console.log(randomNumber);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
});

function getRandom(){

    return Math.floor(Math.random()*colors.length);

}