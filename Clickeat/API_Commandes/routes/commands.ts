import express from 'express';
import mongoose from 'mongoose';
import Command from '../conf/schemas/commandSchema';

let commandRouter = express.Router();

/* @Deprecated
// GET gets every command available in the database for an user.
commandRouter.get('/user/:user_id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.user_id)

    Command.find({"user._id": id}, (err: Error, data: any) => {
    if (err) res.send(err)
    else {
      res.send(data)
    }
    });
});
*/

/* GET gets every command available in the database for a restaurant. */
commandRouter.get('/users/:id', function (req: express.Request, res: express.Response, next: express.NextFunction) {
        Command.find({ userId: req.params.id }, (err: Error, data: any) => {
            if (err) console.log(err)
            else {
                res.send(data)
            }
        });
    
  });

/* POST creates a new command of a user. */
commandRouter.post('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  new Command({user: req.body.user, articles: req.body.articles, total: req.body.total, validated: req.body.validated}).save((err: any) => {
      if (err) res.status(404).send(err)
      else {
        res.send("Création réussie !")
      }
    })
})

/* PUT updates a whole command in the database. */
commandRouter.put('/:id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params._id)

  req.body.user._id = new mongoose.Types.ObjectId(req.body.user._id)

  Command.findByIdAndUpdate(id, {user: req.body.user, articles: req.body.articles, total: req.body.total, validated: req.body.validated}, function (err: Error, result: any) {
    if(err) {
      res.status(404)
    }
    else {
      res.send("Modification réussie")
    }
    })
})

/* DELETE deletes a command */
commandRouter.delete('/', function(req: express.Request, res: express.Response, next: express.NextFunction){
  const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.body._id)

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
