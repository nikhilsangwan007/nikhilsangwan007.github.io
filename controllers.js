angular.module('app', [])

	.factory('dataFactory', ["$http", function($http) {
		return {
			userData : function() {
				var config = {
					headers : {
						'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
					}
				}
				return $http.get('json/data.json');
			}
		}
	}])

	.controller('appController', ['$scope', 'dataFactory', function($scope, dataFactory) {
		dataFactory.userData()
			.success(function(resp) {
				$scope.info = resp;
				// console.log($scope.info[0].contributions);
			});
	}]);