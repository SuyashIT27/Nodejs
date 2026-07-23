const fs = require("fs");
// witing on the file
fs.writeFile("text.txt", "this is i am writing with the code ", (err) => {
  if (err) {
    console.log("There is an error!");
    console.log(err.message);
  } else {
    console.log("File written sucessfully");
  }
});
// reading the file
fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) {
    console.log("There is an error");
    console.log(err.message);
    return;
  }
  console.log(data);
});
//Append on the file
fs.appendFile("text.txt", "\n this is the next line", (err) => {
  if (err) {
    console.log("There is the problem!");
  } else {
    console.log("file appended sucessfully.");
  }
});
// Delete a file
fs.unlink("text.txt", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("file deleted sucessfully.");
  }
});
// rename a folder
fs.rename("text.txt", "myData.txt", (err) => {
  if (err) console.log(err.message);
});
