/*
* You can use this code everywhere.
* Do not hesitate to use it.
* Code by Md. Azad Hossen
* Facebook: www.facebook.com/azad.contact
* E-mail: azadhossendot@gmail.com
*/

//Creating function.
function validate(){
	//Grabbing data from form.
	var name = document.form.name.value;
	var email = document.form.email.value;
	var password = document.form.password.value;
	
	//Status for checking boolean value.
	var status = false;
	
	//Error message fields
	var errorName = document.getElementById('name_error');
	var errorEmail = document.getElementById('email_error');
	var errorPass = document.getElementById('pass_error');
	
	//Name validation process.
	if(name.length < 1){
		//Showing error message.
		errorName.innerHTML = "Please enter your name.";
		status = false;
	}else{
		status = true;
	}
	
	//Password validation process.
	if(password.length<8){
		errorPass.innerHTML = "Password must be at least 8 character long.";
		status = false;
	}else{
		status = true;
	}
	
	//Email validation process.
	var atposition = email.indexOf("@");
	var dotposition = email.lastIndexOf(".");
	
	if(atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){
		errorEmail.innerHTML = "Please enter a valid email address.";
		status = false;
	}else{
		status = true;
	}
	
	return status;
}