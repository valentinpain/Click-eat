import express from 'express';
import mongoose from 'mongoose';
import Delivery from '../conf/schemas/deliverySchema';

let deliveryRouter = express.Router();


/* GET gets every delivery in the database of a status and an user. */
deliveryRouter.get('/', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.body.user_id)
    const status: string = req.body.status
    Delivery.find({ "command.user._id": id, status: status }, (err: Error, data: any) => {
        if (err) console.log(err)
        else {
            res.send(data)
        }
    });
});



/* Deprecated
 * GET gets every "accepted" delivery in the database of an user. */
deliveryRouter.get('/accepted/:user_id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.user_id)

    Delivery.find({"command.user._id": id, status: "accepted"}, (err: Error, data: any) => {
    if (err) console.log(err)
    else {
      res.send(data)
    }
    });
  });

/* Deprecated
 * GET gets every "idle" delivery in the database of an user. */
deliveryRouter.get('/idle/:user_id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.user_id)

    Delivery.find({"command.user._id": id, status: "idle"}, (err: Error, data: any) => {
    if (err) console.log(err)
    else {
      res.send(data)
    }
    });
  });

/* Deprecated
 * GET gets every "delivered" delivery in the database of an user. */
deliveryRouter.get('/delivered/:user_id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.user_id)

    Delivery.find({"command.user._id": id, status: "delivered"}, (err: Error, data: any) => {
    if (err) console.log(err)
    else {
      res.send(data)
    }
    });
  });

  /* GET gets every delivery in the database of an user. */
deliveryRouter.get('/user/:user_id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.user_id)

    Delivery.find({"command.user._id": id}, (err: Error, data: any) => {
    if (err) console.log(err)
    else {
      res.send(data)
    }
    });
  });

/* POST creates a new delivery for a user. */
deliveryRouter.post('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  new Delivery({command: req.body.command, status: req.body.status, address: req.body.address}).save((err: any) => {
      if (err) res.status(404).send(err)
      else {
        res.send("Création réussie !")
      }
    })
})

/* PUT updates a whole delivery in the database. */
deliveryRouter.put('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.body.delivery_id)

  Delivery.findByIdAndUpdate(id, {command: req.body.command, status: req.body.status, address: req.body.address}, function (err: Error, result: any) {
    if(err) {
      res.status(404)
    }
    else {
      res.send("Modification réussie")
    }
    })
})

/* DELETE deletes a delivery article */
deliveryRouter.delete('/', function(req: express.Request, res: express.Response, next: express.NextFunction){
  const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.body.delivery_id)

    Delivery.deleteOne(id, function (err: Error, result: any) {
      if(err) {
        res.status(404)
      }
      else {
        res.send("Suppression réussie")
      }
    })
})

export default deliveryRouter
