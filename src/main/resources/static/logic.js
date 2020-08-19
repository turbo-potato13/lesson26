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


app.controller('aboutController', function ($scope, $http) {
    fillTable = function () {
        $http.get(contextPath + '/api/v1/books/dtos')
            .then(function (response) {
                $scope.PopularBooksList = response.data;
            });
    }
    fillTable();
});

app.controller('booksController', function ($scope, $http) {
    $scope.form = {};
    $scope.fillTable = function (page) {
        $scope.currentPage = page;
        $http.get(contextPath + '/api/v1/books?p=' + page + getFilter($scope.form))
            .then(function (response) {
                $scope.BooksList = response.data.content;
                $scope.Page = response.data;
            });
    };

    $scope.fillPrevious = function () {
        if ($scope.currentPage > 1) {
            $http.get(contextPath + '/api/v1/books?p=' + (--$scope.currentPage) + getFilter($scope.form))
                .then(function (response) {
                    $scope.BooksList = response.data.content;
                    $scope.MaxPage = response.data.totalPages;
                });
        }
    };

    $scope.fillNext = function () {
        if ($scope.currentPage < $scope.MaxPage)
            $http.get(contextPath + '/api/v1/books?p=' + (++$scope.currentPage) + getFilter($scope.form))
                .then(function (response) {
                    $scope.BooksList = response.data.content;
                });
    };

    $scope.fillGenres = function () {
        $http.get(contextPath + '/api/v1/genres')
            .then(function (response) {
                $scope.Genres = response.data;
            });
    };

    $scope.submitCreateNewBook = function () {
        $http.post(contextPath + '/api/v1/books', $scope.newBook)
            .then(function (response) {
                $scope.BooksList.push(response.data);
            });
    };

    function getFilter(params) {
        var result = "";
        if (params['minPrice']) {
            result += '&minPrice=' + params['minPrice'];
        }
        if (params['maxPrice']) {
            result += '&maxPrice=' + params['maxPrice'];
        }
        if (params['titlePart']) {
            result += '&titlePart=' + params['titlePart'];
        }
        return result;
    }

    $scope.fillTable(1);
});