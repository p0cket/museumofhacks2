app.controller("mainCtrl", ["$scope","post",
  function($scope, post){
    debugger;

    $scope.submitQuestion(postContent) = function(postContent){
      debugger;
      post.submitQuestion(postContent);
    };

  }
]);
