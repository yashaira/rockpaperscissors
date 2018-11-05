// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


var computer_input= Math.floor((Math.random() * 3) + 1)

$("#shoot").click(function() { 
    var user_input = $("#input").val(); 
$("#userChoice").text(user_input);

 if(computer_input==1){
 computer_input="rock";
}
else if (computer_input==2){
 computer_input="paper";
}
else{ 
    computer_input= "scissors"; 
}

$("#computerChoice").text(computer_input); 

});


// DOCUMENT READY FUNCTION BELOW

