import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    triggerSync: function() {
      alert('sync triggered');
    },
    triggerInstallation: function() {
      alert('installation triggered');
    },
  }
});
