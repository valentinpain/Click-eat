import express from 'express';
import mongoose from 'mongoose';
import CartArticle from '../conf/schemas/cartSchema';

let cartRouter = express.Router();

/**
 * @api {get} http://localhost:8000/:user_id Retrieves articles in an user's cart.
 * @apiParam {Number} user_id The id of the user involved.
 */ 
cartRouter.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    CartArticle.find({user_id: req.body.user_id}, function(err: Error, data: any) {
    if (err) {
      console.log(err)
    }
    else {
      res.send(data)
    }
    });
  });

/**
 * @api {post} http://localhost:8000/create/:user_id Adds one article to an user's cart.
 * @apiParam {Number}  user_id The id of the user involved.
 */
cartRouter.post('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  new CartArticle({name: req.body.name, type: req.body.type, brand: req.body.brand, price: req.body.price, menuId: req.body.menuId, imagePath: req.body.imagePath, user_id: req.body.user_id}).save((err: any, data: any) => {
      if (err) {
        res.status(404).send("Erreur")
      }
      else {
        res.send(data)
      }
    })
})

/**
 * @api {delete} http://localhost:8000/delete/:user_id Deletes a user's cart article.
 * @apiParam {Number} user_id The article id.
 */ 
cartRouter.delete('/', function(req: express.Request, res: express.Response, next: express.NextFunction){
  const id = new mongoose.Types.ObjectId(req.body._id)
    CartArticle.deleteOne(id, function (err: Error, result: any) {
      if(err) {
        res.status(404)
      }
      else {
        res.send("Suppression réussie")
      }
    })
})

/**
 * @api {delete} http://localhost:8000/delete-all/:user_id Empties a whole user's cart.
 * @apiParam {Number} user_id The id of the user involved.
 */ 
cartRouter.delete('/all', function(req: express.Request, res: express.Response, next: express.NextFunction){
  CartArticle.find({user_id: req.body.user_id}).remove(function(err: Error) {
    if(err){
      res.status(404)
    } else {
      res.send("Suppresion réussie")
    }
  })
})

export default cartRouter
