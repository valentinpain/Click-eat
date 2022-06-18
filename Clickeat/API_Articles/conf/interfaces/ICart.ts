import mongoose from 'mongoose';

interface ICart {
  name: string;
  type: string;
  brand: string;
  price: number,
  menuId: mongoose.Types.ObjectId,
  imagePath: string
  user_id: number;
}

export default ICart