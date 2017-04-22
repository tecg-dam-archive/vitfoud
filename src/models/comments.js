/* hepl-ria/vitfoud-server
 *
 * ~/models/comments.js - Comments Model
 *
 * coded by leny@flatLand!
 * started at 17/04/2017
 */

const FOUR_HOURS = 14400,
    oCommentsStore = new Map();

let fGet, fSet,
    iLastCall = Date.now();

fGet = function( sSlug ) {
    let aComments = [];

    if ( oCommentsStore.has( sSlug ) && ( Date.now() - iLastCall ) < FOUR_HOURS ) {
        aComments = oCommentsStore.get( sSlug );
    }

    iLastCall = Date.now();

    return aComments;
};

fSet = function( sSlug, oComment ) {
    let aComments = fGet( sSlug );

    if ( aComments.length >= 100 ) {
        aComments.shift();
    }

    aComments.push( oComment );

    oCommentsStore.set( sSlug, aComments );
};

export {
    fGet as get,
    fSet as set,
};
