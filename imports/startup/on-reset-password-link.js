import {Accounts} from 'meteor/accounts-base';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

Accounts.onResetPasswordLink(function(token, done){
  console.log('Please reset your password');
  Session.set('resetPasswordToken', token)
  FlowRouter.go('/reset-password')
});
