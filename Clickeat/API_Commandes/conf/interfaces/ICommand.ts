import mongoose from 'mongoose';

interface ICommand {
  user: Object;
  articles: Array<Object>;
  total: number;
  validated: boolean;
}

export default ICommand