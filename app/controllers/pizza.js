import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
        addToCart: function() {
            var self = this;
            self.store.find('Cart').then(function(cartItems) {
                cartItems = cartItems || [];
                var pizza = self.get('model');
                var cartItem = {};

                cartItem.id = cartItems.get('length');
                cartItem.pizza = {
                    id: pizza.get('id'),
                    name: pizza.get('name'),
                    image: pizza.get('image'),
                    description: pizza.get('description')
                };

                self.store.createRecord('Cart', cartItem);
                self.transitionToRoute('cart');

            });
        }
    }
});