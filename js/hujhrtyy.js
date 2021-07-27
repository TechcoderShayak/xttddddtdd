
function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.value.match(phoneno))
  {
      return true;
  }
  
  else 
   {  if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
   else{
    alert("You have entered an invalid email address!")
    return (false)
	}
}
  else 
  {
     alert("Not a valid Phone Number");
     return false;
  }
  }