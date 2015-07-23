import Ember from 'ember';
import EmberSet from 'ember-cli-set-replacement';

var computed = Ember.computed;
var service = Ember.inject.service;

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['btn-group'],

  store: service(),

  getActions: computed(function(){
    var solution = this.get('solution');

    // Compute state machine
    //
    // Ember.Set is deprecated, investigate new Set(), investigate how to keep
    // {{#each}} template processor happy with an Array.
    var states = new EmberSet();
    states.add(Ember.Object.create({
      action: 'install',
      name: 'install solution',
      disabled: 'disabled'
    }));
    states.add(Ember.Object.create({
      action: "deploy",
      name: 'deploy solution',
      disabled: 'disabled'
    }));
    states.add(Ember.Object.create({
      action: "backup",
      name: 'backup settings',
      disabled: 'disabled'
    }));
    states.add(Ember.Object.create({
      action: "activity",
      name: 'view activity log',
    }));
    return states.toArray();
  }),

  action: false,

  actions: {
    install: function() {
      this.toggleProperty('action', 'install');
    },
    deploy: function() {
      this.toggleProperty('action', 'deploy');
    },
    backup: function() {
      this.toggleProperty('action', 'backup');
    },
    activity: function() {
      this.toggleProperty('action', 'activity');
      console.log("view activity log...");
      this.sendAction('superAction','activity', this.get('solution'));
    }
  },
});
