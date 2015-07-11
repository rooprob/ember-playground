import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    state: { refreshModel: true }
  },

  model(params) {
    return this.store.findAll('solution').then((solutions) => {
      return {
        all: solutions,
        filter: params.state
      };
    });
  }
});
