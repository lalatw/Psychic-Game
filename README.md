# Psychic-Game
Assignment_Psychic-Game

# Link to deployed site
https://lalatw.github.io/Psychic-Game/


# Images
![Psychic Game Assignment](/assets/images/screenshot.png) 

# Technology used
* html
* css
* javascript


# Code snippets


```


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




```


# Learning points
* Use javascript to add or change the desired behavior of web page.
* Apply variables to store data values.
* Apply "if, else" to specify conditional statements.




# Author 
[Shuhan Laura Lee](https://lalatw.github.io/Psychic-Game/)



# License
Standard MIT License
