
// jQuery extension to handle css animations

    $.fn.extend({
        animateCss: function(animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });






var QuizQuestions = function(question, solutions, answer) {
    this.question = question;
    this.solutions = solutions;
    this.answer = answer;

};


QuizQuestions.prototype.display = function() {
    // if (questionNum < totalQuestions && chosenQuestions.indexOf(randomQ) == -1) {
    // chosenQuestions.push(randomQ); // Store already asked questions in array to not ask them again.
    // console.log(chosenQuestions);
    //$('#questionNum').text(questionNum + 1);
    $('.content').text('');
    $('.content').animateCss('zoomIn');
    $('.content').append('<h2>' + this.question + '</h2>');
    $('.content').append("<input type='radio' value='0' name='solution'><span>" + this.solutions[0] + "</span><br/>");
    $('.content').append("<input type='radio' value='1' name='solution'><span>" + this.solutions[1] + "</span><br/>");
    $('.content').append("<input type='radio' value='2' name='solution'><span>" + this.solutions[2] + "</span><br/>");
    $('.content').append("<input type='radio' value='3' name='solution'><span>" + this.solutions[3] + "</span>");
    // }
};




var Quiz = function(questions) {
    this.questions = questions;
    this.userAnswers = [];
}


Quiz.prototype.submit = function(event) {
    event.preventDefault();

    var input = $('input[name=solution]:checked').val();
    console.log(input);
    this.userAnswers.push(input);
    console.log(this.userAnswers + " pushed");
    if (this.checkAnswers(this.questions[questionNum], input)) {
        questionNum++;
        if (questionNum >= this.questions.length) {
            $(this.questions[questionNum]).hide();

            $('.gameOver').text("That wasn't so hard was it? Click 'New Game' to play again.").fadeIn(1000);

        } else {
            $('#questionNum').text(questionNum);
            setTimeout(function() {
                this.questions[questionNum].display();
            }, 300);
        }
    }
};



Quiz.prototype.start = function() {
    $('.startScreen').fadeOut(1000);
    $('.quiz-title').animateCss('animated pulse');
    $('#scoreCount').animateCss('flipInX');
    $('#questionCount').animateCss('flipInX');
    $('.newgame').show();
    this.questions[questionNum].display();
};


Quiz.prototype.reset = function() {
    score = 0;
    $('#score').text(score);
    questionNum = 0;
    userAnswers = [];
    currentQuestion = 0;
    // totalQuestions = Quiz.questions.length;
    chosenQuestions = [];
    $('.quiz-title').animateCss('animated pulse');
    $('#scoreCount').animateCss('flipInX');
    $('#questionCount').animateCss('flipInX');
    setTimeout(function() {
        this.questions[questionNum].display();
        }, 300);

};



Quiz.prototype.checkAnswers = function(question, input) {
    // if (question !== undefined) { //This happens when user has reached the last question.
    //     console.log(input != question.answer, "test");
    // console.log('You checkin answers, bro.');
    console.log(questions[questionNum].answer);
    if (input == questions[questionNum].answer) {
        $('.userFeedback').text("Great Job! That's the correct answer!").show().animateCss('slideInLeft');
        setTimeout(function(){
            $('.userFeedback').animateCss('fadeOutLeft');
        }, 500);
        $('.userFeedback').hide();
        // $('.userFeedback').animateCss('slideInLeft');
        // $('.userFeedback').animateCss('fadeOutLeft');
        // setTimeout(function(){
        //     $('.userFeedback').fadeOut(1000);
        // }, 500);
        // $('.userFeedback').fadeOut(1000);
        score++;
        $('#score').text(score);
        return true;
    } else if (isNaN(input)) {
        $('.userFeedback').text("You gotta choose something, man.");    //.fadeIn(1000);
        $('.userFeedback').animateCss('slideInLeft');
        $('.userFeedback').fadeOut(1000);
        return false;

        // return; // stops the function in its tracks
    } else if (input != questions[questionNum].answer) {
        $('.userFeedback').text("Sorry, the capital is " + questions[questionNum].solutions[questions[questionNum].answer]);    //.fadeIn(1000);
        $('.userFeedback').animateCss('slideInLeft');
        $('.userFeedback').fadeOut(1000);
        return true;


    };

};



////     The questions for the quiz     ////



var questions = [
    new QuizQuestions("What is the capital of the Democratic Republic of Congo?", ['Nairobi', 'Kinshasa', 'Cape Town', 'Baku'], 1),
    new QuizQuestions("What is the capital of Indonesia?", ['Singapore', 'Jakarta', 'Ulaanbaatar', 'Kyoto'], 1),
    new QuizQuestions("What is the capital of Brazil?", ['Rio de Janiero', 'Caracas', 'Havana', 'Brasilia'], 3),
    new QuizQuestions("What is the capital of Estonia?", ['Moscow', 'Tallinn', 'Warsaw', 'Riga'], 1),
    new QuizQuestions("What is the capital of Peru?", ['Cuzco', 'Santiago', 'Lima', 'Casablanca'], 2),
    new QuizQuestions("The capital of Laos is ", ['Anchorage', 'Hanoi', 'Vientiane', 'Beirut'], 2),
    new QuizQuestions("The capital of Liberia is ", ['Monrovia', 'Pristina', 'Atlanta', 'Sicily'], 0),
    new QuizQuestions("What is the capital of the United Kingdom?", ['Seattle', 'Toronto', 'Rome', 'London'], 3),
    new QuizQuestions("What is the capital of Jordan?", ['Amman', 'Damascus', 'Kingston', 'San Diego'], 0),
    new QuizQuestions("What is the capital of Honduras?", ['Budapest', 'Dublin', 'Tegucigalpa', 'Varanasi'], 2),
    new QuizQuestions("What is the capital of Kyrgyzstan?", ['Moscow', 'Maseru', 'Vaduz', 'Bishkek'], 3),
    new QuizQuestions("The capital of Equatorial Guinea is ", ['Helsinki', 'Malabo', 'Banjul', 'Riga'], 1),
    new QuizQuestions("The capital of Ghana is ", ['Accra', 'Tallinn', 'Suva', 'Tbilisi'], 0),
    new QuizQuestions("What is the capital of Djibouti?", ['Roseau', 'Djibouti', 'Nicosia', 'Quito'], 1),
    new QuizQuestions("What is the capital of Burkina Faso?", ['Sofia', 'Ottawa', 'Sarajevo', 'Ouagadougou'], 3),
    new QuizQuestions("What is the capital of Oman?", ['Suva', 'Asmara', 'Addis Ababa', 'Muscat'], 3),
    new QuizQuestions("What is the capital of Australia?", ['Canberra', 'Ottawa', 'Sydney', 'Karachi'], 0),
    new QuizQuestions("What is the capital of Tajikistan?", ['Reykjavik', 'Dushanbe', 'Taipei', 'Dodoma'], 1),
    new QuizQuestions("The capital of Uganda is ", ['Edinburgh', 'Port Vila', 'Montevideo', 'Kampala'], 3),
    new QuizQuestions("What is the capital of Turkmenistan?", ['Turkmen City', 'Ashgabat', 'Baghdad', 'Tripoli'], 1)


];



var quiz = new Quiz(questions);
var questionNum = 0;
var score = 0;
var inputValue;
var currentQuestion = 0;
var totalQuestions = questions.length;




$(document).ready(function() {
    $('.startScreen').show();
    $('.newgame').hide();
    $('.start').fadeIn(500);
    $('#intro').animateCss('fadeInDown');

    $('.start').click(quiz.start.bind(quiz));
    // var totalQuestions = QuizQuestions.question.length;
    $('#totalQuestions').text(totalQuestions);

    $('.newgame').click(function() {
        $('.gameOver').fadeOut(1000);
        // quiz.reset.bind(quiz);
    });

    $('.newgame').click(quiz.reset.bind(quiz));               // Why not?       
                                                            //      $('.newgame').click(function() {
                                                                    //     $('.gameOver').fadeOut(1000);
                                                                    //         // quiz.reset.bind(quiz);
                                                                    // });

    $('.question').submit(quiz.submit.bind(quiz));



    // $('.start').click(function() {
    //     $('.startScreen').fadeOut(1000);
    //     $('.quiz-title').animateCss('animated pulse');
    //     $('#scoreCount').animateCss('flipInX');
    //     $('#questionCount').animateCss('flipInX');
    //     $('.newgame').show();
    //     createQuestion(Quiz.questions[questionNum]);
    // });



    //Global Variables
    // var score = 0;
    // // var questionNum = 0;
    // // var userAnswers = [];
    // // var randomQ;
    // // var inputValue;
    // // var currentQuestion = 0;
    // // var totalQuestions = Quiz.questions.length;
    // // var chosenQuestions = [];
    // $('#totalQuestions').text(totalQuestions);




    // TODO: Make questions chosen randomly, store them in array and check the array for previously
    // asked questions




    // Choose a question from the questions array at random
    // function randomQuestion() {
    //     randomQ = Quiz.questions[Math.floor(Math.random() * Quiz.questions.length)];
    //     console.log(randomQ);

    //     // $('.content').append('<h2>' + randomQ.question.solutions + '</h2>');
    //     createQuestion();


    // };
    // var currentQuestion = Quiz.questions[0];

    // question1();



    


    // Event listener and function for New Game button click

    // $('.newgame').click(function() {
    //     $('.gameOver').fadeOut(1000);
    //     var reset = quiz.reset.bind(quiz);
    // });

    // $('.question').submit(quiz.submit.bind(quiz));

    // $('.question').submit(function(event) {
    //     event.preventDefault();
    //     getInput();

    //     // var input = $('input[name=solution]:checked').val();
    //     // console.log(input);
    //     // userAnswers.push(input);
    //     // console.log(userAnswers + " pushed");
    //     if (checkAnswers(Quiz.questions[questionNum], input)) {
    //         questionNum++;
    //         if (questionNum >= Quiz.questions.length) {
    //             $(Quiz.questions[questionNum]).hide();

    //             $('.gameOver').text("That wasn't so hard was it? Click 'New Game' to play again.").fadeIn(1000);

    //         } else {                
    //             $('#questionNum').text(questionNum);
    //             setTimeout(function() {
    //                 createQuestion(Quiz.questions[questionNum]);
    //             }, 300);

    //         }
    //     }        

    // });



    // Gets the answer from the user and pushes it to userAnswers array // 


    // function getInput() {
    //     var input = $('input[name=solution]:checked').val();
    //     userAnswers.push(input);
    //     console.log(userAnswers + " pushed");
    //     inputValue = input;
    //     console.log(input);
    // }




    // Checks if user answer is correct, NaN, or incorrect and responds with feedback // 



    // function checkAnswers(question, input) {
    //     if (question !== undefined) { //This happens when user has reached the last question.
    //         console.log(input != question.answer, "test");
    //         if (input == question.answer) {
    //             $('.userFeedback').text("Great Job! That's the correct answer!").fadeIn(1000);
    //             $('.userFeedback').fadeOut(1000);
    //             score++;
    //             $('#score').text(score);
    //             return true;
    //         } else if (isNaN(input)) {
    //             $('.userFeedback').text("You gotta choose something, man. ").fadeIn(1000);
    //             $('.userFeedback').fadeOut(1000);
    //             return false;

    //             // return; // stops the function in its tracks
    //         } else if (input != question.answer) {
    //             // if ()
    //             $('.userFeedback').text("Sorry, the capital is " + question.solutions[question.answer]).fadeIn(1000);
    //             $('.userFeedback').fadeOut(1000);
    //             return true;


    //         };
    //     }
    // };






    // function createQuestion(question) {
    //     // if (questionNum < totalQuestions && chosenQuestions.indexOf(randomQ) == -1) {
    //     // chosenQuestions.push(randomQ); // Store already asked questions in array to not ask them again.
    //     // console.log(chosenQuestions);
    //     $('#questionNum').text(questionNum + 1);
    //     $('.content').text('');
    //     $('.content').animateCss('zoomIn');
    //     $('.content').append('<h2>' + question.question + '</h2>');
    //     $('.content').append("<input type='radio' value='0' name='solution'><span>" + question.solutions[0] + "</span><br/>");
    //     $('.content').append("<input type='radio' value='1' name='solution'><span>" + question.solutions[1] + "</span><br/>");
    //     $('.content').append("<input type='radio' value='2' name='solution'><span>" + question.solutions[2] + "</span><br/>");
    //     $('.content').append("<input type='radio' value='3' name='solution'><span>" + question.solutions[3] + "</span>");
    //     // }
    // };


});
