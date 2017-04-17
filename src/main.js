/* hepl-ria/vitfoud-server
 *
 * ~/main.js - Entry point
 *
 * coded by leny@flatLand!
 * started at 17/04/2017
 */

const APP_PORT = 12345;

import express from "express";
import bodyParser from "body-parser";
import responseTime from "response-time";
import mitanEko from "mitan-eko";
import zouti from "zouti";

import placesRoutes from "./routes/places";
import systemRoutes from "./routes/system";

let oApp = express();

oApp.use( mitanEko( "vitfoud" ) );
oApp.use( responseTime() );
oApp.use( bodyParser.json() );
oApp.use( bodyParser.urlencoded( {
    "extended": true,
} ) );

oApp.use( placesRoutes );
oApp.use( systemRoutes );

oApp.listen( APP_PORT, () => {
    zouti.success( `Server is listening on ${ APP_PORT }.`, "vitfoud" );
} );
