import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import cartRouter from './routes/cart';
import availableRouter from './routes/available';
import menuRouter from './routes/menu';

let app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/articles/cart', cartRouter);
app.use('/articles/available', availableRouter);
app.use('/articles/menu', menuRouter);

export default app
