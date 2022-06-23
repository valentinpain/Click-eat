import express from 'express';
import mongoose from 'mongoose';
import AvailablesArticle from '../conf/schemas/availableSchema';

let availableRouter = express.Router();

/**
 * @api {get} http://localhost:8000/delete/ Gets every item available in the database.
 */ 

availableRouter.get('/all', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    AvailablesArticle.find({}, (err: Error, data: any) => {
    if (err) console.log(err)
    else {
      res.send(data)
    }
    });
  });
  

/**
 * @api {get} http://localhost:8000/:brand Gets every item available for a specific brand
 * @apiParam {String} brand The name of the brand involved.
 */ 
availableRouter.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    AvailablesArticle.find({brand: req.body.brand}, (err: Error, data: any) => {
    if (err) console.log(err)
    else {
      res.send(data)
    }
    });
  });

/**
 * @api {post} http://localhost:8000/create Creates a new article of a brand.
 */ 
availableRouter.post('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  new AvailablesArticle({name: req.body.name, type: req.body.type, brand: req.body.brand, price: req.body.price, menuId: req.body.menuId, imagePath: req.body.imagePath}).save((err: any) => {
      if (err) res.status(404).send("Erreur")
      else {
        res.send("Création réussie !")
      }
    })
})

/**
 * @api {put} http://localhost:8000/update/:_id Updates a whole article in the database.
 * @apiParam {Number} _id The id of the article involved.
 */ 
availableRouter.put('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.body._id)

  AvailablesArticle.findByIdAndUpdate(id, {name: req.body.name, type: req.body.type, brand: req.body.brand, price: req.body.price, menuId: req.body.menuId, imagePath: req.body.imagePath}, function (err: Error, result: any) {
    if(err) {
      res.status(404)
    }
    else {
      res.send("Modification réussie")
    }
    })
})

/**
 * @api {delete} http://localhost:8000/delete/:_id Deletes an article in the database.
 * @apiParam {Number} _id The id of the article involved.
 */ 
availableRouter.delete('/', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.body._id)

    AvailablesArticle.deleteOne(id, function (err: Error, result: any) {
      if(err) {
        res.status(404)
      }
      else {
        res.send("Suppression réussie")
      }
    })
})

export default availableRouter
