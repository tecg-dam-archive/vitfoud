/* hepl-ria/vitfoud-server
 *
 * ~/controllers/places/comments/add.js - Controller for places' comments add
 *
 * coded by leny@flatLand!
 * started at 17/04/2017
 */

import { error, send } from "../../../utils/api";
import { get as getComments, set as addComment } from "../../../models/comments";

let aPlaces = require( "../../../../data/export.json" );

export default function( oRequest, oResponse ) {
    const POST = oRequest.body;

    let sSlug = ( oRequest.params.slug || "" ).trim().toLowerCase(),
        sName = ( POST.name || "" ).trim(),
        iRating = +POST.rating,
        aComments,
        oLastComment,
        sComment = ( POST.comment || "" ).trim(),
        oComment = {},
        bHasErrors = false;

    if ( aPlaces.findIndex( ( { slug } ) => sSlug === slug ) === -1 ) {
        return error( oRequest, oResponse, "Place not found.", 404 );
    }

    // check name
    bHasErrors = bHasErrors || ( !sName || sName.length < 4 || sName.length > 20 );

    // check comment
    bHasErrors = bHasErrors || ( !sComment || sComment.length < 4 || sName.length > 140 );

    // check rating
    bHasErrors = bHasErrors || ( isNaN( iRating ) || iRating < 0 || iRating > 5 );

    if ( bHasErrors ) {
        return error( oRequest, oResponse, "Invalid data!", 400 );
    }

    // check last comment (avoid flooding)
    aComments = getComments( sSlug );
    oLastComment = aComments[ aComments.length - 1 ] || {};
    if ( oLastComment ) {
        let { name, comment } = oLastComment;

        if ( name === sName || comment === sComment ) {
            return error( oRequest, oResponse, "Flood protection", 403 );
        }
    }

    oComment = {
        "comment": sComment,
        "date": Date.now(),
        "name": sName,
        "rating": Math.round( iRating ),
    };

    addComment( sSlug, oComment );

    return send( oRequest, oResponse, oComment, 201 );
}
