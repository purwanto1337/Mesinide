import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';

import './signup.html';




Template.signup.events({
    'submit .signup'(event) {
        event.preventDefault();
        const target = event.target;
        const firstName = target.firstName.value;
        const lastName = target.lastName.value;
        const email = target.email.value;
        const password = target.password.value;
        const options = {
            email: email,
            password: password,
            profile: {
                editableUsername: true,
                firstName: firstName,
                lastName: lastName
            }
        }
        Accounts.createUser(options, function(err, res) {
            if(err) {
                console.log(err.reason);
            }else{
                console.log("Registration success");
                Meteor.call('sendVerificationLink', email, Meteor.userId(), function(err, res) {
                    if(err) {
                        console.log(err.reason);
                    }else{
                        console.log('An email verification link has been sent to your account....Click the link to verify.');
                        FlowRouter.go('/check-your-email');
                    }
                })
            }
        });
        Meteor.loginWithPassword(email, password, function(err) {
            if(!err) {
                console.log("logging in");
            }
        });
        target.firstName.value = "";
        target.lastName.value = "";
        target.email.value = "";
        target.password.value = "";
    }
});
