var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', ($scope, $http, $location, $routeParams) => {
	console.log('BooksController loaded...');

	$scope.getBooks = () =>{
		$http.get('/api/books').then((response) => {
			$scope.books = response.data;
		});
	}

	$scope.getBook = () => {
		var id = $routeParams.id;
		$http.get('/api/books/'+id).then((response) =>{
			$scope.book = response.data;
		});
	}

	$scope.addBook = () => {
		console.log($scope.book);
		$http.post('/api/books/',$scope.book).then((response) =>{
			window.location.href= '#/books';
		});
	}	
	
	$scope.updateBook = () => {
		var id = $routeParams.id;
		$http.put('/api/books/'+id,$scope.book).then((response) => {
			window.location.href= '#/books';
		});
	}

	$scope.removeBook = (id) => {
		$http.delete('/api/books/'+id).then((response) => {
			window.location.href= '#/books';
		});
	}
}]);