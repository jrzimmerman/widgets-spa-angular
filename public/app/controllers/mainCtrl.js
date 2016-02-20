angular.module('mainCtrl', ['userService', 'widgetService'])

// controller for main view
.controller('mainController', function($scope, User, Widget) {
  // grab all users on page load
  User.all()
      .success(function(data) {
        $scope.users = data;
      });
  // grab all widgets on page load
  Widget.all()
      .success(function(data) {
        $scope.widgets = data;
      });
});