import Ember from 'ember';

export default Ember.Controller.extend({

  name: Ember.computed.alias('model.name'),
  version: Ember.computed.alias('model.version'),
  release: Ember.computed.alias('model.release'),
  status: Ember.computed.alias('model.status'),

  uiClass: function(key, value) {
    if (this.model.get('status') >= 500) {
      return "danger";
    } else if (this.model.get('status') >= 400) {
      return "warning";
    } else if (this.model.get('status') >= 300) {
      return "warning";
    } else if (this.model.get('status') >= 200) {
      return "success";
    } else {
      return "primary";
    }
  }.property('model.status'),

  panelClass: function(key, value) {
    return "panel-" + this.get('uiClass');
  }.property('model.uiClass'),

  buttonClass: function(key, value) {
    return "btn-" + this.get('uiClass');
  }.property('model.uiClass'),

  panelOptions: function(key, value) {
    if (this.model.get('status') >= 500) {
    } else if (this.model.get('status') >= 400) {
      return "panel-warning";
    } else if (this.model.get('status') >= 300) {
      return "panel-warning";
    } else if (this.model.get('status') >= 200) {
      return "panel-success";
    } else {
      return "panel-primary";
    }
  }.property('model.uiClass')

});
