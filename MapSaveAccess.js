//============================================================================
// Karberus - Map Save Access
// MapSaveAccess.js
// Version 1.02
// No credit required. Can be used commercially or non commercially
//============================================================================
//============================================================================
var Imported = Imported || {};
Imported.MapSaveAccess = true;

var Karberus = Karberus || {};
Karberus.MapSaveAcc = Karberus.MapSaveAcc || {};
//============================================================================
//============================================================================
/*:
 * @plugindesc v1.02 Allows you to set which maps will have Save Access disabled by default.
 * @author Karberus
 * @version 1.02
 *
 *
 *
 * @param Maps Disabled Save
 * @desc Map ID of all maps that will have disabled save access.
 * Example: 1 2 3  (maps 1, 2 & 3 now have save disabled)
 * @default
 *
 *
 *@help This Plugin allows you to disable save access by default every time
 *you enter a specified Map.
 *
 *Set up the Map ID's of the maps that will have disabled save access.
 *
 *Whenever you enter a map that is not specified, save access will be enabled
 *once again.
 *
 *If you wish to change a map's default save access to enabled mid game, use
 *the plugin command MapEnableSave MapID.
 *
 *
 * //==============================================================================
 * //                  Plugin Commands
 * //==============================================================================
 *
 * //Changes the default save access of a map from disabled to enabled.
 *
 * MapEnableSave x     //where x is the MapID of the map you wish to have enabled
 *                       save access by default.
 *
 *
 * //==============================================================================
 * //==============================================================================
 *
 */
 (function() {
//=========================================================================================
   Karberus.Parameters = PluginManager.parameters("MapSaveAccess");

   Karberus.MapSaveAcc.MapsDisabledSave = String(Karberus.Parameters["Maps Disabled Save"]);
   Karberus.MapSaveAcc.MapsDisabledSave = Karberus.MapSaveAcc.MapsDisabledSave.split(' ');
   for (i = 0; i < Karberus.MapSaveAcc.MapsDisabledSave.length; ++i) {
   	Karberus.MapSaveAcc.MapsDisabledSave[i] = parseInt(Karberus.MapSaveAcc.MapsDisabledSave[i]);
   }

   Karberus.MapSaveAcc.MapsEnabledSave = [];

   var Karb_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

Game_Interpreter.prototype.pluginCommand = function(command, args) {
           Karb_Game_Interpreter_pluginCommand.call(this, command, args);
            if (command === "MapEnableSave") {
              Karberus.MapSaveAcc.MapsEnabledSave.push(Number(args));
            }
   };

//==========================================================================================
_Karb_Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId)  {

  _Karb_Game_Map_setup.call(this, mapId);

   if (Karberus.MapSaveAcc.MapsDisabledSave.indexOf($gameMap._mapId) > -1 &&
 Karberus.MapSaveAcc.MapsEnabledSave.indexOf($gameMap._mapId) < 0)
   {
     $gameSystem.disableSave();
   }
   else
   {
     $gameSystem.enableSave();
   }
 }

//===========================================================================================
}) ();
//============================================================================================
//=======================================END FILE=============================================
//============================================================================================
