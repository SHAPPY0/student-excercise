var app = angular.module("excercise", ["ngRoute"]);
 
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/", {templateUrl : "home.html"})
  
}]);




