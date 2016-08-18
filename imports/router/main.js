import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';


FlowRouter.route('/', {
    name: 'index',
    action: function() {
        if(Meteor.userId()){
            BlazeLayout.render('layout', {main: 'home'});
        }else{
            BlazeLayout.render('layout', {main: 'landing'});
        }
    }
});

//User Accounts
FlowRouter.route('/signup', {
    name: 'signup',
    action: function() {
       BlazeLayout.render('layout', {main: 'signup'});
    }
});
FlowRouter.route('/login', {
    name: 'login',
    action: function() {
       BlazeLayout.render('layout', {main: 'login'});
    }
});
FlowRouter.route('/forgot-password', {
    name: 'forgot-password',
    action: function() {
       BlazeLayout.render('layout', {main: 'forgotPassword'});
    }
});
FlowRouter.route('/reset-password', {
    name: 'reset-password',
    action: function() {
       BlazeLayout.render('layout', {main: 'resetPassword'});
    }
});
FlowRouter.route('/check-your-email', {
    name: 'check-your-email',
    action: function() {
       BlazeLayout.render('layout', {main: 'check-your-email'});
    }
});
FlowRouter.route('/verify-email/:token', {
    name: 'verify-email',
    action: function(params) {
        Accounts.verifyEmail(params.token, function(){
    		FlowRouter.go('/email-verified');
    	});
    }
});
FlowRouter.route('/email-verified', {
    name: 'email-verified',
    action: function() {
        BlazeLayout.render('layout', {main: 'email-verified'});
    }
});
FlowRouter.route('/settings', {
    name: 'settings',
    action: function() {
        BlazeLayout.render('layout', {main: 'settings'});
    }
});
FlowRouter.route('/notifications', {
    name: 'notifications',
    action: function() {
        console.log("Notifications");
    }
});
FlowRouter.route('/messages', {
    name: 'messages',
    action: function() {
        console.log("messages");
    }
});
FlowRouter.route('/friends', {
    name: 'friends',
    action: function() {
        console.log("friends");
    }
});






//Public Page
FlowRouter.route('/about', {
    name: 'about',
    action: function() {
        BlazeLayout.render('layout', {main: 'about'});
    }
});
FlowRouter.route('/terms-of-service', {
    name: 'terms-of-service',
    action: function() {
        BlazeLayout.render('layout', {main: 'termsOfService'});
    }
});
FlowRouter.route('/privacy', {
    name: 'privacy',
    action: function() {
        BlazeLayout.render('layout', {main: 'privacy'});
    }
});
FlowRouter.route('/pricing', {
    name: 'pricing',
    action: function() {
        BlazeLayout.render('layout', {main: 'pricing'});
    }
});
FlowRouter.route('/platforms', {
    name: 'platforms',
    action: function() {
        BlazeLayout.render('layout', {main: 'platforms'}); //trello.com/platforms
    }
});
FlowRouter.route('/features', {
    name: 'features',
    action: function() {
        BlazeLayout.render('layout', {main: 'features'});
    }
});
FlowRouter.route('/contact', {
    name: 'contact',
    action: function() {
        BlazeLayout.render('layout', {main: 'contact'});
    }
});
FlowRouter.route('/brand-guidelines', {
    name: 'brand-guidelines',
    action: function() {
        BlazeLayout.render('layout', {main: 'brandGuidelines'}); //https://slack.com/brand-guidelines
    }
});


//Ideas
FlowRouter.route('/my-ideas', {
    name: 'my-ideas',
    action: function() {
        BlazeLayout.render('layout', {main: 'myIdeas'}); //https://slack.com/brand-guidelines
    }
});


//Username Profile  - Must in last line
FlowRouter.route('/users/:username', {
    name: 'profile',
    action: function(params) {
        console.log("Hello " + params.username);
    }
});


//404 Not Found Page
FlowRouter.notFound = {
    action: function() {
        console.log("Page not found");
    }
};
