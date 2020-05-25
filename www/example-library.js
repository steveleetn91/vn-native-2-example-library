var exec = require('cordova/exec');
module.exports = {
    run :  function(str,callback){
        exec(callback, function(err) {
            callback(err);
        }, "Echo", "echo", [str]);
    }
}