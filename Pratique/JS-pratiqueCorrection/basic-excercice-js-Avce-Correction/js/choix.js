let theName;
let DemandName = window.prompt('Pierre ou Feuille ou Ciseaux');   
let randomNumber = Math.floor(Math.random()*9) 
if(randomNumber <= 3){
    theName = 'Pierre';
}else if (randomNumber <= 6){
    theName = 'Feuille' ;
}else {
    theName = 'Ciseaux' ;
}
if (DemandName === 'Pierre' && theName === 'Ciseaux' || DemandName === 'Feuille' && theName === 'Pierre' || DemandName === 'Ciseaux' && theName === 'Feuille' ){
    alert(`vous avez gagné ;; j'ai choisi ${theName}`)
}else {
    alert(`vous avez perdu ;; j'ai choisi ${theName}`)
}










// --------------------------------------------------------------------correction johane ----------------------------------------------
// let userChoice;
// let computerChoice;
// let randomChoice = Math.floor(Math.random() * 3);
// // Math.random => génère un chiffre compris entre 0 et 1
// // Math.floor => arrondi à l'entier inférieur soit ici = 0
// // * 3 => multiplie x 3 les possibilités de choix (0, 1, 2)
// let resultMessage = "";
// console.log(Math.floor(Math.random()) * 3);

// while (true) {
// 	userChoice = prompt(
// 		"Entrez votre choix (pierre, feuille, ciseaux) :",
// 	).toLowerCase();
// 	if (
// 		(userChoice === "pierre" ||
// 			userChoice === "feuille" ||
// 			userChoice === "ciseaux") &&
// 		isNaN(userChoice)
// 	) {
// 		break;
// 	} else {
// 		alert("Choix invalide, veuillez entrer pierre, feuille ou ciseaux.");
// 	}
// }

// if (randomChoice === 0) {
// 	computerChoice = "pierre";
// } else if (randomChoice === 1) {
// 	computerChoice = "feuille";
// } else {
// 	computerChoice = "ciseaux";
// }

// resultMessage = `Ordinateur a choisi : ${computerChoice} et vous ${userChoice}`;

// if (userChoice === computerChoice) {
// 	resultMessage += "C'est un match nul !";
// } else if (
// 	(userChoice === "pierre" && computerChoice === "ciseaux") ||
// 	(userChoice === "feuille" && computerChoice === "pierre") ||
// 	(userChoice === "ciseaux" && computerChoice === "feuille")
// ) {
// 	resultMessage += "Vous avez gagné !";
// } else {
// 	resultMessage += "Dommage! Vous avez perdu.";
// }

// alert(resultMessage);










// --------------------------------------------------------------correction ledo-----------------------------------------------------------------

// let win = 0;
// let lose = 0;

// while (true) {
    
//     let pchoice = window.prompt("Pierre, Feuille ou Ciseaux ? >:)")
//     pchoice = pchoice.toLowerCase()
//     let rchoice = Math.floor(Math.random() * 3)

//     if (pchoice == "pierre"|| pchoice == "feuille" || pchoice == "ciseaux") {
//         if (pchoice == "pierre") {
//             if (rchoice == 1) {
//                 alert("Perdu, +1 pour l'ordinateur");
//                 ++ lose; 
//                 console.log(`win : ${win}`);
//                 console.log(`lose : ${lose}`);               
//             } else if (rchoice == 2 ) {
//                 alert("Gagné, +1 pour toi");
//                 ++ win;
//                 console.log(`win : ${win}`);
//                 console.log(`lose : ${lose}`);
//             } else {
//                 alert("égalité");
//             }
            
//         }
//         else if (pchoice == "feuille") {
//             if (rchoice == 2) {
//                 alert("Perdu, +1 pour l'ordinateur");
//                 ++ lose;
//                 console.log(`win : ${win}`);
//                 console.log(`lose : ${lose}`);
//             } else if (rchoice == 0 ) {
//                 alert("Gagné, +1 pour toi");
//                 ++ win;
//                 console.log(`win : ${win}`);
//                 console.log(`lose : ${lose}`);
//             } else {
//                 alert("égalité");
//             }
            
//         }
//         else if (pchoice == "ciseaux") {
//             if (rchoice == 0) {
//                 alert("Perdu, +1 pour l'ordinateur");
//                 ++ lose;
//                 console.log(`win : ${win}`);
//                 console.log(`lose : ${lose}`);
//             } else if (rchoice == 1 ) {
//                 alert("Gagné, +1 pour toi");
//                 ++ win;
//                 console.log(`win : ${win}`);
//                 console.log(`lose : ${lose}`);
//             } else {
//                 alert("égalité");
//             }
            
//         }
//     } else {
//         alert("Invalid input")
//     }
//     if (win == 3) {
//         document.write(`<h2>BRAVO, tu as gagné !!!</h2><h3>Player : ${win}</h3><h3>Com. : ${lose}</h3>`)
//         break;
//     } else if (lose == 3) {
//         document.write(`<h2>DOMMAGE, tu as perdu...</h2><h3>Player : ${win}</h3><h3>Com. : ${lose}</h3>`)
//         break;
//     }
// }