// LOcking the code 
// if we sync the file writing 
const fs=require('fs');
console.log("Before Writing the file");
fs.writeFileSync("file.txt","Hello my name is suyash",()=>{
  console.log("Wriritn on the file");
});
console.log("After writing on the file");
//if we do not use the sync in the file writing
console.log("Before writing");
fs.writeFile("file.txt","Hello i am hero",(err,data)=>{
  console.log("File written sucessfully");
});
console.log("After file writing");

