/* hepl-ria/vitfoud-server
 *
 * ~/utils/api.js - API utils
 *
 * coded by leny@flatLand!
 * started at 17/04/2017
 */

let fError, fSend;

fError = function( oRequest, oResponse, mError, iStatus = 500 ) {
    oResponse.status( iStatus ).json( {
        "data": null,
        "error": mError instanceof Error ? mError.message : mError,
        "timestamp": Date.now(),
        "url": `[${ oRequest.method }] ${ oRequest.url }`,
    } );
};

fSend = function( oRequest, oResponse, oData = {}, iStatus = 200 ) {
    oResponse.status( iStatus ).json( {
        "data": oData,
        "error": false,
        "timestamp": Date.now(),
        "url": `[${ oRequest.method }] ${ oRequest.url }`,
    } );
};

export {
    fError as error,
    fSend as send,
};
