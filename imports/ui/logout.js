import { Template } from 'meteor/templating';
import {FlowRouter} from 'meteor/kadira:flow-router';

import './logout.html';

Template.logout.events({
    'click .logout'(event) {
        Meteor.logout();
        FlowRouter.go('/');
    }
});
