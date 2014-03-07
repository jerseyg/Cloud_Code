
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("tokenAuth", function (request, response) {
    Parse.Cloud.useMasterKey();

    var UserQuery = new Parse.Query(Parse.User);
        UserQuery.equalTo("objectId", request.params.userId);
        UserQuery.first().then(function(user){
            user.set("password", request.params.password);
            user.set("salt", request.params.salt);
            user.save().then(null, {
                error: function(user, error){
                    response.error("failed to save");
                }
            });
            response.success("user");
        }, function(error){
            response.error("failed to find user");
        });
});
