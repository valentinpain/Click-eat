import mongoose, { Schema, model, mongo } from 'mongoose';
import { bddConnect } from '../bdd';

import IRestaurant from '../interfaces/IRestaurant';

bddConnect("articles");

const restaurantSchema = new Schema<IRestaurant>({
  name: {type: String, required: true},
  type: {type: String, required: true},
  city: {type: String, required: true},
  address: {type: String, required: true},
  hourOpened: {type: String, required: true},
  hourClosed: {type: String, required: true},
  ratesNumber: {type: Number, required: true},
  location: {type: Number, required: true},
  deliveryType: {type: String, required: true},
  estimatedTime: {type: String, required: true}
});

const restaurantModel = model('restaurants', restaurantSchema);

export default restaurantModel