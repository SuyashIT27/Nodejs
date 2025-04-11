function first()
{
  console.log("print first");  
}
function second()
{
    console.log("print second");
}
function third()
{
  console.log("print third");  
}
first();
second();
third();
// function normal
// using calling function display by function calculation
function display(res)
{
    console.log ("addition of two number is $(res)");
    }
    function calculation(a,b){
        let sum=a+b;
        display(sum);
    }
    calculation(3,3)
    // just to prevent the function of display inside the calculation fn even not to call two 
    function display(res)
    { 
        console.log("addition of two numberis $(res")
    }
    function calculation(a,b,cb){
        let sum=a+b;
        cb(sum);

    }
    calculation(4,3,display);
    function first(){
        console.log("Print First");
    }
    function third(){
        console.log("Print Third");
    }
