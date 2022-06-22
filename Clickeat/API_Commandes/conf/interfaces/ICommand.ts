import mongoose from 'mongoose';

interface IAvailable {
  user: Object;
  articles: Array<Object>;
  validated: Boolean;
}

export default IAvailable