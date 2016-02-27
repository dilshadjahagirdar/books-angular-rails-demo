angular.module('bookApp',[
])
 .controller('BooksController', BooksController);

  function BooksController($http) {
    var vm = this;
    vm.marc = "Marc";
    vm.names = ["Marc", "Maren", "Diesel"]

    vm.books = getBooks().success(function(data){
      vm.books = data;
    });

    function getBooks(){
      return $http.get('http://localhost:3000/books.json');
    }    
  }