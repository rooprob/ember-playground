import Ember from 'ember';

var computed = Ember.computed;
var service = Ember.inject.service;

export default Ember.Component.extend({

  store: service(),

  solutions: computed(function(){
    return this.get('solutions');
  }),

  actions: {
    triggerSync: function() {
      alert('sync triggered');
    },
    triggerInstallation: function() {
      alert('installation triggered');
    },
  }
})
