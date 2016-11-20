//Export a Logger-like to avoid crashing winston clients
module.exports.Logger = function Logger() {};
module.exports.Logger.prototype = {
    cli: function() {},
    help: function() {},
    input: function() {},
    error: function() {}
};

module.exports.transports = {
    Console: function Console() {}
};
