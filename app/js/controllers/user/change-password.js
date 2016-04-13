'use strict';

app.controller('UserController.ChangePassword', [
    '$scope',
    '$location',
    'notifyService',
    'userService',
    function ($scope, $location, notifyService, userService) {
        $scope.changePassword = function (userData) {
            userService.changePassword(userData).then(function (result) {
                notifyService.showInfo('User change password is successful !');
                $location.path('/');
            }, function (error) {
                notifyService.showError('User change password failed !', error);
            });
        };
    }]);