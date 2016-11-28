var app = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMdIcons', 'xeditable']);

	app.config([
		'$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
			$locationProvider.html5Mode(false);
			$routeProvider.when('/general', {
				templateUrl: 'templates/general.html',
				controller: 'general-ctrl'
			}).when('/academics', {
				templateUrl: 'templates/academics.html',
				controller: 'academics-ctrl'
			}).when('/extra', {
				templateUrl: 'templates/extra.html',
				controller: 'extra-ctrl'
			}).otherwise({
				redirectTo: '/general'
			});
		}
		]);