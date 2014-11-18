import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
    return this.store.createRecord('friend');
  },
  activate: function() {
    console.log('----- active hook called -----');
  },
  deactivate: function(){
    var model = this.modelFor('friends/new');
    if (model.get('isNew')) {
      model.destroyRecord();
    }
  },
	actions: {
      save: function() {
        console.log('save action bubbled route');

        return false;
      },
      cancel: function() {
        console.log('cancel action bubbled to route');

       return true;
     }
   }
});
