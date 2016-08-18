import { Template } from 'meteor/templating';

import './login.html';

Template.login.events({
    'submit .login'(event) {
        event.preventDefault();
        const target = event.target;
        const selector = target.selector.value;
        const password = target.password.value;
        Meteor.loginWithPassword(selector, password)
        target.selector.value = "";
        target.password.value = "";
    }
});