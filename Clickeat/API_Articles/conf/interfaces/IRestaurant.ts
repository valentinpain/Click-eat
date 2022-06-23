import mongoose from 'mongoose';

interface IRestaurant {
  name: string;
  type: string;
  city: string;
  address: string,
  hourOpened: string,
  hourClosed: string,
  ratesNumber: number,
  location: number,
  deliveryType: string,
  estimatedTime: string
}

export default IRestaurant