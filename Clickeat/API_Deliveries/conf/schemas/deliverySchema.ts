import mongoose, { Schema, model, mongo } from 'mongoose';
import { bddConnect } from '../bdd';

import IDelivery from '../interfaces/IDelivery';

bddConnect("deliveries");

const deliverySchema = new Schema<IDelivery>({
	userId: {type: Number, required: true},
	hourStart: {type: String, required: true},
	hourEnd: {type: String, required: true},
	command: {type: Object, required: true},
	status: {type: String, require: true},
	address: {type: String, required: true},
});

const deliveryModel = model('delivery', deliverySchema);

export default deliveryModel