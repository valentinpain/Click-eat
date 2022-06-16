import mongoose, { Schema, model, mongo } from 'mongoose';
import { bddConnect } from '../bdd';

import IDelivery from '../interfaces/IDelivery';

bddConnect("deliveries");

const deliverySchema = new Schema<IDelivery>({
	command: {type: Object, required: true},
	status: [{type: String, require: true}],
	address: {type: String, required: true},
});

const deliveryModel = model('delivery', deliverySchema);

export default deliveryModel