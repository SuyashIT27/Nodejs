const http = require("http");
function data(req, res) {
  console.log(req);
}
const server = http.createServer((req,res)=>{
  console.log(req);
});
const PORT=3000;
server.listen(PORT,()=>{
  console.log(`Server was running at port http://localhost:${PORT}`);
})
