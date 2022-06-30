import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import bodyParser from 'body-parser'

import commandsRouter from './routes/commands';

let app = express();

app.use(bodyParser.json())
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/commands', commandsRouter);

export default app
