'use strict';

var testApp = angular.module('testApp', []);


testApp.controller('MessageController', ['$scope', function MessageController($scope){
	$scope.message = 'Controller says Hello.';
	$scope.testArr = ['John', 'Bill', 'Bob'];
}]);
