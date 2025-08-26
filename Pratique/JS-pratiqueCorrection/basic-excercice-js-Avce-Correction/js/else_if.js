


// for(let myCurrentAmount = 1000; myCurrentAmount <= 2000 ; myCurrentAmount += 50){
//     document.write(`<p style='color:purple'>the number ${myCurrentAmount}</p>`)
// }




// let my= 1000; 
//  document.write(`<p style='color:purple'>my current amount  ${my}</p>`)
// let etape = 0;

// do{ 
//         my+= 50;
//         document.write(`<p style='color:purple'>the number ${my}</p>`)                   
//         ++etape;
//     }while(my < 2000)  
// document.write(`<p style='color:purple'>total month ${etape}</p>`)  







// let  myCompte = 1000 ; 

// document.write(`j'ai ${myCompte}`)


// let etapeMois = 0;

// while (myCompte < 2000){

//     // etapeMois ++

//     // myCompte = myCompte + 50 ; 
//     myCompte += 50 ;
//     document.write(`<p>apres ce mois jen ai => ${myCompte}</p>`) ;
// }
// document.write(`<p>totols mois => ${etapeMois}</p>`) ;

//      ++etapeMois
    
    
    


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    



    
    
    
    
    


    
    
    
        let myEuro = 1000;
    
        document.write(`<p style='color:red; font-size: 45px; text-align: center'>my current amount <span style="color: black; font-style: italic; font-family: Arial, Helvetica, sans-serif; text-decoration: underline;">${myEuro}</span> </p>`)
        let etape = 0;
        while(myEuro < 2000){
               
            ++etape;
            document.write(`<p style='color:blue ; margin-bottom: -20px'>your are in   <span style="color: black; font-style: italic; font-family: Arial, Helvetica, sans-serif; text-decoration: underline;">${etape}</span> month</p>`)
            myEuro += 50 ; 
            // myEuro = myEuro + 50
            document.write(`<h2 style='color:purple'>and the money you have <span style="color: blue; font-style: italic; font-family: Arial, Helvetica, sans-serif; text-decoration: underline;">${myEuro}€</span></h2>`)
        }
    
        document.write(`<p style="text-align: center; color: tomato; text-shadow: 4px 4px 10px black; font-size: 35px">you need   ${etape} month to reach ${myEuro} €</p>`)
    
    














        // ------------------------------leduvic --------------------------------------------

    // let account = 1000;
    // let month = 0

// while (account <= 2000) {
//     document.write(`<h3>Vous avez :</h3><h2>${account} €</h2><h3>Vous êtes actuellement au mois n°${month}</h3>`);
//     account += 50;
//     ++ month;
//     if (account == 2050) {
//         document.write(`<h3>YOU DID IT !!!</h3>`);
//     } 
// }

// while (account < 10000 && account > 0) {
//     document.write(`<h3>Vous avez :</h3><h2 style="color: green;">${account} €</h2><h3>Vous êtes actuellement au mois n°${month}</h3>`);
//     let ppower = Math.floor(Math.random() * (1000 + 1)) 
//     let apport = 500 - ppower
//     account += apport;
//     ++ month;
//     if (account >= 10000) {
//         let year = month / 12
//         year = parseInt(year)
//         document.write(`<h3>Vous avez :</h3><h2 style="color: green;">${account} €</h2><h3 style="color: blue;">YOU DID IT !!!</h3> <h3>Au bout de ${year} ans</h3>`);
//     } else if (account <= 0) {
//         document.write(`<h3 style="color: red;">Awww... je suis désolé, better luck next time</h3>`);
//     } 
// }

// while (true) {
//     document.write(`<h3>Vous avez :</h3><h2>${account} €</h2><h3>Vous êtes actuellement au mois n°${month}</h3>`);
//     let ppower = Math.floor(Math.random() * (100 + 1)) 
//     let apport = 50 - ppower
//     account += apport;
//     ++ month;
//     if (account >= 2050) {
//         document.write(`<h3>YOU DID IT !!!</h3>`);
//         break;
//     } else if (account <= 0) {
//         document.write(`<h3>BAHAHAHA LOSER !!!</h3>`);
//         break;
//     } 
// }


