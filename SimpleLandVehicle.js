//============================================================================
// Karberus - Simple Land Vehicle
// SimpleLandVehicle.js
// Version 1.2
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
 * @plugindesc v1.2 Allows you to drive/ride a vehicle on land.
 * @author Karberus
 * @version 1.2
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
 *
 * @param Touch Events
 * @desc Whether touch events will be triggered while on land vehicle
 * false = off / true = on
 * @default false
 *
 *
 * @param Action Button Events
 * @desc Whether action button events will trigger while on land vehicle
 * false = off / true = on
 * @default false
 *
 *
 * @param Forbid Region ID
 * @desc Set which Region ID forbids land vehicle to pass through.
 *Set to 0 if you don't wish to use this feature.
 * @default 0
 *
 *
 *@help Change the boat's graphic in the database to fit a land vehicle.
 *
 *This plugin changes how the boat functions, and makes it into a land vehicle.
 *
 *
 */

(function() {

//Initialize parameter values
Karberus.Parameters = PluginManager.parameters("SimpleLandVehicle");

Karberus.LandBoat.Speed = Number(Karberus.Parameters["Vehicle Speed"]) ||  5;
Karberus.LandBoat.Encounters = String(Karberus.Parameters["Encounters"]);
Karberus.LandBoat.TouchEvents = String(Karberus.Parameters["Touch Events"]);
Karberus.LandBoat.ActionEvents = String(Karberus.Parameters["Action Button Events"]);
Karberus.LandBoat.ForbidRegionID = Number(Karberus.Parameters["Forbid Region ID"]);

//=========================================================================
// Passability / Overwrite
//=========================================================================
Game_Player.prototype.isMapPassable = function(x, y, d) {

  var vehicle = this.vehicle();
    if (vehicle)
    {
      if(this._vehicleType !== 'boat') return vehicle.isMapPassable(x, y, d);
      if(this._vehicleType === 'boat')
      {
        if(this.noLandVehicleRegion(x, y, d)) return false;
        return Game_Character.prototype.isMapPassable.call(this, x, y, d);
      }

    }
    else
    {
return Game_Character.prototype.isMapPassable.call(this, x, y, d);
    }
};

//==========================================================================
// Check
//==========================================================================

Game_Player.prototype.noLandVehicleRegion = function(x, y, d) {
    var regionId = this.checkNoLandVehicleRegionID(x, y, d);
    if (regionId === 0) return false;
    if (regionId === Karberus.LandBoat.ForbidRegionID) return true;
    return regionId === Karberus.LandBoat.ForbidRegionID;
};

//========================================================================
// Get Region ID
//========================================================================

Game_Player.prototype.checkNoLandVehicleRegionID = function(x, y, d) {
    switch (d) {
    case 1:
      return $gameMap.regionId(x - 1, y + 1);
      break;
    case 2:
      return $gameMap.regionId(x + 0, y + 1);
      break;
    case 3:
      return $gameMap.regionId(x + 1, y + 1);
      break;
    case 4:
      return $gameMap.regionId(x - 1, y + 0);
      break;
    case 5:
      return $gameMap.regionId(x + 0, y + 0);
      break;
    case 6:
      return $gameMap.regionId(x + 1, y + 0);
      break;
    case 7:
      return $gameMap.regionId(x - 1, y - 1);
      break;
    case 8:
      return $gameMap.regionId(x + 0, y - 1);
      break;
    case 9:
      return $gameMap.regionId(x + 1, y - 1);
      break;
    }
    return 0;
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
// Check whether events can be triggered / Overwrite
//=============================================================================



Game_Player.prototype.checkEventTriggerHere = function(triggers) {
  if (eval(Karberus.LandBoat.TouchEvents) === false) {
    if (!this.isInBoat() && this.canStartLocalEvents()) {
        this.startMapEvent(this.x, this.y, triggers, false);
    }
  } else {  if (this.canStartLocalEvents()) {
        this.startMapEvent(this.x, this.y, triggers, false);
    }
  }
};

Game_Player.prototype.checkEventTriggerThere = function(triggers) {
  if (eval(Karberus.LandBoat.ActionEvents) === false) {
    if (!this.isInBoat() && this.canStartLocalEvents()) {
        var direction = this.direction();
        var x1 = this.x;
        var y1 = this.y;
        var x2 = $gameMap.roundXWithDirection(x1, direction);
        var y2 = $gameMap.roundYWithDirection(y1, direction);
        this.startMapEvent(x2, y2, triggers, true);
        if (!$gameMap.isAnyEventStarting() && $gameMap.isCounter(x2, y2)) {
            var x3 = $gameMap.roundXWithDirection(x2, direction);
            var y3 = $gameMap.roundYWithDirection(y2, direction);
            this.startMapEvent(x3, y3, triggers, true);
        }
    }
  } else {
    if (this.canStartLocalEvents()) {
        var direction = this.direction();
        var x1 = this.x;
        var y1 = this.y;
        var x2 = $gameMap.roundXWithDirection(x1, direction);
        var y2 = $gameMap.roundYWithDirection(y1, direction);
        this.startMapEvent(x2, y2, triggers, true);
        if (!$gameMap.isAnyEventStarting() && $gameMap.isCounter(x2, y2)) {
            var x3 = $gameMap.roundXWithDirection(x2, direction);
            var y3 = $gameMap.roundYWithDirection(y2, direction);
            this.startMapEvent(x3, y3, triggers, true);
        }
    }

  }
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

