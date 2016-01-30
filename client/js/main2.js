var myBlogApp = angular.module('myBlogApp', ['ngRoute', 'ngResource', 'myBlogApp.factories', 'myBlogApp.controllers']);

myBlogApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'views/main.html',
		controller  : 'blogController'
	})
	.when('/home', {
		templateUrl : 'views/main.html',
		controller  : 'blogController'
	})
	.when('/projects', {
		templateUrl : 'views/projects.html',
		controller  : 'blogController'
	})
    .when('/blog', {
		templateUrl : 'views/blog.html',
		controller  : 'blogController'
	})
    .otherwise({
        redirectTo: '/'
    });
}]);
