app.controller('myCtrl', function($scope) {

	$scope.hej = "hejsan";

});



app.controller('testCtrl', function($http, $scope) {

	$scope.output = null;

	$http({

		method: 'GET',
		url: 'http://127.0.0.1:3050/persons'

	}).then(function successCallback(response) {

		$scope.output = response.data;

	}, function errorCallback(response) {


	});

}):

