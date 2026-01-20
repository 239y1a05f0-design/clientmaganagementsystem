function login(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if (email==="bindu@gmail.com"&&password==="1234") 
    {
        alert("Please fill all fields");
    } 
    else
    {
        alert("Login successful");
    }
}