let timer=60;
let score=0;
let hitNum=0;

function incScore(){
    score += 10;
    document.querySelector("#incScore").textContent=score;

}


function hitVal(){
     hitNum=Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=hitNum;
}

function makeBubble(){
    let clutter="";

for(let i=1;i<=60;i++){
    let num=Math.floor(Math.random()*10)
    clutter +=`<div class="elem">${num}</div>`
}
document.querySelector(".pbtm").innerHTML=clutter;


}


function runTime(){
    let timerint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent=timer;
        }else{
            clearInterval(timerint);
            document.querySelector(".pbtm").innerHTML=`<h1>Game Over</h1>`
        }
        
    },1000);

   
}

document.querySelector(".pbtm").addEventListener("click",function(dets){
    let clickedNum=Number(dets.target.textContent);
    if(hitNum==clickedNum){
        incScore();
        hitVal();
        makeBubble();
    }
})


makeBubble();
runTime();
hitVal();

