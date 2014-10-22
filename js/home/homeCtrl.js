angular.module("daviesEye").controller("homeCtrl", function($scope, homeService) {
	$scope.patientQuotes = homeService.getPatientQuotes();
})