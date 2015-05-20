/**
 * XadillaX created at 2015-05-19 22:02:49
 *
 * Copyright (c) 2015 Huaban.com, all rights
 * reserved
 */
var should = require('should');

var rikku = require("../");

var binaryStr = 'Rikku\\x20\\xE5\\xB0\\xB1\\xE6\\x98\\xAF\\xE6\\x9C\\x80\\xE7\\xBB\\x88\\xE5\\xB9\\xBB\\xE6\\x83\\xB3\\xE9\\x87\\x8C\\xE9\\x9D\\xA2\\xE7\\x9A\\x84\\xE8\\x8E\\x89\\xE5\\x8F\\xAF\\xE3\\x80\\x82';
var normalStr = 'Rikku 就是最终幻想里面的莉可。'

describe('hi rikku', function() {
  it('rikku.decode should return ' + normalStr, function(done) {
    var decodeStr = rikku.decode(binaryStr);
    should(decodeStr).be.a.String;
    should(decodeStr).be.equal(normalStr)
    done()
  });

  it('rikku.encode should return ' + binaryStr.replace(/\\/g, '\\\\'), function(done) {
    var encodeStr = rikku.encode(normalStr);
    encodeStr.should.be.a.String;
    encodeStr.should.be.equal(binaryStr);
    done()
  });
});
