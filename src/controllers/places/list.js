/* hepl-ria/vitfoud-server
 *
 * ~/controllers/places/list.js - Controller for places list
 *
 * coded by leny@flatLand!
 * started at 17/04/2017
 */

import { error, send } from "../../utils/api";
import getDistance from "jeyo-distans";
import checkPosition from "../../utils/position";

let aPlaces = require( "../../../data/export.json" );

const DEFAULT_RADIUS = 10,
    MAX_RADIUS = 100;

export default function( oRequest, oResponse ) {
    let oCurrentPosition = checkPosition( +oRequest.query.latitude, +oRequest.query.longitude ),
        iSearchRadius = +oRequest.query.radius,
        aFoundedPlaces;

    if ( !oCurrentPosition ) {
        return error( oRequest, oResponse, "Invalid position!", 400 );
    }

    isNaN( iSearchRadius ) && ( iSearchRadius = DEFAULT_RADIUS );
    ( iSearchRadius < DEFAULT_RADIUS ) && ( iSearchRadius = DEFAULT_RADIUS );
    ( iSearchRadius > MAX_RADIUS ) && ( iSearchRadius = MAX_RADIUS );

    aFoundedPlaces = Array.from( aPlaces, ( { latitude, longitude, slug, address, hours, name } ) => ( {
        address,
        "distance": Math.floor( getDistance( oCurrentPosition, { latitude, longitude } ) * 1000 ),
        hours,
        name,
        "position": { latitude, longitude },
        slug,
    } ) ).filter( ( { distance } ) => distance <= ( iSearchRadius * 1000 ) );

    aFoundedPlaces.sort( ( oOne, oTwo ) => oOne.distance - oTwo.distance );

    return send( oRequest, oResponse, aFoundedPlaces );
}
