import { Schema, model } from 'mongoose';
import { bddConnect } from '../bdd';

import IAvailable from '../interfaces/IAvailable';
import IMenu from '../interfaces/IMenu';

bddConnect("articles");

const menuSchema = new Schema<IMenu>({
	name: {type: String, required: true},
	articles:[{type:String, required: true}],
	price: {type: Number, required: true}
});

const menuModel = model('menus', menuSchema);

export default menuModel