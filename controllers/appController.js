angular.module('myApp')

	.factory('userDataFactory', ['$http', function($http) {
		return {
			userData: function() {
				var config = {
					headers : {
						'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'        	
                	}
                }
                return $http.get('json/data.json');
			}
		}
	}])

	app.run(function(editableOptions) {
		editableOptions.theme = 'bs3';
	})

	.controller('nav-ctrl', ['$scope', 'userDataFactory', function($scope, userDataFactory) {
		userDataFactory.userData()
			.success(function(resp) {
				$scope.info = resp;
			});
	}])
	.controller('general-ctrl', ['$scope', 'userDataFactory', function($scope, userDataFactory) {
		userDataFactory.userData()
			.success(function(resp) {
				$scope.info = resp;
			});
	}])
	.controller('academics-ctrl', ['$scope', 'userDataFactory', function($scope, userDataFactory) {
		userDataFactory.userData()
			.success(function(resp) {
				$scope.info = resp;
			});
		
	}])
	.controller('extra-ctrl', ['$scope', 'userDataFactory', function($scope, userDataFactory) {
		userDataFactory.userData()
			.success(function(resp) {
				$scope.info = resp;
			});
	}])
