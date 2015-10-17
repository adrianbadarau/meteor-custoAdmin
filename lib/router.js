Router.configure({
	layoutTemplate: "main"
})
Router.map(function(){
	// Login
	this.route('login',{
		layoutTemplate: 'full_width',
		path:"/login",
		template: "login"
	});

	// Register
	this.route('register',{
		layoutTemplate: 'full_width',
		path:"/register",
		template: "register"
	});

	this.route('dashboard',{
		path: '/dashboard',
		template: 'dashboard',
		onBeforeAction: function(){
			if(Meteor.user() == null){
				Router.go("/login");
			}
			this.next();
		}
	})
})