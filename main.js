const fs = require("fs");

/*

-->first create directory
        
        -->     create folders of which type
-->loop all the files inside direcotry and move from current path to their specific direcotory

*/

/*

separating --> 1)html files 2)images files 3)video(mp4 files) 4)pdf's and excels and txt 5)others into one folder


*/

//This function check file or directory exists or not and returns true or false
function checkFileExists(path) {
  return fs.existsSync(path);
}

//current is the direcory where you want to organize the files

let current = "";
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "specify the directory  path which you want to organize ?",
  (directory) => {
    current = directory;
    readline.close();
    organizeDirectory();
  }
);

//reading the direcotry where user specfied above(current)

function organizeDirectory() {
  fs.readdir(current, (err, files) => {
    //inside inside directory ,looping every file
    files.forEach((file) => {
      //extracting the extension of file
      let fileNamePath = file.split(".")[1];

      //if extension is html
      if (fileNamePath == "html") {
        let path = current + `/html`;

        if (!checkFileExists(path)) {
          fs.mkdirSync(path);
        }

        fs.rename(current + `/${file}`, path + `/${file}`, function (err) {});
      }

      //if extension is files like txt or pdf or excel
      else if (
        fileNamePath == "txt" ||
        fileNamePath == "pdf" ||
        fileNamePath == "xlsx" ||
        fileNamePath == "docx" ||
        fileNamePath == "epub" ||
        fileNamePath == ".org)"
      ) {
        let path = current + `/files`;

        if (!checkFileExists(path)) {
          fs.mkdirSync(path);
        }

        fs.rename(current + `/${file}`, path + `/${file}`, function (err) {});
      }

      //if extension is zip files files
      else if (fileNamePath == "rar" || fileNamePath == "7z") {
        let path = current + `/zipFiles`;

        if (!checkFileExists(path)) {
          fs.mkdirSync(path);
        }

        fs.rename(current + `/${file}`, path + `/${file}`, function (err) {});
      }

      //if extension is exe files
      else if (fileNamePath == "exe" || fileNamePath == "msi") {
        let path = current + `/DownloadedApps`;

        if (!checkFileExists(path)) {
          fs.mkdirSync(path);
        }

        fs.rename(current + `/${file}`, path + `/${file}`, function (err) {});
      }

      //if extension is mp4(videos)(.wmv)
      else if (
        fileNamePath == "mp4" ||
        fileNamePath == "wmv" ||
        fileNamePath == "mkv"
      ) {
        let path = current + `/video`;

        if (!checkFileExists(path)) {
          fs.mkdirSync(path);
        }

        fs.rename(current + `/${file}`, path + `/${file}`, function (err) {});
      }

      //if extension is images like (jpg or jpeg or png)
      else if (
        fileNamePath == "jpg" ||
        fileNamePath == "jpeg" ||
        fileNamePath == "png"
      ) {
        let path = current + `/images`;

        if (!checkFileExists(path)) {
          fs.mkdirSync(path);
        }

        fs.rename(current + `/${file}`, path + `/${file}`, function (err) {});
      }
      //any other files and folders goes to other folder
      else {
        path = current + `/others`;

        if (!checkFileExists(path)) {
          fs.mkdirSync(path);
        }

        fs.rename(current + `/${file}`, path + `/${file}`, function (err) {});
      }
    });
  });
}
//input : C:\Users\Revanth\Downloads
