app.controller('MainController', ['$scope', function($scope) {

// add the scope and a function that takes the scope

	$scope.list = ["Creativity Inc.", "Outliers", "Positioning", "Above The fold"];
	$scope.addItem = function(){
		$scope.list.push($scope.addToList);
	}

}])