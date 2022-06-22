import express from 'express';
import mongoose from 'mongoose';
import Delivery from '../conf/schemas/deliverySchema';

let deliveryRouter = express.Router();

/* GET gets every "accepted" delivery in the database of an user. */
deliveryRouter.get('/accepted/:user_id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.user_id)

    Delivery.find({"command.user._id": id, status: "accepted"}, (err: Error, data: any) => {
    if (err) console.log(err)
    else {
      res.send(data)
    }
    });
  });

  /* GET gets every "accepted" delivery in the database. */
deliveryRouter.get('/accepted/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.user_id)

    Delivery.find({status: "accepted"}, (err: Error, data: any) => {
    if (err) console.log(err)
    else {
      res.send(data)
    }
    });
  });

  /* GET gets the latest delivery of an user. */
deliveryRouter.get('/new/:user_id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.user_id)

    Delivery.find({"command.user._id": id, status: "new"}, (err: Error, data: any) => {
    if (err) console.log(err)
    else {
      res.send(data)
    }
    });
  });

/* GET gets every "idle" delivery in the database. */
deliveryRouter.get('/idle', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.user_id)

    Delivery.find({status: "idle"}, (err: Error, data: any) => {
    if (err) console.log(err)
    else {
      res.send(data)
    }
    });
  });

/* GET gets every "idle" delivery in the database of an user. */
deliveryRouter.get('/idle/:user_id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.user_id)

    Delivery.find({"command.user._id": id, status: "idle"}, (err: Error, data: any) => {
    if (err) console.log(err)
    else {
      res.send(data)
    }
    });
  });

/* GET gets every "delivered" delivery in the database of an user. */
deliveryRouter.get('/delivered/:user_id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.user_id)

    Delivery.find({"command.user._id": id, status: "delivered"}, (err: Error, data: any) => {
    if (err) console.log(err)
    else {
      res.send(data)
    }
    });
  });

/* POST creates a new delivery for a user. */
deliveryRouter.post('/create', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  new Delivery({command: req.body.command, status: req.body.status, address: req.body.address}).save((err: any) => {
      if (err) res.status(404).send(err)
      else {
        res.send("Création réussie !")
      }
    })
})

/* PUT updates a whole delivery in the database. */
deliveryRouter.put('/update/:delivery_id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.delivery_id)

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
deliveryRouter.delete('/delete/:delivery_id', function(req: express.Request, res: express.Response, next: express.NextFunction){
  const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.delivery_id)

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
