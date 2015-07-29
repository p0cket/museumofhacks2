app.controller("mainCtrl", ["$scope","post",

    function($scope, post){
        $scope.submitQuestion(postContent){
            post.submitQuestion(postContent);
        };
    }
]);
