let jour1 = "lundi";
let jour2 = "mardi";
let jour3 = "mercredi";
let jour4 = "jeudi";
let jour5 = "vendredi";
let jour6 = "samedi";
let jour7 = "dimanche";

let showPromt = (window.prompt("mettez le jour "));
if (showPromt == null){
    alert("make sure that you write")
}

showPromt =showPromt.toLowerCase();
// if (showPromt === jour1 || showPromt === jour2 || showPromt === jour3 || showPromt === jour4 || showPromt === jour5 || showPromt === jour6 || showPromt === jour7){
//     alert(showPromt)
    
// }else{
//     alert(make )
// }

if(showPromt === jour1){
    alert(` le jour suivant est ${jour2}`)
}else if (showPromt === jour2){
     alert(` le jour suivant est ${jour3}`)
}else if (showPromt === jour3){
     alert(` le jour suivant est ${jour4}`)
}else if (showPromt === jour4){
     alert(` le jour suivant est ${jour5}`)
}else if (showPromt === jour5){
     alert(` le jour suivant est ${jour6}`)
}else if (showPromt === jour6){
     alert(` le jour suivant est ${jour7}`)
}else if (showPromt === jour1){
     alert(` le jour suivant est ${jour3}`)
}else {
    alert("make sure that you write the coorect")
}






// --------------------the coorection -------------------------------
// let result = window.prompt("Veuillez entrer un jour de la semaine svp / Please enter desired day")
// result = result.toLowerCase();

// if (result == "lundi") {
//     document.write("<h2>Demain il sera Mardi</h2>")
// } else if (result == "monday") {
//     document.write("<h2>It'll be Tuesday tomorrow</h2>")
// }

// else if (result == "mardi") {
//     document.write("<h2>Demain il sera Mercredi</h2>")
// } else if (result == "tuesday") {
//     document.write("<h2>It'll be Wednesday tomorrow</h2>")
// }

// else if (result == "mercredi") {
//     document.write("<h2>Demain il sera Jeudi</h2>")
// } else if (result == "wednesday") {
//     document.write("<h2>It'll be Thursday tomorrow</h2>")
// }

// else if (result == "jeudi") {
//     document.write("<h2>Demain il sera Vendredi</h2>")
// } else if (result == "thursday") {
//     document.write("<h2>It'll be Friday tomorrow</h2>")
// }

// else if (result == "vendredi") {
//     document.write("<h2>Demain il sera Samedi</h2>")
// } else if (result == "friday") {
//     document.write("<h2>It'll be Saturday tomorrow</h2>")
// }

// else if (result == "samedi") {
//     document.write("<h2>Demain il sera Dimanche</h2>")
// } else if (result == "saturday") {
//     document.write("<h2>It'll be Sunday tomorrow</h2>")
// }

// else if (result == "dimanche") {
//     document.write("<h2>Demain il sera Lundi</h2>")
// } else if (result == "sunday") {
//     document.write("<h2>It'll be Monday tomorrow</h2>")
// }

// else {
//     document.write("<h2>Veuillez entrer un nom de jour valide!</h2> <h3>(Lundi/Mardi/Mercredi/Jeudi/Vendredi/Samedi/Dimanche)</h3> <h2>Please enter a valid day name!</h2> <h3>(Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday)</h3>")
// }