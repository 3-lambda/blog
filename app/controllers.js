angular.module('app.controllers', [
	'app.directives',
	'firebase'
])
	.controller('PostController', ['$scope', '$http', "$firebaseObject", function($scope, $http){
		$http.get('posts/frontpage.json').success(function(data){
			$scope.posts = data;
		});
	}])
	.controller('LeadCtrl',
		function($scope, $http, $firebaseObject) {
			function validateEmail(email) {
			    var re = /\S+@\S+\.\S+/;
			    return re.test(email);
			}
			$scope.firedOnce = false;
			$scope.addLead = function(form){
				var ref = firebase.database().ref('leads')

				if ((validateEmail(form.email)) && (form.nome.length > 3) && !$scope.firedOnce){
					var d = new Date();
					form.data = d.toLocaleString();
					var request = new XMLHttpRequest();
					request.open('GET', '//api.ipify.org?format=jsonp&callback=?', true);
					request.onload = function() {
						if (request.status >= 200 && request.status < 400) {
							form.ip = request.responseText.slice(9,-4);
							// checkIfUserExists(form.email)
							ref.push(form)
							$scope.firedOnce = true
						}
					};
					request.onerror = function() {
					};
					request.send();
				}
			}

	})
	.controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$http.get('posts/frontpage.json').success(function(data){
		  $scope.template = '../posts/templates/' + $routeParams.id + '.html'
		});
	}]);
