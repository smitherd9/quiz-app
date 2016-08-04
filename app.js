

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
            }

            // }, {
            //     question: "What is the capital of Brazil?",
            //     solutions: ['Rio de Janiero', 'Caracas', 'Havana', 'Brasilia'],
            //     answer: 3

            // }, {
            //     question: "What is the capital of Estonia?",
            //     solutions: ['Moscow', 'Tallinn', 'Warsaw', 'Riga'],
            //     answer: 1

            // }, {
            //     question: "What is the capital of Peru?",
            //     solutions: ['Cuzco', 'Santiago', 'Lima', 'Casablanca'],
            //     answer: 2

            // }, {
            //     question: "The capital of Laos is ",
            //     solutions: ['Anchorage', 'Hanoi', 'Vientiane', 'Beirut'],
            //     answer: 2

            // }, {
            //     question: "The capital of Liberia is ",
            //     solutions: ['Monrovia', 'Pristina', 'Atlanta', 'Sicily'],
            //     answer: 0

            // }, {
            //     question: "What is the capital of the United Kingdom?",
            //     solutions: ['Seattle', 'Toronto', 'Rome', 'London'],
            //     answer: 3

            // }, {
            //     question: "What is the capital of Jordan?",
            //     solutions: ['Amman', 'Damascus', 'Kingston', 'San Diego'],
            //     answer: 0

            // }, {
            //     question: "What is the capital of Honduras?",
            //     solutions: ['Budapest', 'Dublin', 'Tegucigalpa', 'Varanasi'],
            //     answer: 2

            // }, {
            //     question: "What is the capital of Kyrgyzstan?",
            //     solutions: ['Moscow', 'Maseru', 'Vaduz', 'Bishkek'],
            //     answer: 3

            // }, {
            //     question: "The capital of Equatorial Guinea is ",
            //     solutions: ['Helsinki', 'Malabo', 'Banjul', 'Riga'],
            //     answer: 1

            // }, {
            //     question: "The capital of Ghana is ",
            //     solutions: ['Accra', 'Tallinn', 'Suva', 'Tbilisi'],
            //     answer: 0

            // }, {
            //     question: "What is the capital of Djibouti?",
            //     solutions: ['Roseau', 'Djibouti', 'Nicosia', 'Quito'],
            //     answer: 1

            // }, {
            //     question: "What is the capital of Burkina Faso?",
            //     solutions: ['Sofia', 'Ottawa', 'Sarajevo', 'Ouagadougou'],
            //     answer: 3

            // }, {
            //     question: "What is the capital of Oman?",
            //     solutions: ['Suva', 'Asmara', 'Addis Ababa', 'Muscat'],
            //     answer: 3

            // }, {
            //     question: "What is the capital of Australia?",
            //     solutions: ['Canberra', 'Ottawa', 'Sydney', 'Karachi'],
            //     answer: 2

            // }, {
            //     question: "What is the capital of Tajikistan?",
            //     solutions: ['Reykjavik', 'Dushanbe', 'Taipei', 'Dodoma'],
            //     answer: 1

            // }, {
            //     question: "The capital of Uganda is ",
            //     solutions: ['Edinburgh', 'Port Vila', 'Montevideo', 'Kampala'],
            //     answer: 3

            // }, {
            //     question: "What is the capital of Turkmenistan?",
            //     solutions: ['Turkmen City', 'Ashgabat', 'Baghdad', 'Tripoli'],
            //     answer: 3

            // } 



        ]

    };

