angular.module('widgetCtrl', ['widgetService'])

// controller for all widgets view
.controller('widgetsController', function($scope, $http, Widget) {
  // $scope.createWidgetForm = {};
  $scope.create = false;

  // method to create widget
  $scope.createWidget = function() {
    $scope.createData = {
      name: $scope.widget.name,
      color: $scope.widget.color,
      price: $scope.widget.price,
      melts: $scope.widget.melts ? true : 'false',
      inventory: $scope.widget.inventory
    };
    console.log($scope.createData);
    Widget.create($scope.createData)
          .success(function(data) {
            // clear create data object
            $scope.createData = {};
            // refresh the widget data
            Widget.all()
                  .success(function(data) {
                    $scope.widgets = data;
                  });
            // on success hide create widget template
            $scope.create = false;
          })
          .error(function(data) {
            console.log('create error: ', data);
          });
  };

  // grab all widgets on page load
  Widget.all()
      .success(function(data) {
        $scope.widgets = data;
      });
})

// controller for single widget view
.controller('widgetController', function($scope, $routeParams, Widget) {
  $scope.edit = false;
  // grab the widget on page load
  Widget.get($routeParams.id)
      .success(function(data) {
        $scope.widget = data;
      });

  // method to edit widget
  $scope.editWidget = function() {
    $scope.editData = {
      name: $scope.widget.name,
      color: $scope.widget.color,
      price: $scope.widget.price,
      melts: $scope.widget.melts ? true : false,
      inventory: $scope.widget.inventory
    };
    console.log($scope.editData);
    Widget.update($routeParams.id, $scope.editData)
          .success(function(data) {
            // clear edit data object
            $scope.editData = {};
            // refresh the widget data
            Widget.all()
                  .success(function(data) {
                    $scope.widgets = data;
                  });
            // on success hide edit widget template
            $scope.edit = false;
          });
  };

});