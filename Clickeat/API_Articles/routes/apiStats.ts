import express from 'express';
import mongoose from 'mongoose';
let apiStatsRouter = express.Router();
import { bddConnect } from '../conf/bdd';


apiStatsRouter.get('/', async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const stats = {
            general: await mongoose.connection.db.stats(),
            menu: await mongoose.connection.db.collection("menus").stats(),
            restaurants: await mongoose.connection.db.collection("restaurants").stats(),
            carts: await mongoose.connection.db.collection("carts").stats(),
            availables: await mongoose.connection.db.collection("availables").stats()
        }
        res.status(200).send(stats)
    }
    catch (e) {
        res.status(400).send(e)
    }
});

export default apiStatsRouter
