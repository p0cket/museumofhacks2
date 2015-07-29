app.factory("post", ["$firebaseArray", "firebaseCollectionFactory", "FURL"
  function($firebaseArray, firebaseCollectionFactory, FURL) {
    var ref = new Firebase(FURL);
    var fbposts= firebaseCollectionFactory.getFirebaseArray('posts');

    var post = {
        submitQuestion: function(postContent) {
          fbposts.$add(postContent);
        }
    }
  return post;
  }
]);


app.factory("firebaseCollectionFactory", ["$firebaseArray",
  function($firebaseArray) {
    var service = {};

    service.getFirebaseArray = function(resource) {
      var ref = new Firebase("https://museumofhacks.firebaseio.com/" + resource);
      // this uses AngularFire to create the synchronized array
      return $firebaseArray(ref);
    }
  return service;
  }
]);
