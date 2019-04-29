let pastryApp = angular.module('pastryApp', ['ngRoute']);

pastryApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        template: '<ul><li ng-repeat="dessert in desserts">{{dessert.name}}</li></ul>',
        // templateUrl: "dessert-list.html",
        controller: 'PastryListCtrl'
    }).when('/:dessertName', {
        template: '<h1>Create desserts detail</h1>',
        // templateUrl: 'dessert-details.html',
        controller: 'PastryDetailCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});

/*pastryApp.factory('desserts', function ($http) {
    let cachedData;

    function getData(callback) {
        if (cachedData) {
            callback(cachedData);
        } else {
            $http.get('desserts.json').success(function (data) {
                cachedData = data;
                callback(data);
            });
        }
    }

    return {
        list: getData,
        find: function (name, callback) {
            getData(function (data) {
                let dessert = data.filter(function (entry) {
                    return entry.name === name;
                }) [0];
                callback(dessert);
            });
        }
    };
});*/

pastryApp.controller('PastryListCtrl', function ($scope, $http) {
    $http.get('js/desserts.json').then(function (data) {
        $scope.desserts = data;
    });
});

pastryApp.controller('PastryDetailCtrl', function ($scope, $routeParams) {
    console.log($routeParams);
});