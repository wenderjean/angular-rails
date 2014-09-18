var CommentControllerList = function($scope, $routeParams, $http) {
  var taskId = $scope.task.id;
  $scope.count = 2;

  $scope.incrementCount = function() {
    $scope.count += 2;
  }

  $scope.loadComments = function(comment) {
    $http.get('/tasks/' + comment.task_id + '/comments').success(function(data) {
      $scope.comments = data
    }).error(function() {
      console.error('Failed to load.')
    })
  }

  $scope.destroy = function(comment) {
    $http({ method: 'DELETE', url: 'tasks/' + comment.task_id + '/comments/' + comment.id, data: comment })
    .success(function(response, status, headers) {
      $scope.loadComments(comment);
    });
  }

  $http.get('/tasks/' + taskId + '/comments').success(function(data) {
    $scope.comments = data
  }).error(function() {
    console.error('Failed to load.')
  })
}

var CommentControllerForm = function($scope, $routeParams, $http) {
  $scope.comment = {};

  $scope.save = function(task) {
    var json = angular.toJson($scope.comment);
    json.task_id = task.id;
    $http({ method: 'POST', url: 'tasks/' + task.id + '/comments', data: json })
    .success(function(response, status, headers) {
      $scope.form.$setPristine();
      $scope.loadComments(response);
      $scope.comment = {};
    });
  }
}