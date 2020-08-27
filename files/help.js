// when the game began this window will tell the user about his preparing
alert(' Are you ready ???')
// this variable for print time
var timer = document.getElementById('timer');
// this variable for input and it value
var input = document.getElementById('result');
// this variable for the button when the user check on it
var check = document.getElementById('button');
// this is the first number
var first = document.getElementById('first');
// this is the second number
var second = document.getElementById('second');
// this is the operation 
var operation = document.getElementById('operation');
// this variable for the count of correct answer
let trueAnswer = document.getElementById('true');
// this variable for the count of wrong answer
let falseAnswer = document.getElementById('false');
// this variable for number of question
let CountAllQuestions = document.getElementById('all');
// this variable for find the operation from array and random
var RandomOperationFind;
// this variable for count the time
let CountInterval;
// this variable for excute the result from the sum proccess
let ResultSum;
// for excute the all result
let ResultSubtraction;
let Multiplication;
let round;
// for right and wrong answer
let marksTrue = 0;
let marksFales = 0;
let allQuestions = 10;

// this function for check on Enter key
input.addEventListener('keydown', e => {
    if (e.keyCode == 13) {
        CheckResult();
        Mounten();

    }
})

// this function for check on the button
check.onclick = () => {
    CheckResult();
    Mounten();

}

// this function content all the functions we need 
let Mounten = () => {
    var FirstArry = '1234567890';
    var operationArry = '+-*/';
    var ArryOperation = Array.from(operationArry)

    // console.log(ArryOperation)

    // Here i work about Conversion process all things to array 
    var ArryFirst = Array.from(FirstArry)
    // then i create the random for all operations
    var RandomFirst = Math.floor(Math.random() * ArryFirst.length)
    var RandomSecond = Math.floor(Math.random() * ArryFirst.length)
    var RandomOperation = Math.floor(Math.random() * ArryOperation.length)

    // this method for find the operation
    ArryOperation.forEach((ele, index) => {
        if (RandomOperation == index) {
            RandomOperationFind = ele
        }
    })
    // if statemnt for i can to know the correct answer
    ResultAllOperations(RandomOperationFind, RandomSecond, RandomFirst)
    // this function for return time again
    clearInterval(CountInterval)
    // just 3 seconds
    CountDownTimer(3)
    // for render the next question
    StartGame(RandomFirst, RandomSecond, RandomOperationFind);
    input.value = ''
    EndGame();

}

var StartGame = (first, second, operation) => {
    document.getElementById('first').innerHTML = first;
    document.getElementById('second').innerHTML = second;
    document.getElementById('operation').innerHTML = operation;
}

// this function for the time
let CountDownTimer = (duration) => {
    let seconds;
    CountInterval = setInterval(function () {
        // i create simple algorithm for print the second
        seconds = parseInt(duration % 60);

        timer.innerHTML = seconds;

        if (--duration < 0) {
            clearInterval(CountInterval)
            CheckResult();
            Mounten();
        }

    }, 1000)
}
// for know the correcr answer
let ResultAllOperations = (RandomOperationFind, RandomSecond, RandomFirst) => {

    if (RandomOperationFind == '+') {
        ResultSum = RandomFirst + RandomSecond
        console.log(ResultSum)
    } else if (RandomOperationFind == '-') {
        ResultSubtraction = RandomFirst - RandomSecond
        console.log(ResultSubtraction)
    } else if (RandomOperationFind == '*') {
        Multiplication = RandomFirst * RandomSecond
        console.log(Multiplication)
    } else if (RandomOperationFind == '/') {
        let RoundDivision = RandomFirst / RandomSecond
        round = Math.round(RoundDivision)
        console.log(round)
    }

}
// for check the answer when user enter it on input if the answer ture or false
let CheckResult = () => {
    if (input.value == '') {
        alert('False your answer is empty')
        marksFales++
        falseAnswer.innerHTML = marksFales;
        allQuestions--
        CountAllQuestions.innerHTML = allQuestions;
    } else if (input.value == ResultSum || input.value == ResultSubtraction || input.value == Multiplication || input.value == round) {

        alert('Great')
        marksTrue++
        trueAnswer.innerHTML = marksTrue;
        allQuestions--
        CountAllQuestions.innerHTML = allQuestions;
    } else {
        alert('False')
        marksFales++
        falseAnswer.innerHTML = marksFales;
        allQuestions--
        CountAllQuestions.innerHTML = allQuestions;
    }

    if (allQuestions == 0) {
        if (marksTrue == 10) {
            alert('Congratulations You got full mark')
            location.reload();
        }
        if (marksTrue >= 7) {
            alert('good you got : ' + marksTrue)
            location.reload();
        }
        if (marksTrue < 7) {
            alert('Game Over your mark is bad : ' + marksTrue)
            location.reload();
        }
    }
}

Mounten();