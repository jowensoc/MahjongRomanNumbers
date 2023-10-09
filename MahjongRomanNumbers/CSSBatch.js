const fs = require('fs');
const path = require('path');
let shell = require("shelljs");

function addNewFileExtension(filePath, newFileExt) {
    return path.parse(filePath).name + newFileExt;
}

// MINIFY CSS FILES
let cssDir =  __dirname + "\\src\\public\\css\\";
let miniCSSFileExt = ".min.css";

fs.readdir(cssDir, function (err, files) {
    const myFiles = files.filter(el => path.extname(el) === '.js' && !(el.includes(miniCSSFileExt)));

    for(let idx=0; idx < myFiles.length; idx++) {
        let originalFileName = cssDir + "\\" + myFiles[idx];
        let newFileName = cssDir + addNewFileExtension(myFiles[idx], miniCSSFileExt);

        //shell.exec('uglifyjs "' + originalFileName +  '" -o "' + newFileName +  '"');
    }
});
