/**
 * OrderController
 *
 * @description :: Server-side logic for managing orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addNewOrderItem:function(req,res){
		sails.log(res);
		OrderItem.create({
			'title': req.body.title,
			'count': req.body.count,
			'orderId': req.params.id
		}, function(err, items) {
			return res.json({
				data : items
			});
		})
	}
};

