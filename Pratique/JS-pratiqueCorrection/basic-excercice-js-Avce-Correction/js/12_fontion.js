

let comChoice;
let DemandName; 
let randomNumber;
let gagne=0;
let perte= 0;

function btnRockPaperSe() {
    while (true) {
        randomNumber = Math.floor(Math.random()*3)
        DemandName = prompt("Entrez votre choix (pierre, feuille, ciseaux) :").toLowerCase();
        
        if(DemandName === 'pierre' ||DemandName === 'feuille' ||DemandName === 'ciseaux'){
            
        if(randomNumber === 0){
            comChoice = 'pierre'
        }else if (randomNumber === 1){
            comChoice = 'feuille'
        }else{
            comChoice = 'ciseaux'
        }
        resultMessage = `Ordinateur a choisi : ${comChoice} et vous ${DemandName}`;

        if (DemandName === comChoice) {
        	resultMessage += "C'est un match nul !";
        } else if (
        	(DemandName === "pierre" && comChoice === "ciseaux") ||
        	(DemandName === "feuille" && comChoice === "pierre") ||
        	(DemandName === "ciseaux" && comChoice === "feuille")
        ) {
        	resultMessage += "Vous avez gagné !";
            gagne++
        } else {
        	resultMessage += "Dommage! Vous avez perdu.";
            perte++
        }

        if(gagne == 5 ){
             document.get(`<h2>BRAVO, tu as gagné !!!</h2><h3>Player : ${gagne}</h3><h3>Com. : ${perte}</h3>`)
            break
            
        }else if( perte == 5){
            let paragra = document.getElementById("para");
            paragra.inn
            //  document.getElementsByClassName("paragraph").(`<h2>BRAVO, tu as gagné !!!</h2><h3>Player : ${gagne}</h3><h3>Com. : ${perte}</h3>`)
            // break
        }
        alert(resultMessage);
        }else{
            alert("Choix invalide, veuillez entrer pierre, feuille ou ciseaux.")
        }
        
        
        
    }



}
