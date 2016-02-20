angular.module('userService', [])

.factory('User', function($http) {

  // create a new factory object
  var userFactory = {};

  // get a single user
  userFactory.get = function(id) {
    return $http.get('http://spa.tglrw.com:4000/users/' + id);
  };

  // get all users
  userFactory.all = function() {
    return $http.get('http://spa.tglrw.com:4000/users');
  };

  // return our entire userFactory object
  return userFactory;

});