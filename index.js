const readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.black.bgWhite('\t\t\t\t Welcome to the Quiz \n'));
var username = readlineSync.question("What's your Name : ");
console.log('\n');
console.log('\t\t\t\t Hello', username, " Let's gusse the movie name!!");

console.log('\n');
console.log('Rules & Instructions: ');
console.log('1.', username + ', There are 10 Questions and all are compulsory');
console.log('2. You will get 2 points on each Right Answer.');
console.log('3. One Point will be deducted if the Answer is Wrong.');
console.log('4. In MCQ based questions you have to type the Serial Number / Index Value.');
console.log('\n');


let score = 0;


var movies = [


  {
    array: ['Koi... Mil Gaya', 'Krrish', 'Kaho Naa... Pyaar Hai'],
    question: 'Q1.) "Meri shaktiyon ka galat istemaal kiya gaya, maa" ',
    answer: 'Krrish'
  },
  {
    array: ['anand', 'Andaz', 'Namak Haraam'],
    question: 'Q2.) "Babumoshai, zindagi badi honi chahiye, lambi nahi".',
    answer: 'anand'
  },
  {
    array: ['Dilwale Dulhania Le Jayenge', 'Dil To Pagal Hai', 'Kuch Kuch Hota Hai'],
    question: 'Q3.) “Rahul, naam toh suna hi hoga.” ',
    answer: 'Dil To Pagal Hai'
  },
  {
    array: ['Kabhi Khushi Kabhie Gham', 'Mujhse Dosti Karoge!', 'Hum Dil De Chuke Sanam'],
    question: 'Q4.) "Kaun hai yeh, jisne dobara mudke mujhe nahi dekha?"',
    answer: 'Kabhi Khushi Kabhie Gham'
  },
  {
    array: ['Hera Pheri', 'Rang De Basanti', 'Munna Bhai M.B.B.S'],
    question: 'Q5.) “Tension lene ka nahi, sirf dene ka.”',
    answer: 'Munna Bhai M.B.B.S'
  },
  {
    array: ['Raanjhanaa', 'Gangs of Wasseypur', 'Masaan'],
    question: 'Q6.) “Saala ye dukh kaahe khatam nahi hota hai be!” ',
    answer: 'Masaan'
  },
  {
    array: ['Mohabbatein', 'Kabhi Khushi Kabhie Gham', 'Baghban'],
    question: 'Q7.) “Parampara. Pratishtha. Anushasan.” ',
    answer: 'Mohabbatein'
  },
  {
    array: ['Love Aaj Kal', 'Band Baaja Baaraat', 'Jab We Met'],
    question: 'Q8.) “Bachpan se hi na, mujhe shaadi karne ka bada craze hai... By God!” ',
    answer: 'Jab We Met'
  },
  {
    array: ['Ghatak Lethal', 'Border', 'Damini'],
    question: 'Q9.) “Tareek pe tareek milti rahi hai lekin insaaf nahi milta, my Lord. Milte hai to sirf taareekh” ',
    answer: 'Damini'
  },
  {
    array: ['Maine Pyar Kiya', 'Mujhse Dosti Karoge', 'Dil To Pagal Hai'],
    question: 'Q10.) “Dosti ka ek usool hai, madam, no sorry, no thank you.” ',
    answer: 'Maine Pyar Kiya'
  },
];

function moviedialogue(listOfMovies, dialogue, movieName) {
  let userAnswer = readlineSync.keyInSelect(listOfMovies, dialogue);
  console.log('\n');
  if (listOfMovies[userAnswer] === movieName) {
    //console.log(listOfMovies[userAnswer]);
    console.log('You are Right.');
    score = score + 2;
  } else {
    console.log('You are Wrong.');
    console.log('The Correct Answer is: ', movieName);
    score = score - 1;
  }

  if (score < 0) {
    score = 0;
  }
  console.log('Score is: ', score);
}

for (var i = 0; i < movies.length; i++) {
  console.log("--------------------------------------------------------------- ")
  console.log('\n');
  moviedialogue(movies[i].array, movies[i].question, movies[i].answer);

}

console.log('\n');
console.log('Congratulations,', username, 'your Total Score is: ', score);