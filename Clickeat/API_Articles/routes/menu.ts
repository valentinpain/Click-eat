import express from 'express';
import mongoose from 'mongoose';
import menuArticle from '../conf/schemas/menuSchema';
import availableArticle from '../conf/schemas/availableSchema';

let menuRouter = express.Router();

/**
 * @api {get} http://localhost:8000/:menu_id Gets all articles from a specific menu.
 * @apiParam {Number} menu_id The id of the menu involved.
 */ 
menuRouter.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.body.menu_id)

  menuArticle.aggregate([
    {$match: {"_id": id}},
    {$lookup: {
      from: "availables",
      localField: "_id",
      foreignField: "menuId",
      as: "availableArticle"
    }}
  ]).exec(function(err, availables){
    if(err){
      res.status(404)
    } else {
      res.send(availables)
    }
  })
});

/**
 * @api {post} http://localhost:8000/create Creates an new menu.
 */ 
menuRouter.post('/create', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  new menuArticle({name: req.body.name, articles: req.body.articles, price: req.body.price}).save((err: any) => {
      if (err) {
        res.status(404).send(err)
      }
      else {
        res.send("Création réussie !")
      }
    })
})

/**
 * @api {put} http://localhost:8000/update/:menu_id Updates a specific menu.
 * @apiParam {Number} menu_id The id of the menu involved.
 */ 
menuRouter.put('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.body.menu_id)

  menuArticle.findByIdAndUpdate(id, {name: req.body.name, price: req.body.price}, function (err: Error, result: any) {
    if(err) {
      res.status(404)
    }
    else {
      res.send("Modification réussie")
    }
    })
})

/**
 * @api {delete} http://localhost:8000/delete/:menu_id Deletes a specific menu.
 * @apiParam {Number} menu_id The id of the menu involved.
 */ 
menuRouter.delete('/', function(req: express.Request, res: express.Response, next: express.NextFunction){
  const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.body._id)

    menuArticle.deleteOne(id, function (err: Error, result: any) {
      if(err) {
        res.status(404)
      }
      else {
        res.send("Suppression réussie")
      }
    })
})


export default menuRouter
