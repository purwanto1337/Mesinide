import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

import './settings.html';

Template.settings.events({
    'submit .settings'(event) {
        event.preventDefault();
        const target = event.target;
        const newUsername = target.username.value;
        const userId = Meteor.userId();
        const oldPassword = target.oldPassword.value;
        const newPassword = target.newPassword.value;
        const newPassword2 = target.newPassword2.value;
        const user = Meteor.user();

        Meteor.call('setUsername', userId, newUsername, function(err, res) {
            if(!err) {
                console.log("Changing username successfully");
                Meteor.users.update(userId, {
        			$set: {
        				"profile.editableUsername": false
        			}
                });
            }else{
                console.log(err.reason);
            }
        });
        if(newPassword === newPassword2) {
            Accounts.changePassword(oldPassword, newPassword, function(err, res) {
                if(!err) {
                    console.log("Changing password successfully");
                }else{
                    console.log(err.reason);
                }
            });
        }else{
            console.log("beda");
        }
        target.username.value = "";
        target.oldPassword.value = "";
        target.newPassword.value = "";
        target.newPassword2.value = "";
    }
});
Template.settings.helpers({
    'users': function() {
        return Meteor.users.find({_id: Meteor.userId()});
    },
    'editableUsername' : function() {
        var user = Meteor.user();
        var editableUsername = Meteor.users.findOne(user._id);
        return editableUsername.profile.editableUsername;
    },
    'verifiedUser' : function() {
        var user = Meteor.user();
        var verifiedUser = Meteor.users.findOne(user._id);
        return verifiedUser.emails[0].verified;
    }

});
