var app = angular.module('myApp', ['angularUtils.directives.dirPagination'])
        .constant('API_URL', 'http://localhost/angulara/public/api/v1/');

    app.directive('myCustomUrl', function () {
        return {
            templateUrl:  public_path +'/views/emp.html'
        };
    });