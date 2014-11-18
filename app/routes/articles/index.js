import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('friends/show').get('articles');
  },
  deactivate: function() {
    var model = this.modelFor('articles/index');

    if (model.get('isDirty')) {
      model.rollback();
    }
  },
  actions: {
    save: function(model) {
      model.save();
      return false;
    }
  }
});