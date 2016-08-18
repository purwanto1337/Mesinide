import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import '../imports/api/firstIdeas.js'; //import database
import '../imports/api/secondIdeas.js'; //import database
import '../imports/api/myIdeas.js'; //import database
//import '../imports/startup/accounts-config.js'; //import account configuration

import { FirstIdeas } from '../imports/api/firstIdeas.js';
import { SecondIdeas } from '../imports/api/secondIdeas.js';
import { MyIdeas } from '../imports/api/myIdeas.js';

Meteor.startup(function () {
  process.env.MAIL_URL="smtp://purwanto1337%40gmail.com:bodes@g6@smtp.gmail.com:465/";
  Accounts.emailTemplates.from = 'emailverificationtest <no-reply@emailverificationtest.com>';

  Accounts.emailTemplates.siteName = 'Email Verification Test';
});

Accounts.urls.verifyEmail = function(token){
  return Meteor.absoluteUrl('verify-email/'+token);
}


Meteor.methods({
	sendVerificationLink: function(email,id){
		Accounts.sendVerificationEmail(id,email);
	},
	setUsername: function(userId, newUsername) {
        Accounts.setUsername(userId, newUsername);
	},
    getFirstIdeasCount: function () {
        return FirstIdeas.find().count();
    },
    getSecondIdeasCount: function () {
        return SecondIdeas.find().count();
    }
});
