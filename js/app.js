'use strict'
let first=prompt('what is your name?')

alert('welcome to our website '+ first +'hopefully you will like our website!')
alert('so me and you '+first+'can connect more i suggest we play a game!')

// question 1
let qone=prompt('guess the following: "my favourite animals are Bears"   (yes/y no/n)'). toLowerCase();
if (qone == 'yes' || qone == 'y'){
    alert('correct, i love how big and strong they are!')
    // console.log(1st question guessed correctly)
} else if(qone == 'no' || qone == 'n'){
 alert('i actually love bears, good luck with the rest of the questions')
}

// question 2
let qtwo=prompt('guess the following: "i cheer manchester united as my soccer team"   (yes/y no/n)'). toLowerCase();
if (qtwo == 'no' || qtwo == 'n'){
    alert('I have always been a huge fan for Real madrid !')
    // console.log(2nd question guessed correctly)
} else if(qtwo == 'yes' || qtwo == 'y'){
    alert('i hate man Utd!  good luck with the rest of the questions')
}

// question 3
let qthree=prompt('guess the following: "i live in japan"   (yes/y no/n)'). toLowerCase();
if (qthree == 'no' || qthree == 'n'){
    alert('jordan is where i live!')
    // console.log(3rd question guessed correctly)
} else if(qthree == 'yes' || qthree == 'y'){
    alert('soon.')
}

// question 4
let qfour=prompt('guess the following: "i drive a BMW"   (yes/y no/n)'). toLowerCase();
if (qfour == 'no' || qfour == 'n'){
    alert('I actually like compact cars thats why i have a Golf!')
    // console.log(4th question guessed correctly)
} else if(qfour == 'yes' || qfour == 'y'){
    alert('one day!')
}


// question 5
let qfive=prompt('guess the following: "spongebob is the greatest cartoon of all time"   (yes/y no/n)'). toLowerCase();
if (qfive == 'yes' || qfive == 'y'){
    alert('ayy ayy captain!')
    // console.log(5th question guessed correctly)
} else if(qfive == 'no' || qfive == 'n'){
    alert('im pretty sure it is!')
}

alert('thank you '+ first+' for using our website hopefully you will have a wonderful day today and we cant wait to see you again!')