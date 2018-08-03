var myletters = ["a", "b", "c", "d", "e", "f", "g", "h" , "i" , "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

var winCount = 0;
var lossCount = 0;
var guessLeft = 9;

document.onkeyup = function (event) {
    
    var userGuess = event.key.toLowerCase();
    console.log (userGuess);
    var computerGuess = myletters[Math.floor(Math.random()* myletters.length)];
    console.log (computerGuess);


    if ((userGuess.length === 1) && (userGuess>='a') && (userGuess<='z')) {


        document.querySelector("#letterguess").innerHTML += userGuess + ",";
        
        if (userGuess === computerGuess) {
            winCount++;
            document.querySelector("#wincount").innerHTML =  winCount;
            guessLeft = 9;
            document.querySelector("#guessleft").innerHTML =  guessLeft;
            document.querySelector("#letterguess").innerHTML =  "";
            

        console.log (winCount);

        } 
        
        else { 


            if (guessLeft<=1) {

                lossCount++;
                document.querySelector("#losscount").innerHTML =  lossCount;
                guessLeft = 9;
                document.querySelector("#guessleft").innerHTML =  guessLeft;
                document.querySelector("#letterguess").innerHTML =  "";

            }

            else {
                guessLeft--;
                document.querySelector("#guessleft").innerHTML =  guessLeft;
            }
        

        }

    }
        
    else {
           
        alert ("Please enter a valid letter");
        return;

    }

    


}


