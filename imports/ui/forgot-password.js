import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

import './forgot-password.html';

Template.forgotPassword.events({
    'submit .forgot-password'(event) {
        event.preventDefault();
        const target = event.target;
        const email = target.email.value.toLowerCase();
        const options = {
            email: email
        }
        Accounts.forgotPassword(options, function(err, res) {
            if (err) {
                if (err.message === 'User not found [403]') {
                    console.log('This email does not exist.');
                } else {
                    console.log('We are sorry but something went wrong.');
                }
            }else {
                console.log('Email Sent. Check your mailbox.');
            }
        });
    }
});
