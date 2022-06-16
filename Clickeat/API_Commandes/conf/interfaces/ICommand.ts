import mongoose from 'mongoose';

interface IAvailable {
  user: Object;
  articles: Array<Object>;
  restaurant: Object;
}

export default IAvailable