/* hepl-ria/vitfoud-server
 *
 * ~/controllers/system/home.js - Controller for "home" (echo)
 *
 * coded by leny@flatLand!
 * started at 17/04/2017
 */

import { send } from "../../utils/api";

export default function( oRequest, oResponse ) {
    send( oRequest, oResponse, "hepl-ri/vitfoud-server:root" );
}
