const fs = require('fs');
const path = require('path');
let shell = require("shelljs");

function addNewFileExtension(filePath, newFileExt) {
    return path.parse(filePath).name + newFileExt;
}

// MINIFY JAVASCRIPT FILES
let javscriptDir =  __dirname + "\\src\\public\\scripts\\";
let miniJavascriptFileExt = ".min.js";

fs.readdir(javscriptDir, function (err, files) {
    const myFiles = files.filter(el => path.extname(el) === '.js' && !(el.includes(miniJavascriptFileExt)));

    for(let idx=0; idx < myFiles.length; idx++) {
        let originalFileName = javscriptDir + "\\" + myFiles[idx];
        let newFileName = javscriptDir + addNewFileExtension(myFiles[idx], miniJavascriptFileExt);

        shell.exec('uglifyjs "' + originalFileName +  '" -o "' + newFileName +  '"');
    }
});