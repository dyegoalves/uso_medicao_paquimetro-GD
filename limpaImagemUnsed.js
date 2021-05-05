let json = require('./game.json');
let name = new Array()
json.resources.resources.forEach(function (o, i) {
    name[i] = o.name
});
// readdir.js
var fs = require('fs');
var domain = require('domain').create();
fs.readdir('./', function (error, files) {
    var r3 = new Array()
    files.forEach(function (element, index, array) {
        if (name.indexOf(element) == -1)
            r3.push(element);

    });
    r3.forEach(function (element, index, array) {
        var fileExt = element.split('.').pop();
        if (fileExt == "png") {
            fs.unlink(element, function (err) {
                if (err) throw err;
                console.log('Arquivo deletado!');
            })
        }
    });
});