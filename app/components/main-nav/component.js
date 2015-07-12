import Ember from 'ember';

var computed = Ember.computed;
var service = Ember.inject.service;

export default Ember.Component.extend({

  store: service(),

  mainNav: computed(function() {
    var states = new Ember.Set();
    states.add(Ember.Object.create({
      location: 'solutions-route',
      active: null,
      title: 'Main',
    }));
    states.add(Ember.Object.create({
      location: 'about-profile',
      active: null,
      title: 'About',
    }));
    return states.toArray();
  }),

  actions: {
  }
})
