import mongoose from 'mongoose';

interface IDelivery {
  userId: number,
  hourStart: string,
  hourEnd: string,
  command: Object;
  status: string;
  address: string;
}

export default IDelivery