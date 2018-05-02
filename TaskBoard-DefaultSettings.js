/**
* @license MIT
* @author <steven@velozo.com>
*/

/**
* The default settings for our app.
*/
module.exports = (
{
	"Product": "TaskBoard",
	"ProductVersion": require(__dirname+"/package.json").version,

	"APIServerPort": 8080,
	"AutoStartAPIServer": true,

	"MeadowProvider": "ALASQL",

	Profiling: {TraceLog: true},

	"LogStreams":
	[
		{
			"level": "trace",
			"path": "./TaskBoard.log"
		},
		{
			"level": "info",
			"streamtype": "prettystream"
		}
	],

	// Load a config file if it is available
	"ConfigFile": __dirname+"/TaskBoard-Config.json"
});