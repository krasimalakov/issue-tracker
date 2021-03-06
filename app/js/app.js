var app = angular.module('IssueTracker', ['ngRoute', 'ui.bootstrap.pagination', 'angular-loading-bar'])
    .constant('BASE_URL', 'http://softuni-issue-tracker.azurewebsites.net/')

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            })
            .when('/logout', {
                templateUrl: 'templates/user/logout.html',
                controller: 'UserController.Logout'
            })
            .when('/profile/password', {
                templateUrl: 'templates/user/change-password.html',
                controller: 'UserController.ChangePassword'
            })
            .when('/profile/set-admin', {
                templateUrl: 'templates/user/set-admin-permission.html',
                controller: 'UserController.SetAdminPermission'
            })
            .when('/projects', {
                templateUrl: 'templates/project/all-projects.html',
                controller: 'ProjectController.AllProjects'
            })
            .when('/projects/add', {
                templateUrl: 'templates/project/add-project.html',
                controller: 'ProjectController.AddProject'
            })
            .when('/projects/:id', {
                templateUrl: 'templates/project/view-project.html',
                controller: 'ProjectController.ViewProject'
            })
            .when('/projects/:id/edit', {
                templateUrl: 'templates/project/edit-project.html',
                controller: 'ProjectController.EditProject'
            })
            .when('/projects/:id/add-issue', {
                templateUrl: 'templates/issue/add-issue.html',
                controller: 'IssueController.AddIssue'
            })
            .when('/issues/:id', {
                templateUrl: 'templates/issue/view-issue.html',
                controller: 'IssueController.ViewIssue'
            })
            .when('/issues/:id/edit', {
                templateUrl: 'templates/issue/edit-issue.html',
                controller: 'IssueController.EditIssue'
            })
            .when('/issues/:id/add-comment', {
                templateUrl: 'templates/issue/add-comment.html',
                controller: 'IssueController.AddComment'
            });

        $routeProvider.otherwise({redirectTo: '/'});
    }]);

