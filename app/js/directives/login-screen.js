app.directive('loginScreen', function () {
    return{
        restrict: 'A',
        templateUrl: 'templates/user/login.html',
        controller: 'UserController.Login'
    }
});