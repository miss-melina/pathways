ToDo.controller('ToDoController',['$scope',function($scope){
	$scope.todos = [
	  {'title':'Testing','done':false}
	];
$scope.addtodo = function(){
  $scope.todos.push({'title':$scope.newTodo,'done':false});
  $scope.newTodo = '';

}
$scope.clearCompleted = function(){
  $scope.todos = $scope.todos.filter(function(item){
    return !item.done;
  })


}
}])
