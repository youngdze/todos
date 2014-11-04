var todoApp = angular.module('todoApp', [
    'ngCookies'
]);

todoApp.controller('todoController',['$scope', '$cookieStore', function ($scope, $cookieStore) {
    $scope.todos = [
        {
            todo: 'Date with GF at 7 pm.',
            completed: false
        },
        {
            todo: 'Another date with GF.',
            completed: false
        },
        {
            todo: 'Date has been completed.',
            completed: true
        }
    ];

    $scope.todosLength = function () {
        var j = 0;
        for (var i = 0; i < $scope.todos.length; i++) {
            if ($scope.todos[i].completed === false) {
                j++;
            }
        }
        return j;
    };

    $scope.addTodo = function () {
        if ($scope.newTodo == undefined || $scope.newTodo == '') {
            return false;
        } else {
            $scope.todos.push({
                todo: $scope.newTodo,
                completed: false
            });
            $scope.newTodo = null;
        }
    };

    $scope.deleteTodo = function (index) {
        $scope.todos.splice(index, 1);
    };
}]);