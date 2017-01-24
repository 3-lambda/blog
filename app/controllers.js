angular.module('app.controllers', [
	'app.directives',
	'firebase'
])
	.controller('PostController', ['$scope', '$http', "$firebaseObject", function($scope, $http){
		$http.get('data/posts.json').success(function(data){
			$scope.posts = data;

		});
	}])
	.controller('LeadCtrl',
		function($scope, $http, $firebaseObject) {
			function validateEmail(email) {
			    var re = /\S+@\S+\.\S+/;
			    return re.test(email);
			}
			$scope.addLead = function(form){
				if (validateEmail(form.email)){
					var d = new Date();
					form.data = d.toLocaleString();
					var request = new XMLHttpRequest();
					request.open('GET', '//api.ipify.org?format=jsonp&callback=?', true);
					request.onload = function() {
					  if (request.status >= 200 && request.status < 400) {
					    form.ip = request.responseText.slice(9,-4);

							var ref = firebase.database().ref();
							ref.push(form);
					  }
					};
					request.onerror = function() {
					};
					request.send();
				}

				console.log(form)

			}
	})
	.controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$http.get('data/posts.json').success(function(data){
			$scope.post = data[$routeParams.id];
		});
	}]);
