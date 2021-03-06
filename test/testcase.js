var ModuleTestMD5 = (function(global) {

return new Test("MD5", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       true,
        button:     true,
        both:       true,
    }).add([
        testMD5String,
        testMD5Binary,
    ]).run().clone();

function testMD5String(test, pass, miss) {

    var source = "aaa";
    var answer = "47bce5c74f589f4867dbd57e9ca9f808";
    var md5HashString = MD5(source);

    if (answer === md5HashString) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testMD5Binary(test, pass, miss) {

    var source = "aaa";
    var answer = "47bce5c74f589f4867dbd57e9ca9f808";
    var md5HashArray = MD5.encode(DataType["Uint8Array"].fromString(source));
    var array = Array.prototype.slice.call(md5HashArray);

    var match = array.every(function(value, index) {
            var hex = parseInt(answer.slice(index * 2, index * 2 + 2), 16);

            return value === hex;
        });

    if (match) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

})((this || 0).self || global);

