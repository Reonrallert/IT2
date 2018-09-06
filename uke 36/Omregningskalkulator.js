window.onload = oppstart;

function oppstart(){
    document.getElementById("antallId").onchange = beregn;

}

var antallPersoner;
var antallLiter; 
    function beregn(){
        console.log("Funkjsonen beregn fungerer");
        antallPersoner = document.getElementById("antallId").value;
        antallLiter = document.getElementById("literId").value;
        console.log("Antall personer er:"+antallPersoner+"Antall liter er:"+antallLiter);
    var ulslippCO2 = 2500 * antallLiter
    var utslippCO2PrPers = utslippco2/antallPersoner
    document.getElementById("utslipp").innerHTML = "Utslipp pr person:" + utslippCO2PrPers
        
    }


