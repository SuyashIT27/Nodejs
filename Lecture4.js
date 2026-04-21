const http = require("http");
function takingInput(req, res) {
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>testingRouting</title></head><body><h1>Welcome to by site</h1></body></html>",
    );
    return res.end();
  } else if (req.url === "/inputfiled") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h2>Registration Form</h2>");
    res.write(`
<form action="/submit-details" method="POST">

<label for="name">Name:</label><br>
<input type="text" id="name" name="name" required><br><br>

<label for="email">Email:</label><br>
<input type="email" id="email" name="email" required><br><br>

<label>Gender:</label><br>
<input type="radio" name="gender" value="male"> Male<br>
<input type="radio" name="gender" value="female"> Female<br>
<input type="radio" name="gender" value="other"> Other<br><br>

<button type="submit">Submit</button>

</form>`);

    return res.end();
  } else if (req.url === "/submit-details" && req.method == "POST") {
    // This is used to get the chunks of the data from the user 
    const body=[];
    req.on('data',chunks=>{
      body.push(chunks);
     // console.log(chunks);
    })
    // This will print the whole data.
    req.on('end',()=>{
      const fullBody=Buffer.concat(body).toString();
      console.log(fullBody);
      // Now we are parsing the request.
      const param=new URLSearchParams(fullBody);
      const data={};
      for(const[key,value] of param.entries()){
        data[key]=value;
      }
      console.log(data);
          const fs = require("fs");
    fs.writeFileSync("user.txt", JSON.stringify(data));
    })
    const fs = require("fs");
    //fs.writeFileSync("user.txt", "Suyash verma");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  } else {
    res.setHeader("Content-Type", "Suyash Verma");
    res.write(
      "<html><head><title>testingRouting</title></head><body><h1>I am hero! and a good coder</h1></body></html>",
    );
    return res.end();
  }
}
const server = http.createServer(takingInput);
server.listen(3060, () => {
  console.log("Server is running at http://localhost:3060");
});
