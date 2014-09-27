import Ember from 'ember';

export default Ember.ObjectController.extend({
	isValid: Ember.computed(
    'description',
    'notes',
    function() {
      return !Ember.isEmpty(this.get('description')) &&
        !Ember.isEmpty(this.get('notes'));
    }
  ),
  actions: {
    save: function() {
      if (this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function(friend) {
          _this.transitionToRoute('friends.show', friend);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
    },
    cancel: function() {
      return true;
    }
  }
});

//ceci est un exercice, voir résultat plus tard :)
