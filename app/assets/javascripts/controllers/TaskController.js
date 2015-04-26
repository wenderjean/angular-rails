var TaskController = {
  list: function($scope, $http) {
    $http.get('/tasks').success(function(data) {
      $scope.tasks = data
    });  
  },
  form: function($scope, $location, $routeParams, $http) {
    var taskId = $routeParams.id;
    var HTTP_METHOD = taskId ? 'PUT' : 'POST';

    $scope.isEdit = taskId ? true : false;
    $scope.canDelete = false;
    $scope.task = {};
    $scope.label = 'Nova Tarefa';

    $scope.setDelete = function(canDelete) {
      $scope.canDelete = canDelete;
    }

    if(taskId) {
      $scope.label = 'Editar Tarefa';
      $http.get('/tasks/' + taskId).success(function(data) {
        $scope.task = data;
      }).error(function() {
        console.error('Failed to load.')
      })
    }

    $scope.save = function() {
      var json = angular.toJson($scope.task);
      var URL = HTTP_METHOD == 'POST' ? '/tasks' : '/tasks/' + taskId;

      $http({ method: HTTP_METHOD, url: URL, data: json }).success(function(response, status, headers) {
        $scope.form.$setPristine();
        $location.url('/tasks');
      });
    }

    $scope.destroy = function(task) {
      $http({ method: 'DELETE', url: 'tasks/' + task.id, data: task }).success(function(response, status, headers) {
        $location.url('/tasks');
      });
    }

    TaskController.list($scope, $http);
  },
  view: function ($scope, $routeParams, $http) {
    $scope.task = function(taskId) {
      $location.url('/task/' + taskId)
    };
  }
}