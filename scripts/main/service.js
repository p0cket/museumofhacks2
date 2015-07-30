app.factory("post", ["$firebaseArray", "firebaseCollectionFactory", "FURL",
  function($firebaseArray, firebaseCollectionFactory, FURL) {
    var ref = new Firebase(FURL);
    var fbposts= firebaseCollectionFactory.getFirebaseArray('posts');


    var post = {
        submitQuestion: function(postContent) {
          fbposts.$add(postContent);
        },

        posts: fbposts,
    }
  return post;
  }
]);


app.factory("firebaseCollectionFactory", ["$firebaseArray", "FURL",
  function($firebaseArray, FURL) {
    var service = {};

    service.getFirebaseArray = function(resource) {
      debugger;
      var ref = new Firebase( FURL + resource);
      // this uses AngularFire to create the synchronized array
      return $firebaseArray(ref);
    }
  return service;
  }
]);
