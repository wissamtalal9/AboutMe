'use strict'
// let first=prompt('what is your name?');

// alert('welcome to our website '+ first +' hopefully you will like our website!');
// alert('so me and you '+first+' can connect more i suggest we play a game!');

function NameUser(parm1){
let userinput = prompt(parm1);
console.log(userinput);
return userinput;
}
let firstname = NameUser('Please Enter your first name');
let lastname = NameUser('Please Enter your last name');
console.log(firstname,lastname);


// score counter
let scrCtr=0;


// Question 1
function question1(q1){
    let q11 = prompt(q1);
    console.log(q11);
    if(q11 == 'yes' || q11 == 'y'){
        alert('correct, i love how big and strong they are!');
        scrCtr++
    }
    else if (q11 == 'no' || q11 == 'n'){
        alert('i actually love bears, good luck with the rest of the questions')
    }

            else{
                alert('please only answer with yes or no');
                let que1 = question1('guess the following: "my favourite animals are Bears"   (yes/y no/n)')

            }
    }
    let que1 = question1('guess the following: "my favourite animals are Bears"   (yes/y no/n)');


// Question 2
function question2(q2){
    let q22 = prompt(q2);
    console.log(q22);
    if(q22 == 'yes' || q22 == 'y'){
        alert('i hate man Utd!  good luck with the rest of the questions');
    }
    else if (q22 == 'no' || q22 == 'n'){
        alert('I have always been a huge fan for Real madrid !')
        scrCtr++

    }

            else{
                alert('please only answer with yes or no');
                let que2 = question2('guess the following: "i cheer manchester united as my soccer team"   (yes/y no/n)');

            }
    }
    let que2 = question2('guess the following: "i cheer manchester united as my soccer team"   (yes/y no/n)');

// Question 3
function question3(q3){
    let q33 = prompt(q3);
    console.log(q33);
    if(q33 == 'yes' || q33 == 'y'){
        alert('soon.');
    }
    else if (q33 == 'no' || q33 == 'n'){
        alert('jordan is where i live!')
        scrCtr++
    }
            else{
                alert('please only answer with yes or no');
                let que3 = question3('guess the following: "i live in japan"   (yes/y no/n)');

            }
    }
    let que3 = question3('guess the following: "i live in japan"   (yes/y no/n)');


    // Question 4
function question4(q4){
    let q44 = prompt(q4);
    console.log(q44);
    if(q44 == 'yes' || q44 == 'y'){
        alert('one day!');
    }
    else if (q44 == 'no' || q44 == 'n'){
        alert('I actually like compact cars thats why i have a Golf!')
        scrCtr++
    }
            else{
                alert('please only answer with yes or no');
                let que4 = question4('guess the following: "i drive a BMW"   (yes/y no/n)');

            }
    }
    let que4 = question4('guess the following: "i drive a BMW"   (yes/y no/n)');

      // Question 5
function question5(q5){
    let q55 = prompt(q5);
    console.log(q55);
    if(q55 == 'yes' || q55 == 'y'){
        alert('ayy ayy captain!');
        scrCtr++

    }
    else if (q55 == 'no' || q55 == 'n'){
        alert('im pretty sure it is!')
    }
            else{
                alert('please only answer with yes or no');
                let que5 = question5('guess the following: "spongebob is the greatest cartoon of all time"   (yes/y no/n)');

            }
    }
    let que5 = question5('guess the following: "spongebob is the greatest cartoon of all time"   (yes/y no/n)');


        // Question 6
function question6(q6){
    let q66 = prompt(q6);
    console.log(q66);
    if(q66 <'69'){
        alert('ayy ayy captain!');
        let que6 = question6('guess the number between 1-100');

    }
    else if( q66 >69){
        alert('too high');
        let que6 = question6('guess the number between 1-100');

    }
    else if (q66 == 'no' || q66 == 'n'){
        alert('im pretty sure it is!')
    }
            else if(q66 =='69'){
                alert('well done');
                scrCtr++;
               // break;
            }
    }
    let que6 = question6('guess the number between 1-100');

       // Question 7
function question7(q7){
    let q77 = prompt(q7);
    console.log(q77);

    for (let k=0; k<5 ; k++){
        if (box[q7] == 'r'){
            alert('you found the rabbit!');
            scrCtr++;
            //break;
        }
    else if (box[q7] == 'c'){
        alert('nope thats a carrot');
        let que7 = question7('in a mystery box with 20 items in it can you find one of the 4 bunnies? enter 1-20');
    }

        
    }
}
    let box=['c','c','c','c','r','c','c','c','r','c','c','c','r','c','c','c','r','c','c','c'];
    let que7 = question7('in a mystery box with 20 items in it can you find one of the 4 bunnies? enter 1-20');




    // score counter
