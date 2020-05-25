var cordova = require('cordova');
module.exports = {
    run :  function(str,callback){
        cordova.exec(callback, function(err) {
            callback(err);
        }, "Echo", "echo", [str]);
    }
}