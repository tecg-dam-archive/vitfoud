/* hepl-ria/vitfoud-server
 *
 * ~/routes/system.js - System routes
 *
 * coded by leny@flatLand!
 * started at 17/04/2017
 */

import { Router } from "express";

import home from "../controllers/system/home.js";

let oRouter = new Router();

oRouter.get( "/", home );

export default oRouter;
