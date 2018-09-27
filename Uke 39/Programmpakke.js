window.onload = oppstart;
function oppstart (){
    document.getElementById("knapp").onclick = vis;
}

console.log ("funskjonen fungerer");
function vis(){
    var ant = document.getElementById("ant").value;
    console.log("Sum fungerer")
    if(ant<10 && ant>=0){
        document.getElementById("result").innerHTML="Ingen rabbat, pris er: $" + ant*99;
    }else if(ant<19 && ant>=10){
        document.getElementById("result").innerHTML="10%, pris er: $" + (ant*99*0.9).toFixed(2);
    }else if(ant<49 && ant>=20){
        document.getElementById("result").innerHTML="20%, pris er: $" + (ant*99*0.8).toFixed(2);
    }else if(ant<100 && ant>=50){
        document.getElementById("result"). innerHTML="30%, pris er: $" + (ant*99*0.7).toFixed(2);
    }else if(ant>=100){
        document.getElementById("result").innerHTML="40%, pris er: $" + (ant*99*0.6).toFixed(2);
    }
                                                                    //toFixed(2) begrenser til 2 desimaler 
}
