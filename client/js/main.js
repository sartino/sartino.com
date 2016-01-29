var myBlogApp = angular.module('myBlogApp', ['ngRoute', 'ngResource', 'myBlogApp.factories', 'myBlogApp.controllers']);
// var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myBlogApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'views/main.html',
		controller  : 'homeController'
	})
	.when('/home', {
		templateUrl : 'views/main.html',
		controller  : 'homeController'
	})
	.when('/projects', {
		templateUrl : 'views/projects.html',
		controller  : 'homeController'
	})
    .when('/blog', {
		templateUrl : 'views/blog.html',
		controller  : 'blogController'
	})
    .otherwise({
        redirectTo: '/'
    });
}]);
