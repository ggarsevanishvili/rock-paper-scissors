let languageChoice = Number(prompt(`
Welcome to the game: Rock paper scissors \nკეთილი იყოს თქვენი მობრძანება თამაშში: ჯეირანი \n
For English, dial 1 \nქართული ენის ასარჩევად აკრიფეთ 2 \n
`))

while (languageChoice !==1 && languageChoice !==2) {
    alert(`
Invalid input! Enter only: \nდაფიქსირდა შეცდომა! შეიყვანეთ მხოლოდ:

For English 1.\nქართულისთვის 2.\n`)
languageChoice = Number(prompt(`
Welcome to the game: Rock paper scissors \nკეთილი იყოს თქვენი მობრძანება თამაშში: ჯეირანი \n
For English, dial 1 \nქართული ენის ასარჩევად აკრიფეთ 2 \n
   `))
}


if (languageChoice === 1) {
    const items = ["rock", "paper", "scissors"]; // Array creation and element addition
alert(`
Choice rock, paper, or scissors. 
rock = 1 
paper = 2 
scissors = 3`);

let userPoint = 0;
let computerPoint = 0;
let result;

while (userPoint < 10 && computerPoint < 10 || userPoint === computerPoint) {
  let randomChoiceComputer = Math.floor(Math.random() * items.length); // generate random number for computer choice
  let randomChoiceUser;

  do {
    randomChoiceUser = parseInt(prompt("Make your choice (1 for rock, 2 for paper, 3 for scissors)"));
    if (randomChoiceUser < 1 || randomChoiceUser > 3 || isNaN(randomChoiceUser)) {
      alert("Invalid input! Please choose 1, 2, or 3.");
    }
  } while (randomChoiceUser < 1 || randomChoiceUser > 3 || isNaN(randomChoiceUser));

  let userChoice = items[randomChoiceUser - 1];  
  let computerChoice = items[randomChoiceComputer];

  if (randomChoiceUser === randomChoiceComputer + 1 || (randomChoiceUser === 1 && randomChoiceComputer === 2)) {
    userPoint += 2;
    alert(`You won this round and get 2 points!\n
Your choice: ${userChoice} (You: ${userPoint} point)
Computer's choice: ${computerChoice} (Computer: ${computerPoint} point)`);
  } else if (randomChoiceUser === randomChoiceComputer) {
    userPoint++;
    computerPoint++;
    alert(`It's a draw! Both players get 1 point.\n 
Your choice: ${userChoice} (You: ${userPoint} point)
Computer's choice: ${computerChoice} (Computer: ${computerPoint} point)`);
  } else {
    computerPoint += 2;
    alert(`Computer won this round and gets 2 points!\n
Your choice: ${userChoice} (You: ${userPoint} point)
Computer's choice: ${computerChoice} (Computer: ${computerPoint} point)`);
  }
}

if (userPoint >= 10 && userPoint > computerPoint) {
  result = "Congratulations! You won the game.";
} else {
  result = "The computer won the game. Better luck next time!";
}

alert(`${result}\n
Final Scores: 
You: ${userPoint} points
Computer: ${computerPoint} points

`);
}
////////////////////////////////////////////////////////////////////////////////

else {
    const items = ["ქვა", "ქაღალდი", "მაკრატელი"]; // Array creation and element addition
alert(`
აირჩიეთ ქვა, ქაღალდი ან მაკრატელი. 
ქვა = 1 
ქაღალდი = 2 
მაკრატელი = 3`);

let userPoint = 0;
let computerPoint = 0;
let result;

while (userPoint < 10 && computerPoint < 10 || userPoint === computerPoint) {
  let randomChoiceComputer = Math.floor(Math.random() * items.length); // generate random number for computer choice
  let randomChoiceUser;

  do {
    randomChoiceUser = parseInt(prompt("ჩაწერეთ თქვენი არჩევანი (ქვისთვის 1, ქაღალდისთვის 2, მაკრატელისთვის 3)"));
    if (randomChoiceUser < 1 || randomChoiceUser > 3 || isNaN(randomChoiceUser)) {
      alert("დაფიქსირდა შეცდომა! შეიყვანეთ 1, 2, ან 3.");
    }
  } while (randomChoiceUser < 1 || randomChoiceUser > 3 || isNaN(randomChoiceUser));

  let userChoice = items[randomChoiceUser - 1];  
  let computerChoice = items[randomChoiceComputer];

  if (randomChoiceUser === randomChoiceComputer + 1 || (randomChoiceUser === 1 && randomChoiceComputer === 2)) {
    userPoint += 2;
    alert(`ეს ხელი თქვენ მოიგეთ და თქვენ მიიღეთ 2 ქულა!\n 
თქვენი არჩევანია: ${userChoice} (თქვენ გაქვთ: ${userPoint} ქულა)
კომპიუტერის არჩევანია: ${computerChoice} (კომპიუტერს აქვს: ${computerPoint} ქულა)`);
  } else if (randomChoiceUser === randomChoiceComputer) {
    userPoint++;
    computerPoint++;
    alert(`დაფიქსირდა ფრე! ორივე მოთამაშემ მიიღეთ 1 ქულა.\n
თქვენი არჩევანია: ${userChoice} (თქვენ გაქვთ: ${userPoint} ქულა)
კომპიუტერის არჩევანია: ${computerChoice} (კომპიუტერს აქვს: ${computerPoint} ქულა)`);
  } else {
    computerPoint += 2;
    alert(`ეს ხელი მოიგო კომპიუტერმა და მიიღო 2 ქულა!\n
თქვენი არჩევანია: ${userChoice} (თქვენ გაქვთ: ${userPoint} ქულა)
კომპიუტერის არჩევანია: ${computerChoice} (კომპიუტერს აქვს: ${computerPoint} ქულა)`);
  }
}

if (userPoint >= 10 && userPoint > computerPoint) {
  result = "გილოცავთ! თქვენ გაიმარჯვეთ";
} else {
  result = "გაიმარჯვა კომპიუტერმა. წარმატებებს გისურვებთ შემდეგ ჯერზე!";
}

alert(`${result}\n
საბოლოო ქულა: 
თქვენ დააგროვე: ${userPoint} ქულა
კომპიუტერმა დააგროვა: ${computerPoint} ქულა

`);

}
