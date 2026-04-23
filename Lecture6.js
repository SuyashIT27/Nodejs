//Using npm and tools
const http=require('http');
function fetchData(req,res){
    console.log(req);
}
const server=http.createServer(fetchData);
server.listen(3007,()=>{
  console.log("Server was running at the port http://localhost:3007");
})