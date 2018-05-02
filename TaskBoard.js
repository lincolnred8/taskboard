/**
* @license MIT
* @author <steven@velozo.com>
*/

/**
* Pass-through server for gh-board
*
* @class Server
*/

var libOrator = require('orator').new(require('./TaskBoard-DefaultSettings.js'));

libOrator.addStaticRoute(__dirname+'/gh-board/');

libOrator.startWebServer();
