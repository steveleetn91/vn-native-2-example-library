var exec = require('cordova/exec');
module.exports = {
    run :  function(str,callback){
        return exec(callback, (err) => {
            callback(err);
        }, "Echo", "echo", [str]);
    }
}