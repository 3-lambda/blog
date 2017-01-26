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
	}).when('/leads', {
		templateUrl: 'views/leads.html',
		controller: 'LeadController'
	}).when('/contato', {
		templateUrl: 'views/contato.html',
		controller: 'LeadController'
	}).when('/quem-somos', {
		templateUrl: 'views/quem-somos.html',
		controller: 'LeadController'
	}).otherwise({
		redirectTo: '/'
	});
}]);
