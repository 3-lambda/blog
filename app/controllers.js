angular.module('app.controllers', [
	'app.directives'
])
	.controller('PostController', ['$scope', '$http', function($scope, $http){
		$http.get('data/posts.json').success(function(data){
			$scope.posts = data;

		});
	}])
	.controller('LeadController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
		$http.get('data/leads.json').success(function(data){
			$scope.leads = data;
			console.log("data: " + data)
		});

	}])
	.controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$http.get('data/posts.json').success(function(data){
			$scope.post = data[$routeParams.id];
		});
	}]);
