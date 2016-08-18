import { Template } from 'meteor/templating';
import { FirstIdeas } from '../api/firstIdeas.js';
import { SecondIdeas } from '../api/secondIdeas.js';
import { MyIdeas } from '../api/myIdeas.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './home.html';


Template.home.events({
    'click .generate'(events) {
        //firstIdeas
        Meteor.call('getFirstIdeasCount', function (err, count) {
            const firstIdeasRandomIndex = Math.floor((Math.random() * count));
            Session.set('firstIdeasRandomIndex', firstIdeasRandomIndex);
        });
        //secondIdeas
        Meteor.call('getSecondIdeasCount', function (err, count) {
            const secondIdeasRandomIndex = Math.floor((Math.random() * count));
            Session.set('secondIdeasRandomIndex', secondIdeasRandomIndex);
        });
    },
    'submit .save-ideas'(events) {
        event.preventDefault(event);
        const target = event.target;
        const ideaText = target.ideaText.value;
        MyIdeas.insert({
            text: ideaText
        })
        console.log("idea saved");
    }
})

Template.home.helpers({
    firstIdeas() {
        let rand = Session.get('firstIdeasRandomIndex');
        return FirstIdeas.find({
            index: rand
        })
    },
    secondIdeas() {
        let rand = Session.get('secondIdeasRandomIndex');
        return SecondIdeas.find({
            index: rand
        })
    }
});

//var count = FirstIdeas.count()
//console.log(count);
//var rand = function(){return Math.floor( Math.random() * count )}
//console.log(FirstIdeas.find());
