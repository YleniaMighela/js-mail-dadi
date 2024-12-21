// Mail
// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for


// Creare un lista di email per la festa

const emailList = ["leonardo@gmail.com", "andrea@gmail.com",
    "marco@gmail.com", "simona@gmail.com","ylenia@gmail.com","flavio@gmail.com",
    "manuel@gmail.com",];
    
    console.log(emailList);
    
    
    
    // Chiedere all'utente la sua email
    
    let userMail = prompt("Inserisci la tua email");
    console.log(userMail);
    
    // Variabile email 
    let correctMail = false;
    
    // SE l'email è presente all'interno della lista
    
    for  (let i = 0; i <= emailList.length; i++){
        
        if( emailList[i] === userMail) {
           correctMail = true;
            
         
        }
        
    }
      //  OUTPUT
    // stamperà la sua conferma  alla festa

    if (correctMail === true) {
        console.log("Puoi accedere alla festa");
    }


 // ALTRIMENTI verrà scartata
    else{
        console.log("Non puoi accedere alle festa");
        
    }

  
    
   