$(document).ready(function() {
$('.startScreen').show();
// $('.startScreen').fadeIn(1000);
$('.newgame').hide();
$('.start').fadeIn(500);



	$('.start').click(function(){
		$(".startScreen").fadeOut(1000);
		$('.quiz-title').animateCss('animated pulse');
		$('#scoreCount').animateCss('flipInX');
		$('#questionCount').animateCss('flipInX');
		$('.newgame').show();
		createQuestion(Quiz.questions[questionNum]);
	});

    // randomQuestion();

    // question1();

    //Global Variables
    var score = 0;
    var questionNum = 0;
    var userAnswers = [];
    var randomQ;
    var currentQuestion = 0;
    var totalQuestions = Quiz.questions.length;
    var chosenQuestions = [];
    
    // Choose a question from the questions array at random

    // function randomQuestion() {
    //     randomQ = Quiz.questions[Math.floor(Math.random() * Quiz.questions.length)];
    //     console.log(randomQ);

    //     // $('.content').append('<h2>' + randomQ.question.solutions + '</h2>');
    //     createQuestion();


    // };
    // var currentQuestion = Quiz.questions[0];

    // question1();

    $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

    $('.newgame').click(function(){
    		$('.gameOver').fadeOut(1000);
    		// $('.content').removeClass('animated zoomIn');
   //  		$('#scoreCount').removeClass('animated slideInRight');
			// $('#questionCount').removeClass('animated slideInLeft');
			// $('#scoreCount').removeClass('animated flipInX');
			// $('#questionCount').removeClass('animated flipInX');    		
        	reset();
        	});

    $('.question').submit(function(event) {
        event.preventDefault();
        var input = $('input[name=solution]:checked').val();
        // console.log(input);
        userAnswers.push(input);
        console.log(userAnswers + " pushed");
        checkAnswers(Quiz.questions[questionNum], input);
        questionNum++;
        if (questionNum >= Quiz.questions.length) {
        	$(Quiz.questions[questionNum]).hide();
        	// $('.gameOver').removeClass('animated bounceOutLeft');
        	$('.gameOver').text("That's all folks!  Click 'New Game' to play again.").fadeIn(1000);
        	// $('.newgame').fadeIn(2000);        	
            // give feedback? tell them it is the end
        } else {
        	// $('.content').removeClass('animated zoomIn')
            $('#questionNum').text(questionNum);
            setTimeout(function(){
            	createQuestion(Quiz.questions[questionNum]);
            }, 300);
            
        }

        // create the second question, the third, 

        // randomQuestion();

        // nextQuestion();

    });

    function checkAnswers(question, input) {
        if (question !== undefined) {           //This happens when user has reached the last question.
            if (input == question.answer) {
                $('.userFeedback').text("Great Job! That's the correct answer!").fadeIn(500);
                $('.userFeedback').fadeOut(500);
                score++;
                $('#score').text(score);
                // return true;
            } else if (isNaN(input)) {
                alert("Please make a selection.")
                    // return false;
            }
        } else {
            // $('.userFeedback-incorrect').fadeIn(2000);
            // $('.userFeedback-incorrect').fadeOut(2000);
            // return false;
            alert('Wrong answer!')
        };

    };



    function reset(){
    score = 0;
    questionNum = 0;
    userAnswers = [];
    currentQuestion = 0;
    totalQuestions = Quiz.questions.length;
    chosenQuestions = [];
    // $('.gameOver').hide();
    $('#scoreCount').animateCss('flipInX');
	$('#questionCount').animateCss('flipInX');
    setTimeout(function(){
            	createQuestion(Quiz.questions[questionNum]);
            }, 500);

    };






    // function animations(){
    // 	var animationName = '';
    // 	var animationEnd = '';
    // }
    // function nextQuestion() {
    //     if (questionNum < Quiz.questions.length) {
    //         $('<h2>' + randomQ.question + '</h2>').replaceAll('.content');
    //         $('.content').append("<input type='radio' value='0' name='solution'>" + "<span>" + randomQ.solutions[0] + "</span><br/>");
    //         $('.content').append("<input type='radio' value='1' name='solution'>" + "<span>" + randomQ.solutions[1] + "</span><br/>");
    //         $('.content').append("<input type='radio' value='2' name='solution'>" + "<span>" + randomQ.solutions[2] + "</span><br/>");
    //         $('.content').append("<input type='radio' value='3' name='solution'>" + "<span>" + randomQ.solutions[3] + "</span><br/>");

    //     }

    //$('.content').append('<h2>' + randomQ.question + '</h2>');
    //  //    $('.content').append("<input type='radio' value='0' name='solution'>" + "<span>" + Quiz.questions[1].solutions[0] + "</span><br/>");
    //  //    $('.content').append("<input type='radio' value='1' name='solution'>" + "<span>" + Quiz.questions[1].solutions[1] + "</span><br/>");
    //  //    $('.content').append("<input type='radio' value='2' name='solution'>" + "<span>" + Quiz.questions[1].solutions[2] + "</span><br/>");
    //  //    $('.content').append("<input type='radio' value='3' name='solution'>" + "<span>" + Quiz.questions[1].solutions[3] + "</span>");



    // $('.submit').click(){

    // }

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


























// function question2(){
// 	$('<h2>' + Quiz.questions[1].question + '</h2>').replaceAll('.content');
// 	$("<input type='radio' value='0' name='solution'>" + "<span>" + Quiz.questions[1].solutions[0] + "</span><br/>").replaceAll('.content');
// 	$("<input type='radio' value='0' name='solution'>" + "<span>" + Quiz.questions[1].solutions[1] + "</span><br/>").replaceAll('.content');
// 	$("<input type='radio' value='0' name='solution'>" + "<span>" + Quiz.questions[1].solutions[2] + "</span><br/>").replaceAll('.content');
// 	$("<input type='radio' value='0' name='solution'>" + "<span>" + Quiz.questions[1].solutions[3] + "</span>").replaceAll('.content');

//  // $('.content').append('<h2>' + Quiz.questions[1].question + '</h2>');
//  //    $('.content').append("<input type='radio' value='0' name='solution'>" + "<span>" + Quiz.questions[1].solutions[0] + "</span><br/>");
//  //    $('.content').append("<input type='radio' value='1' name='solution'>" + "<span>" + Quiz.questions[1].solutions[1] + "</span><br/>");
//  //    $('.content').append("<input type='radio' value='2' name='solution'>" + "<span>" + Quiz.questions[1].solutions[2] + "</span><br/>");
//  //    $('.content').append("<input type='radio' value='3' name='solution'>" + "<span>" + Quiz.questions[1].solutions[3] + "</span>");
// };








// 
//     
//     var input = parseInt($('#userGuess').val(), 10); // Submit the form, parse the actual input number
//     // check to see whether input exists in some guesses array.
//     // if it is not there, then push it to the global array

//     $('#userGuess').val("");


// $('.congo').submit(function(event) {
//     event.preventDefault();

//     if $('input[name=radioName]:checked', '.congo').val() {
//         alert("You are correct!");
//     }

//     else {
//         alert("Try again!");
//     };


// });
