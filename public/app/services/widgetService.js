angular.module('widgetService', [])

.factory('Widget', function($http) {

  // create a new factory object
  var widgetFactory = {};

  // get a single widget
  widgetFactory.get = function(id) {
    return $http.get('http://spa.tglrw.com:4000/widgets/' + id);
  };

  // get all widgets
  widgetFactory.all = function() {
    return $http.get('http://spa.tglrw.com:4000/widgets');
  };

  // create a widget
  widgetFactory.create = function(widgetData) {
    return $http.post('http://spa.tglrw.com:4000/widgets', widgetData);
  };

  // update a widget
  widgetFactory.update = function(id, widgetData) {
    return $http.put('http://spa.tglrw.com:4000/widgets/' + id, widgetData);
  };

  // return our entire widgetFactory object
  return widgetFactory;

});