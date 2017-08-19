(function() {
	var app = angular.module('funQuiz', []);
	app.controller('QuizController', ['$scope', '$http', '$sce', function($scope,$http,$sce) {

		$scope.score = 0;
		$scope.activeQuestion = -1;
		$scope.activeQuestionAnswered = 0;
		$scope.percentage = 0;

		$http.get('../quizApp/quiz.json').then(function(quizData) {
			$scope.myQuestions = quizData.data;
			$scope.totalQuestions = $scope.myQuestions.length;
		});


		$scope.selectAnswer = function(qIndex,aIndex) {
			alert( qIndex + '' + aIndex);
		}




	}]);
})();