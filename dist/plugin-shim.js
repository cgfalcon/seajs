(function(a,e){function d(b){if(b){b=b.shim;for(var a in b){var c=b[a];c.deps&&define(c.src,c.deps);define(a,[c.src],function(){var a=c.exports;return"function"===typeof a?a():e[a]})}}}a.on("config",d);d(a.config.data)})(seajs,this);
