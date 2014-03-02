
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("reset", function(request, response) {
  Parse.Cloud.useMasterKey();

  var query = new Parse.Query(Parse.User);
    query.equalTo("username", request.params.email); 
    query.find({
      success: function(user) {
          response.success(user);
     },
     error: function() {
      response.error("lookup failed");
    }
    });
  
});
