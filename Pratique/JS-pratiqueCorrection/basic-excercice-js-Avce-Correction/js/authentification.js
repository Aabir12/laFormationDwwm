if(prompt("ton nom") === "Ahmed"){    
  if(prompt("ton age") == 20 ){
    alert('bienvenue Ahmed')
  }else {
   alert('errur')
  }   
}else{
  alert('errur')
}

//advanced level of ahmed 😉  ;; who is ahmed ;;; it's me 


// prompt("ton nom") == "Ahmed" ? prompt('ton age') == 20 ? alert('bienvenue ahmed'): alert('erreur'): alert('erreur')



// -----------------------correction leduvic --------------------------------------------

// let fname = window.prompt("Veuillez entrer votre Prénom")
// fname = fname.toLowerCase()

// if (fname == "ludovic" || fname == "sam" || fname == "issa" || fname == "dylan" || fname == "leila" || fname == "johane" ) {
//     let age = window.prompt("Veuillez entrer votre Age")
//     age = parseInt(age)

//     if (fname == "ludovic" && age == 21) {
//         document.write("<h2>Mais Bienvenue fais comme chez toi (mais pas trop)</h2>")
//     }
//     else if (fname == "issa" && age == 20) {
//         document.write("<h2>Mais Bienvenue fais comme chez toi (mais pas trop)</h2>")
//     }
//     else if (fname == "dylan" && age == 27) {
//         document.write("<h2>Mais Bienvenue fais comme chez toi (mais pas trop)</h2>")
//     }
//     else if (fname == "leila" && age == 21) {
//         document.write("<h2>Mais Bienvenue fais comme chez toi (mais pas trop)</h2>")
//     }
//     else if (fname == "johane") {
//         document.write("<h2>Mais Bienvenue fais comme chez toi (mais pas trop)</h2>")
//     }
//     else if (fname == "sam" && age == 28469) {
//         document.write("<h2>Bienvenue dans la CIA et rien de mal va arriver :)</h2>")
//     }
//     else {
//     // document.write("<h2>Identifiants incorect : actualisez pour réessayer</h2>")
//     // window.close()
//     }
// }

// else {
//     document.write("<h2>Identifiants incorect : actualisez pour réessayer</h2>")
//     // window.close()
// }



/* correction juhane prof 

let firstname, myAge;
firstname = "Mila";
myAge = 999;

/*
SI mon age = age BDD alors :
    SI mon prénom = prenom dans la bdd :
        ->ok, les 2 sont bon
    SINON
        ->le prénom n'est pas bon
SINON
 ->mon age n'est pas bon!
*/

// 1 -- Demander son prénom à l'utilisateur avec un prompt
// let firstnameLogin = prompt("Quel est votre prénom ?");

// if (firstnameLogin === firstname) {
// 	//console.log("c'est bon pour le prénom");
// 	//Si tout est ok, je continue la vérification avec l'âge
// 	//Demande a mon utilisateur son âge via un PROMPT
// 	let ageLogin = parseInt(prompt("Votre âge ?"));

// 	if (ageLogin === myAge) {
// 		alert("Bienvenue " + firstnameLogin);
// 	} else {
// 		//Si les AGEs ne correspondent pas, je lance une ALERT.
// 		alert("Erreur d'âge");
// 	}
// } else {
// 	// Sinon, les prénoms ne correspondent pas, je lance une ALERT.
// 	alert("Attention, prénom non reconnu");
// }


