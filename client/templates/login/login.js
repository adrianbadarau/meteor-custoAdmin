Template.login.events({
	'submit .form-signin': function (event) {
		event.preventDefault();

		var email = event.target.email.value;
		var pass = event.target.password.value;

		Meteor.loginWithPassword(email, pass, function(err){
			if(err){
				event.target.email.value = email;
				FlashMessages.sendError(err.reason);
			}else{
				FlashMessages.sendSuccess("You are now logged in");
				Router.go("/dashboard");
			}
		})
	}
});