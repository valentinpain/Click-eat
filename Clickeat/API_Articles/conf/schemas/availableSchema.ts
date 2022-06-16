import mongoose, { Schema, model, mongo } from 'mongoose';
import { bddConnect } from '../bdd';

import IAvailable from '../interfaces/IAvailable';

bddConnect("articles");

const availableSchema = new Schema<IAvailable>({
	name: {type: String, required: true},
	brand: {type: String, require: true},
	price: {type: Number, required: true},
	menuId: {type: Schema.Types.ObjectId, required: true},
	imagePath: {type: String, required: true}
});

const availableModel = model('availables', availableSchema);

export default availableModel