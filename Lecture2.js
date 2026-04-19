// .exit() is used to colse the server .
const http = require("http");
function running(req, respense) {
  //console.log(req.url , req.method,req.headers);
  // process.exit();
  respense.setHeader("Content-Type", "text/html");
  respense.write("<html>");
  respense.write("<head><title>Testing Reaponse</title><head>");
  respense.write("<body><h1>Suyash Verma</h1></body></html>");
  respense.end();
}
//Testing routing request
function testingRouting(req, res) {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>testingRouting</title></head><body><h1>Welcome to by site</h1></body></html>",
    );
    return res.end();
  } else if (req.url === "/aboutme") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>testingRouting</title></head><body><h1>I am hero! and a good coder</h1></body></html>",
    );
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>testingRouting</title></head><body><h1>Error!404</h1></body></html>",
    );
    return res.end();
  }
}
const server = http.createServer(testingRouting);
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
