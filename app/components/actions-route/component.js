import Ember from 'ember';

var computed = Ember.computed;
var service = Ember.inject.service;

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['btn-group'],

  store: service(),

  getActions: computed(function(){
    var solution = this.get('solution');

    // compute state machine
    //
    var states = Ember.Set.create();
    states.add(Ember.Object.create({
      action: "install"
    }));
    states.add(Ember.Object.create({
      action: "deploy"
    }));
    states.add(Ember.Object.create({
      action: "backup"
    }));
    return states.toArray();
  }),
});
