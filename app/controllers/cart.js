import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
        checkout: function() {
            // we get the list of all the pizzaz in 
            // the current cart and add it as a record 
            // to OrderHistory
            var self = this;

            self.store.find('Cart').then(function(cartItems) {
                var order = [];
                cartItems.forEach(function(cartItem) {
                    var pizza = cartItem.get('pizza');
                    order.push({
                        id: cartItem.get('id'),
                        pizza: {
                            id: pizza.id,
                            name: pizza.name,
                            image: pizza.image,
                            description: pizza.description
                        }
                    });
                });

                self.store.find('History').then(function(historyItems) {
                    historyItems = historyItems || [];
                    var historyItem = {};
                    historyItem.id = historyItems.get('length');
                    historyItem.order = order;

                    // Add items to order history
                    self.store.createRecord('History', historyItem);
                    self.transitionToRoute('history');

                    // Remove all Items from current cart
                    self.store.unloadAll('Cart');

                });
            });

        }
    }
});