window.onload = oppstart;
var antLiter;

function oppstart(){
    document.getElementById("bensinKnapp").onclick = bensin;
    document.getElementById("dieselKnapp").onclick = diesel;

}

function bensin(){
    antLiter=document.getElementById("Liter").value;
    console.log ("Funskjonen bensin fungerer");
    if(antLiter>80){
        document.getElementById("tilbakemelding").innerHTML = "Du tastet inn over 80L. Tanken din er ikke stor nok";
    }
    console.log(antLiter);
}


function diesel(){
    console.log("funksjonen diesel fungerer");
}
