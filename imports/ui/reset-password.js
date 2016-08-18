import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './reset-password.html';

Template.resetPassword.helpers({
    'resetPassword': function(){
        return Session.get('resetPasswordToken');
    }
});

Template.resetPassword.events({
    'submit .resetPassword': function(event) {
        event.preventDefault();
        const target = event.target;
        const newPassword = target.newPassword.value;
        const newPasswordConfirm = target.newPasswordConfirm.value;

        if(newPassword === newPasswordConfirm) {
            Accounts.resetPassword(Session.get('resetPasswordToken'), newPassword, function(err) {
                if (err) {
                    console.log('We are sorry but something went wrong.');
                } else {
                    console.log('Your password has been changed. Welcome back!');
                    Session.set('resetPasswordToken', null);
                    FlowRouter.go('/');
                }
            });
        }else{
            console.log("New password doesn't match");
        }
    }
});
