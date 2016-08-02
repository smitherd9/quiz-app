$(document).ready(function() {

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

                    }

                ]

            };

            randomQuestion();

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

            function randomQuestion() {
            	randomQ = Quiz.questions[Math.floor(Math.random()*Quiz.questions.length)];
            	console.log(randomQ);
            	// $('.content').append('<h2>' + randomQ.question.solutions + '</h2>');
            	nextQuestion();
            	

            };
            // var currentQuestion = Quiz.questions[0];

			question1();

            $('.question').submit(function(event) {
            	event.preventDefault();
            	var input = parseInt($('input[name=solution]:checked', '.question').val(), 10);
            	console.log(input);
            	userAnswers.push(input);
            	console.log(userAnswers + " pushed");
            	questionNum++;
            	$('#questionNum').text(questionNum);
            	checkAnswers();
            	randomQuestion();

            	// nextQuestion();

            	function checkAnswers() {
            	if (input === randomQ.answer) {
                    // alert("You are correct!");
                    score++;
                    $('#score').text(score);

                    }

                else {
                    alert("Sorry, dude!");
                    };                

            };

        });


            function nextQuestion() {
                	if (questionNum < Quiz.questions.length) {
                	$('<h2>' + randomQ.question + '</h2>').replaceAll('.content');                	
            		$("<input type='radio' value='0' name='solution'>" + "<span>" + randomQ.solutions[0] + "</span><br/>").replaceAll('.content');
            		$("<input type='radio' value='0' name='solution'>" + "<span>" + randomQ.solutions[1] + "</span><br/>").replaceAll('.content');
            		$("<input type='radio' value='0' name='solution'>" + "<span>" + randomQ.solutions[2] + "</span><br/>").replaceAll('.content');
            		$("<input type='radio' value='0' name='solution'>" + "<span>" + randomQ.solutions[3] + "</span>").replaceAll('.content');

                	}
                };


            // $('.submit').click(){

            // }



            function question1(){
             $('.content').append('<h2>' + randomQ.question  + '</h2>');
                $('.content').append("<input type='radio' value='0' name='solution'>" + "<span>" + randomQ.solutions[0] + "</span><br/>");
                $('.content').append("<input type='radio' value='0' name='solution'>" + "<span>" + randomQ.solutions[1] + "</span><br/>");
                $('.content').append("<input type='radio' value='0' name='solution'>" + "<span>" + randomQ.solutions[2] + "</span><br/>");
                $('.content').append("<input type='radio' value='0' name='solution'>" + "<span>" + randomQ.solutions[3] + "</span>");
            };

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

            });


            



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

               
