import DS from 'ember-data';

var Cart = DS.Model.extend({
	pizza: DS.attr()
});

Cart.reopenClass({
	FIXTURES: []
});

export default Cart;