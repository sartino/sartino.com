var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'views/main.html',
		controller  : 'homeController'
	})
	.when('/home', {
		templateUrl : 'views/main.html',
		controller  : 'homeController'
	})
	.when('/connie', {
		templateUrl : 'views/connie.html',
		controller  : 'newpostController'
	})
    .when('/anne', {
		templateUrl : 'views/anne.html',
		controller  : 'newpostController'
	})
	.when('/muriel', {
		templateUrl : 'views/muriel.html',
		controller  : 'blogdetailController'
	})
	.when('/mbct', {
		templateUrl : 'views/mbct.html',
		controller  : 'newpostController'
	})
	.when('/fees', {
		templateUrl : 'views/fees.html',
		controller  : 'blogdetailController'
	})
	.when('/imago', {
		templateUrl : 'views/imago.html',
		controller  : 'newpostController'
	})
	.when('/appt', {
		templateUrl : 'views/appt.html',
		controller  : 'newpostController'
	})
	.when('/forms', {
		templateUrl : 'views/forms.html',
		controller  : 'newpostController'
	})
	.when('/directions', {
		templateUrl : 'views/directions.html',
		controller  : 'newpostController'
	});
}]);
