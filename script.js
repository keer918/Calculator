function display(a)
{
document.getElementById("res").value+=a;
}
function cl()
{
document.getElementById("res").value="";
}
function compute()
{
let a=document.getElementById("res").value;
let b=eval(a);
document.getElementById("res").value=b;
}