//let scrCtr=0;

//question 1
// let qone=prompt('guess the following: "my favourite animals are Bears"   (yes/y no/n)'). toLowerCase();
// if (qone == 'yes' || qone == 'y'){
//     alert('correct, i love how big and strong they are!');
//     scrCtr++
//     // console.log(1st question guessed correctly)
// } else if (qone == 'no' || qone == 'n'){
//  alert('i actually love bears, good luck with the rest of the questions')}
//  else {
// alert('please only answer with yes or no');
// qone=prompt('guess the following: "my favourite animals are Bears"   (yes/y no/n)'). toLowerCase();

//  }


// question 2
// let qtwo=prompt('guess the following: "i cheer manchester united as my soccer team"   (yes/y no/n)'). toLowerCase();
// if (qtwo == 'no' || qtwo == 'n'){
//     alert('I have always been a huge fan for Real madrid !');
//     scrCtr++
//     // console.log(2nd question guessed correctly)
// } else if(qtwo == 'yes' || qtwo == 'y'){
//     alert('i hate man Utd!  good luck with the rest of the questions')
// } else {
//     alert('please only answer with yes or no');
//     qtwo=prompt('guess the following: "i cheer manchester united as my soccer team"   (yes/y no/n)'). toLowerCase();}

// question 3
// let qthree=prompt('guess the following: "i live in japan"   (yes/y no/n)'). toLowerCase();
// if (qthree == 'no' || qthree == 'n'){
//     alert('jordan is where i live!');
//     scrCtr++
//     // console.log(3rd question guessed correctly)
// } else if(qthree == 'yes' || qthree == 'y'){
//     alert('soon.')
// } else {
//     alert('please only answer with yes or no');
//     qthree=prompt('guess the following: "i live in japan"   (yes/y no/n)'). toLowerCase();}

// question 4
// let qfour=prompt('guess the following: "i drive a BMW"   (yes/y no/n)'). toLowerCase();
// if (qfour == 'no' || qfour == 'n'){
//     alert('I actually like compact cars thats why i have a Golf!');
//     scrCtr++
//     // console.log(4th question guessed correctly)
// } else if(qfour == 'yes' || qfour == 'y'){
//     alert('one day!')
// } else {
//     alert('please only answer with yes or no');
//     qfour=prompt('guess the following: "i drive a BMW"   (yes/y no/n)'). toLowerCase();}


// question 5
// let qfive=prompt('guess the following: "spongebob is the greatest cartoon of all time"   (yes/y no/n)'). toLowerCase();
// if (qfive == 'yes' || qfive == 'y'){
//     alert('ayy ayy captain!');
//     scrCtr++
//     // console.log(5th question guessed correctly)
// } else if(qfive == 'no' || qfive == 'n'){
//     alert('im pretty sure it is!')
// } else {
//     alert('please only answer with yes or no');
//     qfive=prompt('guess the following: "spongebob is the greatest cartoon of all time"   (yes/y no/n)'). toLowerCase();}


// question 6
// let qsix=prompt('guess the number between 1-100')
// for (let i=0; i<3 ; i++){
//     if (qsix < '69'){
//         alert('too low');
//         qsix=prompt('guess the number between 1-100');
//     }
//     else if(qsix>'69'){
//         alert('too high');
//         qsix=prompt('guess the number between 1-100');
//     }
//     else if (qsix == '69'){
//         alert('well done');
//         scrCtr++;
//         break;
//     }
// }


// question 7
// let box=['c','c','c','c','r','c','c','c','r','c','c','c','r','c','c','c','r','c','c','c'];
// let qseven=prompt('in a mystery box with 20 items in it can you find one of the 4 bunnies? enter 1-20')
// for (let k=0; k<5 ; k++){
   
//     if (box[qseven] == 'r'){
//         alert('you found the rabbit!');
//         scrCtr++;
//         break;
//     }
//     else if (box[qseven] == 'c'){
//         alert('nope thats a carrot');
//         qseven=prompt('in a mystery box with 20 items in it can you find one of the 4 bunnies? enter 1-20')
//     }}


alert(firstname+' '+lastname + ` you scored ${scrCtr} out of 7`)
alert('thank you ' + firstname +' for using our website hopefully you will have a wonderful day today and we cant wait to see you again!');