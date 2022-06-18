import mongoose from 'mongoose';

interface IAvailable {
  name: string;
  type: string;
  brand: string;
  price: number,
  menuId: mongoose.Types.ObjectId,
  imagePath: string
}

export default IAvailable