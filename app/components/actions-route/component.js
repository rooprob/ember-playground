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

  performInstallation: function() {

  },

  actions: {
    install: function() {
      var solution = this.get('solution').get('model');
      console.log("action name is ");
      console.log(this) ;
      this.sendAction('action', 'install', this.get('solution'));
    },
    deploy: function() {
      var solution = this.get('solution').get('model');
      this.sendAction('action', 'deploy', this.get('solution'));
    },
    backup: function() {
      var solution = this.get('solution').get('model');
      this.sendAction('action', 'backup', this.get('solution'));
    },
    activity: function() {
      var solution = this.get('solution').get('model');
      this.sendAction('action', 'activity', this.get('solution'));
    }
  },
});
