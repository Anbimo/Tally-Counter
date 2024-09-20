var score=document.getElementById("display")
var b3 = document.getElementById('btn3');
var b4 = document.getElementById('btn4');
var p = document.getElementById('p')
 s=0

function i(){
    s++;
    score.innerText=s;
}


function a(){
   s--;
    score.innerText=s;
}

function b(){
    score.innerText=s=0;
}
 

function m(){
    p.style.color="White"
    score.style.color="White";
	document.body.style.background="Black";
}


function l(){
    p.style.color="Black"
    score.style.color="Black";
	document.body.style.background="White";
}

