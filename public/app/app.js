angular.module('widgetApp',['ngRoute', 'mainCtrl', 'userCtrl', 'userService', 'widgetCtrl', 'widgetService'])

.config(function($routeProvider, $locationProvider) {

  $routeProvider

    // route for the main page
    .when('/', {
      templateUrl : 'app/views/pages/main.html',
      controller: 'mainController'
    })
    
    // show all users
    .when('/users', {
      templateUrl: 'app/views/pages/users.html',
      controller: 'usersController'
    })

    // show all widgets
    .when('/widgets', {
      templateUrl: 'app/views/pages/widgets.html',
      controller: 'widgetsController'
    })

    // show a user
    .when('/users/:id', {
      templateUrl: 'app/views/pages/user.html',
      controller: 'userController'
    })

    // show a widget
    .when('/widgets/:id', {
      templateUrl: 'app/views/pages/widget.html',
      controller: 'widgetController'
    });

  // get rid of that pesky # when available
  $locationProvider.html5Mode(true);

});