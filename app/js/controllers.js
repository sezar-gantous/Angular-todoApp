'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ui']).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('TodoCtrl',function($scope,$http,todosF){


 	/*$http.get('todos/todos.json').success(function(data) {
		$scope.todos = data;
		//alert("ok!");
	});*/


   $scope.todos =  [
    {text:'learn AngularJS', done:true},
     {text:'build this angular app', done:false}];
    
 $scope.todoText = '';

    $scope.addTodo = function() {

    	if(!isBlank($scope.todoText) )
	    {
	    	$scope.todos.push({text:$scope.todoText, done:false});
	        $scope.todoText = '';

	        //update json
	        todosF.update($scope.todos,
            function (data) {
                $scope.todos = data; // since backend send the updated user back
            });
	    }
    };
     
    $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
    count += todo.done ? 0 : 1;
    });
    return count;
    };
     
    $scope.clearCompleted = function() {
	    var oldTodos = $scope.todos;
	    $scope.todos = [];
	    
	    angular.forEach(oldTodos, function(todo) {
	 	   if (!todo.done) $scope.todos.push(todo);
	    });
	};
  });


/*
function TodoCtrl($scope,$http,todosF,ui) {
	


 	/*$http.get('todos/todos.json').success(function(data) {
		$scope.todos = data;
		//alert("ok!");
	});

 $scope.todoText = '';

   $scope.todos =  [
    {text:'learn angular', done:true},
     {text:'build an angular app', done:false}];
    
    $scope.addTodo = function() {

    	if(!isBlank($scope.todoText) )
	    {
	    	$scope.todos.push({text:$scope.todoText, done:false});
	        $scope.todoText = '';

	        //update json
	        todosF.update($scope.todos,
            function (data) {
                $scope.todos = data; // since backend send the updated user back
            });
	    }
    };
     
    $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
    count += todo.done ? 0 : 1;
    });
    return count;
    };
     
    $scope.clearCompleted = function() {
	    var oldTodos = $scope.todos;
	    $scope.todos = [];
	    
	    angular.forEach(oldTodos, function(todo) {
	 	   if (!todo.done) $scope.todos.push(todo);
	    });
	};
	


 }*/

 function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}