'use strict';

app.controller('UserController.Login', [
    '$scope',
    '$location',
    'notifyService',
    'userService',
    function ($scope, $location, notifyService, userService) {
        // todo: remove init username password
        $scope.user = {username: 'krasi@krasi.com', password: '123456'};

        $scope.login = function (user) {
            userService.login(user).then(function (result) {
                notifyService.showInfo('User login is successful !');
                $location.path('/');
            }, function (error) {
                notifyService.showError('User login failed !', error);
            });
        };
    }]);