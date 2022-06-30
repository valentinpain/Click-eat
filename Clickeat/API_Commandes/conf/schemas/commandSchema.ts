import mongoose, { Schema, model, mongo } from 'mongoose';
import { bddConnect } from '../bdd';

import ICommand from '../interfaces/ICommand';

bddConnect("commands");

const commandSchema = new Schema<ICommand>({
	user: {type: Object, required: true},
	articles: [{type: Object, required: true}],
	total: {type: Number, required: true},
	validated: {type: Boolean, required: true}
});

const commandModel = model('commands', commandSchema);

export default commandModel