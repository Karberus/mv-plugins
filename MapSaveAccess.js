//============================================================================
// Karberus - Map Save Access
// MapSaveAccess.js
// Version 1.01
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
 * @plugindesc v1.01 Allows you to set which maps will have Save Access disabled by default.
 * @author Karberus
 * @version 1.01
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
 *Set up the Map ID of the maps that will have disabled save access.
 *
 *Whenever you enter a map that is not specified, save access will be enabled
 *once again.
 *
 *
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

//==========================================================================================
_Karb_Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId)  {

  _Karb_Game_Map_setup.call(this, mapId);

   if (Karberus.MapSaveAcc.MapsDisabledSave.indexOf($gameMap._mapId) > -1)
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
