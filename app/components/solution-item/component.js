import Ember from 'ember';

var computed = Ember.computed ;

export default Ember.Component.extend({

  init() {
    this._super(...arguments);
    console.log('this is a solution');
    console.log(this.get('uiClass'));
  },

  uiClass: computed('model.status', {
    get: function() {
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
    }
  }),

  panelClass: computed('uiClass', {
    get: function() {
    return "panel-" + this.get('uiClass');
    }
  }),

  buttonClass: computed('uiClass', {
    get: function(key, value) {
      return "btn-" + this.get('uiClass');
    }
  }),

  panelOptions: computed('uiClass', {
    get: function(key, value) {
      if (this.model.get('status') >= 500) {
        return "panel-danger";
      } else if (this.model.get('status') >= 400) {
        return "panel-warning";
      } else if (this.model.get('status') >= 300) {
        return "panel-warning";
      } else if (this.model.get('status') >= 200) {
        return "panel-success";
      } else {
        return "panel-primary";
      }
    }
  }),

});
