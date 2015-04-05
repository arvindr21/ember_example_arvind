import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        back: function() {
            history.go(-1);
        }
    }
});