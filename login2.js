function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="user")
{
    alert("login succesfully");
    return false;
window.location.replace"munal.me";
return;

}
else
{
    alert("login failed");
}


}
