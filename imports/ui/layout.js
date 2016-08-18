import { Template } from 'meteor/templating';
import './layout.html';

import './logout.js';

Template.layout.events({
    'click .test1':function(event) {
        $('.test2').hide();
        console.log("jalan");
    }
});

Meteor.startup(function() {
    console.log("meteor startup")
    $(document).ready(function() {
        $('.test2').hide();
    })

});
