//Ler o JSON
let json = require('./game.json');
let name = new Array()
//Salva os nomes dos JSON game.json 
json.resources.resources.forEach(function (o, i) {
    name[i] = o.name
});
// readdir.js ,
/**
 * 1- LER O Diretorio os arquivos do diretorio em files;
 * 2- Compara FILES lista com NAME JSON nomes e salva em R3 a diferenca;
 * 3- R3 é a diferenca entre Name JSON e Diretorio lista files;
 * 4 - Delete somente arquivos .PNG da lista R3
 */
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