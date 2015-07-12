import Ember from 'ember';

var computed = Ember.computed;
var service = Ember.inject.service;

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['btn-group'],

  store: service(),

  getSettings: computed(function(){
    var solution = this.get('solution');

    // Compute state machine
    //
    // Ember.Set is deprecated, investigate new Set(), investigate how to keep
    // {{#each}} template processor happy with an Array.
    var states = new Ember.Set();
    states.add(Ember.Object.create({
      action: "configure"
    }));
    states.add(Ember.Object.create({
      action: "licenses"
    }));
    states.add(Ember.Object.create({
      action: "certificates"
    }));
    return states.toArray();
  }),

  actions: {
    configure: function() {
      var solution = this.get('solution').get('model');
      this.sendAction('action', 'configure', this.get('solution'));
    },
    licenses: function() {
      var solution = this.get('solution').get('model');
      this.sendAction('action', 'licenses', this.get('solution'));
    },
    certificates: function() {
      var solution = this.get('solution').get('model');
      this.sendAction('action', 'certificates', this.get('solution'));
    }
  },
});
