/**
 * XadillaX created at 2015-05-19 21:24:38
 *
 * Copyright (c) 2015 Huaban.com, all rights
 * reserved
 */
exports.decode = function(str) {
    return decodeURIComponent(str.replace(/\\x/g, "%"));
};


exports.encode = function(str) {
    return encodeURIComponent(str).replace(/\%/g, "\\x");
};