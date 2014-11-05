var todoApp = angular.module('todoApp', [
    'ngCookies',
    'todoApp.todoDirectives'
]);

todoApp.controller('todoController',['$scope', '$cookieStore', function ($scope, $cookieStore) {
    $scope.todos = [
        {
            todo: 'Date with GF at 7 pm.',
            completed: false,
            editable: false
        },
        {
            todo: 'Another date with GF.',
            completed: false,
            editable: false
        },
        {
            todo: 'Date has been completed.',
            completed: true,
            editable: false
        }
    ];


    $scope.init = function () {
        if ($cookieStore.get('todos') != '' && $cookieStore.get('todos') != null) {
            $scope.todos = $cookieStore.get('todos');
        }
    }

    $scope.todosLength = function () {
        var j = 0;
        angular.forEach($scope.todos, function (todo) {
            if (todo.completed === false) {
                j++;
            }
        });
        return j;
    };

    $scope.editOn = function (index) {
        $scope.todos[index].editable = true;
    };

    $scope.editOff = function (index) {
        $scope.todos[index].editable = false;
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

        $scope.cookieStore();
    };

    $scope.deleteTodo = function (index) {
        $scope.todos.splice(index, 1);
        $scope.cookieStore();
    };

    $scope.cookieStore = function () {
        angular.forEach($scope.todos, function (todo) {
            todo.editable = false;
        });
        $cookieStore.put('todos', $scope.todos);
    };

    $scope.debug = function () {
        alert('hello');
    };

    $scope.completedAllParam = false;

    $scope.completeToggle = function () {
        $scope.completedAllParam = !$scope.completedAllParam;
        angular.forEach($scope.todos, function(todo) {
            todo.completed = $scope.completedAllParam;
            $scope.cookieStore();
        });
    };
}]);