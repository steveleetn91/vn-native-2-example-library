var exec = require('cordova/exec');
module.exports = {
    run :  function(str,callback){
        exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Echo", "echo", [str]);
    }
}