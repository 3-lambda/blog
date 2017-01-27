angular.module('app', [
	'ngRoute',
	'app.controllers'
]).config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/post.html',
		controller: 'PostController'
	}).when('/post/:id', {
		templateUrl: 'views/singlepost.html',
		controller: 'SinglePostController'
	}).when('/contato', {
		templateUrl: 'views/contato.html',
	}).when('/quem-somos', {
		templateUrl: 'views/quem-somos.html',
	}).when('/ebook', {
		templateUrl: 'views/ebook.html',
	}).otherwise({
		redirectTo: '/'
	});
}]);
