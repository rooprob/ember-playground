import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    state: { refreshModel: true }
  },

  model(params) {
    var promises = {
      all: this.store.findAll('solution'),
      filter: params.state,
    };
    return Ember.RSVP.hash(promises) ;
  }
});
