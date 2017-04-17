/* hepl-ria/vitfoud-server
 *
 * ~/models/comments.js - Comments Model
 *
 * coded by leny@flatLand!
 * started at 17/04/2017
 */

const ONE_DAY = 86400000,
    oCommentsStore = new Map();

let fGet, fSet;

fGet = function( sSlug ) {
    let aComments = [];

    if ( oCommentsStore.has( sSlug ) && Date.now() - fGet.lastCall < ONE_DAY ) {
        aComments = oCommentsStore.get( sSlug );
    }

    fGet.lastCall = Date.now();

    return aComments;
};

fGet.lastCall = Date.now();

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
