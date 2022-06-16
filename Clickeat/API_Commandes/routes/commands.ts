import express from 'express';
import mongoose from 'mongoose';
import Command from '../conf/schemas/commandSchema';

let commandRouter = express.Router();

/* GET gets every command available in the database for an user. */
commandRouter.get('/user/:user_id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.user_id)

    Command.find({"user._id": id}, (err: Error, data: any) => {
    if (err) console.log(err)
    else {
      res.send(data)
    }
    });
  });

/* GET gets every command available in the database for a restaurant. */
commandRouter.get('/restaurant/:restaurant_id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.restaurant_id)

    Command.find({"restaurant._id": id}, (err: Error, data: any) => {
    if (err) console.log(err)
    else {
      res.send(data)
    }
    });
  });

/* POST creates a new command of a user. */
commandRouter.post('/create', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  new Command({user: req.body.user, articles: req.body.articles, restaurant: req.body.restaurant, validated: req.body.validated}).save((err: any) => {
      if (err) res.status(404).send(err)
      else {
        res.send("Création réussie !")
      }
    })
})

/* PUT updates a whole command in the database. */
commandRouter.put('/update/:_id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params._id)

  Command.findByIdAndUpdate(id, {user: req.body.user, articles: req.body.articles, restaurant: req.body.restaurant, validated: req.body.validated}, function (err: Error, result: any) {
    if(err) {
      res.status(404)
    }
    else {
      res.send("Modification réussie")
    }
    })
})

/* DELETE deletes a cart article */
commandRouter.delete('/delete/:_id', function(req: express.Request, res: express.Response, next: express.NextFunction){
  const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params._id)

    Command.deleteOne(id, function (err: Error, result: any) {
      if(err) {
        res.status(404)
      }
      else {
        res.send("Suppression réussie")
      }
    })
})

export default commandRouter
