var app = angular.module('myApp', ['ngRoute']);

app.controller('customersCtrl', function($scope, $http) {
                $http.get("JSON/data2.json")
                .success(function (response) {$scope.names = response.records;});
            });


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Assets', {
        templateUrl: 'carousel.html',
        controller: 'customersCtrl'
    }).
      when('/CaseStudies', {
        templateUrl: 'pageUnderConstruction.html',
        controller: 'customersCtrl'
    }).
      when('/ProofOfConcepts', {
        templateUrl: 'pageUnderConstruction.html',
        controller: 'customersCtrl'
    }).
      when('/ReusableFrameworks', {
        templateUrl: 'pageUnderConstruction.html',
        controller: 'customersCtrl'
    }).
      when('/TechnicalPresentations', {
        templateUrl: 'pageUnderConstruction.html',
        controller: 'customersCtrl'
    })
  }])
    
    
    
    
   