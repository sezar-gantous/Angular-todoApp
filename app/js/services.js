'use strict';

/* Services */


angular.module('myApp.services', ['ngResource']).
    factory('todosF', function($resource){
  return $resource('todos/todos.json', {}, /*{
    query: {method:'GET', params:{todosId:'todos'}, isArray:true},*/{
    update: {method: 'PUT', data:{}, isArray: false}
  });
});
