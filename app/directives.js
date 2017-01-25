angular.module('app.directives', [])
	.directive('navigationbar', [function(){
		return {
			controller: ['$scope', '$http', function($scope, $http){
				$http.get('posts/frontpage.json').success(function(data){
					$scope.pages = data;
				});
			}],
			restrict: 'E',
			templateUrl: '',
			replace: true,
		};
	}]);;
