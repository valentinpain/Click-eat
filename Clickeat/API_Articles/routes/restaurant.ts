import express from 'express';
import mongoose from 'mongoose';
import RestaurantArticle from '../conf/schemas/restaurantSchema';

let restaurantRouter = express.Router();

restaurantRouter.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    RestaurantArticle.find({}, (err: Error, data: any) => {
    if (err) console.log(err)
    else {
      res.send(data)
    }
    });
  });

restaurantRouter.get('/:brand', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    RestaurantArticle.find({name: req.params.brand}, (err: Error, data: any) => {
    if (err) console.log(err)
    else {
      res.send(data)
    }
    });
  });

export default restaurantRouter
