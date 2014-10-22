var app = angular.module("daviesEye", ["ngRoute"]);

app.config(function($routeProvider) {

	$routeProvider
	.when("/", {
		templateUrl: "js/home/homeTmpl.html",
		controller: "homeCtrl",
	}) 
	.when("/about-us", {
		templateUrl: "js/aboutUs/aboutUsTmpl.html",
		controller: "aboutUsCtrl"
	})
	.when("/procedures/:procedure", {
		templateUrl: "js/procedures/proceduresTmpl.html",
		controller: "proceduresCtrl"
	}) // Add other pages here
	.when("/financing", {
		templateUrl: "js/financing/financingTmpl.html",
		controller: "financingCtrl"
	})
	.when("/contact-us", {
		templateUrl: "js/contactUs/ContactUsTmpl.html",
		controller: "contactUsCtrl"
	})
	.otherwise({
		redirectTo: "/"
	});

})