import { Schema, model } from 'mongoose';
import { bddConnect } from '../bdd';

import ICart from '../interfaces/ICart';

bddConnect("articles");

const cartSchema = new Schema<ICart>({
	name: {type: String, required: true},
	type: {type: String, required: true},
	brand: {type: String, require: true},
	price: {type: Number, required: true},
	menuId: {type: Schema.Types.ObjectId, required: true},
	imagePath: {type: String, required: true},
	user_id: {type: Number, required: true}
});

const cartModel = model('carts', cartSchema);

export default cartModel