import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { MyIdeas } from '../api/myIdeas.js';

import './my-ideas.html';

Template.myIdeas.helpers({
    'ideas': function() {
        return MyIdeas.find();
    }
});
