app.controller("mainCtrl", ["$scope","post",
  function($scope, post){
    debugger;

    $scope.submitQuestion = function(postContent){
      debugger;
      post.submitQuestion(postContent);
    };

  }
]);
