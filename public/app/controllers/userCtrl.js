angular.module('userCtrl', ['userService'])

// controller for all users view
.controller('usersController', function($scope, User) {
  // grab all users on page load
  User.all()
      .success(function(data) {
        // on success store all users data into scope
        $scope.users = data;
      });
})

// controller for single user view
.controller('userController', function($scope, $routeParams, User) {
  // grab the user on page load
  User.get($routeParams.id)
      .success(function(data) {
        // on success store user data into scope
        $scope.user = data;
      });
});