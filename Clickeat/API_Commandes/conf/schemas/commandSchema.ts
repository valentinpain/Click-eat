import mongoose, { Schema, model, mongo } from 'mongoose';
import { bddConnect } from '../bdd';

import IAvailable from '../interfaces/ICommand';

bddConnect("commands");

const commandSchema = new Schema<IAvailable>({
	user: {type: Object, required: true},
	articles: [{type: Object, require: true}],
	restaurant: {type: Object, required: true},
});

const commandModel = model('commands', commandSchema);

export default commandModel