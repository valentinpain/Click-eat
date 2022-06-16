import mongoose from 'mongoose';

interface IDelivery {
  command: Object;
  status: string;
  address: string;
}

export default IDelivery