app.controller("mainCtrl", ["$scope","post",
  function($scope, post){
    debugger;

    $scope.posts = post.posts;

    $scope.submitQuestion = function(postContent){
      debugger;
      post.submitQuestion(postContent);
    };

  }
]);
