/* hepl-ria/vitfoud-server
 *
 * ~/src/controllers/places/comments/list.js - Controller for places' comments list
 *
 * coded by leny@flatLand!
 * started at 17/04/2017
 */

import { error, send } from "../../../utils/api";
import { get as getComments } from "../../../models/comments";

let aPlaces = require( "../../../../data/export.json" );

export default function( oRequest, oResponse ) {
    let sSlug = ( oRequest.params.slug || "" ).trim().toLowerCase();

    if ( aPlaces.findIndex( ( { slug } ) => sSlug === slug ) === -1 ) {
        return error( oRequest, oResponse, "Place not found.", 404 );
    }

    return send( oRequest, oResponse, getComments( sSlug ) );
}
