//============================================================================
// Karberus - Simple Land Vehicle
// SimpleLandVehicle.js
// Version 1.0
// No credit required. Can be used commercially or non commercially
//============================================================================
//============================================================================
var Imported = Imported || {};
Imported.SimpleLandVehicle = true;

var Karberus = Karberus || {};
Karberus.LandBoat = Karberus.LandBoat || {};
//============================================================================
//============================================================================
/*:
 * @plugindesc v1.0 Allows you to drive/ride a vehicle on land.
 * @author Karberus
 * @version 1.0
 *
 *
 *
 * @param Vehicle Speed
 * @desc Change the movement speed of your land vehicle
 * Default: 5
 * @default 5
 *
 * @param Encounters
 * @desc Whether encounters are enabled while on the land vehicle
 * false = off / true = on
 * @default false
 *
 *@help Change the boat's graphic in the database to fit a land vehicle.
 *
 *This plugin changes how the boat functions, and makes it into a land vehicle.
 *
 *Note: While on the land vehicle Touch/Action Button Events won't be triggered.
 *
 */

(function() {

//Initialize paramter values
Karberus.Parameters = PluginManager.parameters("SimpleLandVehicle");

Karberus.LandBoat.Speed = Number(Karberus.Parameters["Vehicle Speed"]) ||  5;
Karberus.LandBoat.Encounters = String(Karberus.Parameters["Encounters"]);

//=========================================================================
// Passability / Overwrite
//=========================================================================
Game_Player.prototype.isMapPassable = function(x, y, d) {

  var vehicle = this.vehicle();
    if (vehicle)
    {
      if(this._vehicleType !== 'boat')
      {
        return vehicle.isMapPassable(x, y, d);
      }
      else
      {
        return Game_Character.prototype.isMapPassable.call(this, x, y, d);
      }

    }
    else
    {
return Game_Character.prototype.isMapPassable.call(this, x, y, d);
    }
};

//=============================================================================
// Determine whether to have encounters while on the land vehicle / Overwrite
//=============================================================================

Game_Player.prototype.canEncounter = function() {

    if (eval(Karberus.LandBoat.Encounters) === false) {
    return (!$gameParty.hasEncounterNone() && $gameSystem.isEncounterEnabled() &&
            !this.isInAirship() && !this.isInBoat() && !this.isMoveRouteForcing() && !this.isDebugThrough());
          } else {
            return (!$gameParty.hasEncounterNone() && $gameSystem.isEncounterEnabled() &&
                    !this.isInAirship() && !this.isMoveRouteForcing() && !this.isDebugThrough());
          }
};

//=============================================================================
// Unable to start events while on land vehicle
//=============================================================================

Karberus.LandBoat.Game_Player_canStartLocalEvents = Game_Player.prototype.canStartLocalEvents;
Game_Player.prototype.canStartLocalEvents = function() {

    Karberus.LandBoat.Game_Player_canStartLocalEvents.call(this);
    return !this.isInBoat();
};

//=============================================================================
//=============================================================================
// Change move speed when on the vehicle / Overwrite
//=============================================================================
Game_Vehicle.prototype.initMoveSpeed = function() {

  if (this.isBoat()) {
      this.setMoveSpeed(Karberus.LandBoat.Speed);
  } else if (this.isShip()) {
      this.setMoveSpeed(5);
  } else if (this.isAirship()) {
      this.setMoveSpeed(6);
  }
};
//=============================================================================
//=============================================================================
})();
//=============================================================================
//===================================END FILE==================================
//=============================================================================
