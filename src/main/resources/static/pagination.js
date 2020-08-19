var app = angular.module('app', ['ngRoute']);
var contextPath = 'http://localhost:8189/store'

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'about-page.html',
            controller: 'aboutController'
        })
        .when('/books', {
            templateUrl: 'book-store.html',
            controller: 'booksController'
        })
});

$scope.findBooks = function (pageNumber) {
    fillTable(pageNumber, $scope.form);
};
