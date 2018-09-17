window.onload = oppstart;

function oppstart(){
    document.getElementById("knapp").onclick = vis;
}

function vis() {
    var alder = document.getElementById("alder").value;
    var høyde = document.getElementById("høyde").value;
    var gutt = document.getElementById("gutt");
    var jente = document.getElementById("jente");
    if (gutt.checked == true || jente.checked == true) {
//sjekker at en av knappene er trykket på
        if (gutt.checked == true) {
            var tall= alder**2-høyde;
            console.log(tall);
        } else {
            var tall = alder*høyde-3;
            console.log(tall);
            // Hvis første ikke samsvarer med "if", så blir "else" brukt isteden 
        }
        if (tall % 2 == 0){
            /**
             * Regner ut partall eller om det er oddetall
             */ 
            document.getElementById("result").innerHTML= "Det vil gå deg godt her i verden...For at spådommen skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345"
        }else{
            document.getElementById("result").innerHTML="Stakkars deg! Alt kommer til å gå deg galt...For at spådommen ikke skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345"
        }
    } else {
        console.log("ingen kjønn");
    }
}
