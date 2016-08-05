// var question1 = Object.create(Quiz);


// var QuizQuestions = function(question, solutions, answer) {
//     this.question = question;
//     this.solutions = solutions;
//     this.answer = answer;

// };

var Quiz = {
    questions: [{
            question: "What is the capital of the Democratic Republic of Congo?",
            solutions: ['Nairobi', 'Kinshasa', 'Cape Town', 'Baku'],
            answer: 1
        }, {
            question: "What is the capital of Indonesia?",
            solutions: ['Singapore', 'Jakarta', 'Ulaanbaatar', 'Kyoto'],
            answer: 1
        

        }, {
            question: "What is the capital of Brazil?",
            solutions: ['Rio de Janiero', 'Caracas', 'Havana', 'Brasilia'],
            answer: 3            

        }, {
            question: "What is the capital of Estonia?",
            solutions: ['Moscow', 'Tallinn', 'Warsaw', 'Riga'],
            answer: 1

        }, {
            question: "What is the capital of Peru?",
            solutions: ['Cuzco', 'Santiago', 'Lima', 'Casablanca'],
            answer: 2

        }, {
            question: "The capital of Laos is ",
            solutions: ['Anchorage', 'Hanoi', 'Vientiane', 'Beirut'],
            answer: 2

        }, {
            question: "The capital of Liberia is ",
            solutions: ['Monrovia', 'Pristina', 'Atlanta', 'Sicily'],
            answer: 0

        }, {
            question: "What is the capital of the United Kingdom?",
            solutions: ['Seattle', 'Toronto', 'Rome', 'London'],
            answer: 3

        }, {
            question: "What is the capital of Jordan?",
            solutions: ['Amman', 'Damascus', 'Kingston', 'San Diego'],
            answer: 0

        }, {
            question: "What is the capital of Honduras?",
            solutions: ['Budapest', 'Dublin', 'Tegucigalpa', 'Varanasi'],
            answer: 2

        }, {
            question: "What is the capital of Kyrgyzstan?",
            solutions: ['Moscow', 'Maseru', 'Vaduz', 'Bishkek'],
            answer: 3

        }, {
            question: "The capital of Equatorial Guinea is ",
            solutions: ['Helsinki', 'Malabo', 'Banjul', 'Riga'],
            answer: 1

        }, {
            question: "The capital of Ghana is ",
            solutions: ['Accra', 'Tallinn', 'Suva', 'Tbilisi'],
            answer: 0

        }, {
            question: "What is the capital of Djibouti?",
            solutions: ['Roseau', 'Djibouti', 'Nicosia', 'Quito'],
            answer: 1

        }, {
            question: "What is the capital of Burkina Faso?",
            solutions: ['Sofia', 'Ottawa', 'Sarajevo', 'Ouagadougou'],
            answer: 3

        }, {
            question: "What is the capital of Oman?",
            solutions: ['Suva', 'Asmara', 'Addis Ababa', 'Muscat'],
            answer: 3

        }, {
            question: "What is the capital of Australia?",
            solutions: ['Canberra', 'Ottawa', 'Sydney', 'Karachi'],
            answer: 0

        }, {
            question: "What is the capital of Tajikistan?",
            solutions: ['Reykjavik', 'Dushanbe', 'Taipei', 'Dodoma'],
            answer: 1

        }, {
            question: "The capital of Uganda is ",
            solutions: ['Edinburgh', 'Port Vila', 'Montevideo', 'Kampala'],
            answer: 3

        }, {
            question: "What is the capital of Turkmenistan?",
            solutions: ['Turkmen City', 'Ashgabat', 'Baghdad', 'Tripoli'],
            answer: 1

        } 



    ]

};

$(document).ready(function() {
    $('.startScreen').show();    
    $('.newgame').hide();
    $('.start').fadeIn(500);



    $('.start').click(function() {
        $(".startScreen").fadeOut(1000);
        $('.quiz-title').animateCss('animated pulse');
        $('#scoreCount').animateCss('flipInX');
        $('#questionCount').animateCss('flipInX');
        $('.newgame').show();
        createQuestion(Quiz.questions[questionNum]);
    });

    

    //Global Variables
    var score = 0;
    var questionNum = 0;
    var userAnswers = [];
    // var randomQ;
    var currentQuestion = 0;
    var totalQuestions = Quiz.questions.length;
    var chosenQuestions = [];
    $('#totalQuestions').text(totalQuestions);


    

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



    // jQuery extension to handle css animations

    $.fn.extend({
        animateCss: function(animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });


    // Event listener and function for New Game button click

    $('.newgame').click(function() {
        $('.gameOver').fadeOut(1000);
        reset();
    });

    $('.question').submit(function(event) {
        event.preventDefault();
        
        var input = $('input[name=solution]:checked').val();
        console.log(input);
        userAnswers.push(input);
        console.log(userAnswers + " pushed");
        if (checkAnswers(Quiz.questions[questionNum], input)) {
            questionNum++;
            if (questionNum >= Quiz.questions.length) {
                $(Quiz.questions[questionNum]).hide();

                $('.gameOver').text("That wasn't so hard was it? Click 'New Game' to play again.").fadeIn(1000);

            } else {                
                $('#questionNum').text(questionNum);
                setTimeout(function() {
                    createQuestion(Quiz.questions[questionNum]);
                }, 300);

            }
        }        

    });

    function checkAnswers(question, input) {
        if (question !== undefined) { //This happens when user has reached the last question.
            console.log(input != question.answer, "test");
            if (input == question.answer) {
                $('.userFeedback').text("Great Job! That's the correct answer!").fadeIn(1000);
                $('.userFeedback').fadeOut(1000);
                score++;
                $('#score').text(score);
                return true;
            } else if (isNaN(input)) {
                $('.userFeedback').text("You gotta choose something, man. ").fadeIn(1000);
                $('.userFeedback').fadeOut(1000);
                return false;

                // return; // stops the function in its tracks
            } else if (input != question.answer) {
                // if ()
                $('.userFeedback').text("Sorry, the capital is " + question.solutions[question.answer]).fadeIn(1000);
                $('.userFeedback').fadeOut(1000);
                return true;
                

            };
        }
    };



    function reset() {
        score = 0;
        $('#score').text(score);
        questionNum = 0;
        userAnswers = [];
        currentQuestion = 0;
        totalQuestions = Quiz.questions.length;
        chosenQuestions = [];        
        $('.quiz-title').animateCss('animated pulse');
        $('#scoreCount').animateCss('flipInX');
        $('#questionCount').animateCss('flipInX');
        setTimeout(function() {
            createQuestion(Quiz.questions[questionNum]);
        }, 500);

    };

    

    function createQuestion(question) {
        // if (questionNum < totalQuestions && chosenQuestions.indexOf(randomQ) == -1) {
        // chosenQuestions.push(randomQ); // Store already asked questions in array to not ask them again.
        // console.log(chosenQuestions);
        $('#questionNum').text(questionNum + 1);
        $('.content').text('');
        $('.content').animateCss('zoomIn');
        $('.content').append('<h2>' + question.question + '</h2>');
        $('.content').append("<input type='radio' value='0' name='solution'><span>" + question.solutions[0] + "</span><br/>");
        $('.content').append("<input type='radio' value='1' name='solution'><span>" + question.solutions[1] + "</span><br/>");
        $('.content').append("<input type='radio' value='2' name='solution'><span>" + question.solutions[2] + "</span><br/>");
        $('.content').append("<input type='radio' value='3' name='solution'><span>" + question.solutions[3] + "</span>");
        // }
    };


});


























