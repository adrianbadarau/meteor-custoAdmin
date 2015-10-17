Template.register.events({
	'submit .form-signup': function (event) {
		event.preventDefault();
		var email = trimInput(event.target.email.value);
		var pass = trimInput(event.target.password.value);
		var pass2 = trimInput(event.target.password2.value);
		var first_name = trimInput(event.target.first_name.value);
		var last_name = trimInput(event.target.last_name.value);
		if(isNotEmpty(email)&&(isNotEmpty(first_name))){
			if(pass === pass2){
				Accounts.createUser({
					email:email,
					password:pass,
					profile:{
						first_name: first_name,
						last_name: last_name
					}
				},function(err){
					if(err){
						FlashMessages.sendError("there was an error with registration");
						console.log(err);
					}else{
						FlashMessages.sendSuccess("Account Created, you are now loged in");
						Router.go('/dashboad');
					}
				});
			}else{
				FlashMessages.sendError("Passwords do not match");
			}
		}
	}
});

// Validation

// Trim Helper
var trimInput = function(val){
	return val.replace(/^\s*|\s$/g, "");
}
// Check for empty fields
isNotEmpty = function(value){
	if(value && value !== ''){
		return true;
	}
	FlashMessages.sendError("Please fill all the fields");
	return false;
}