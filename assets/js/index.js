/*global angular window*/

(function (angular) {
  'use strict';

  var app = angular.module('720kb', [
    'ngRoute',
    '720kb.datepicker'
  ])
  .controller('TestController', ['$scope', '$interval', function TestController($scope, $interval) {
    var that = this;
    $scope.marked = []

    for (var i = 1; i < 4; i++) {
	    $scope.marked.push(new Date(2017, 3, i).getTime())
	}

    that.visibility = true;

  }]);
}(angular));
