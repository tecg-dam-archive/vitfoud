/* hepl-ria/vitfoud-server
 *
 * ~/routes/places.js - Places routes
 *
 * coded by leny@flatLand!
 * started at 17/04/2017
 */

import { Router } from "express";

import list from "../controllers/places/list";
import getComments from "../controllers/places/comments/list";
import addComment from "../controllers/places/comments/add";

let oRouter = new Router();

oRouter.get( "/places", list );
oRouter.get( "/places/:slug/comments", getComments );
oRouter.post( "/places/:slug/comments", addComment );

export default oRouter;
