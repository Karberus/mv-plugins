//============================================================================
// Karberus - Simple Speed Manager
// SimpleSpeedManager.js
// Version 1.00
// No credit required. Can be used commercially or non commercially
//============================================================================
//============================================================================
var Imported = Imported || {};
Imported.SimpleSpeedManager = true;

var Karberus = Karberus || {};
Karberus.SpeedManager = Karberus.SpeedManager || {};
//============================================================================
//============================================================================
/*:
 * @plugindesc v1.00 Allows you to manage default movement speeds.
 * @author Karberus
 * @version 1.00
 *
 *
 *
 * @param Move Speed
 * @desc Player movement speed.
 * Default: 4
 * @default 4
 *
 * @param Dash Speed
 * @desc Player dashing speed.
 * Default: 1
 * @default 1
 *
 * @param Boat Speed
 * @desc Boat movement speed.
 * Default: 4
 * @default 4
 *
 * @param Ship Speed
 * @desc Ship movement speed.
 * Default: 5
 * @default 5
 *
 * @param Airship Speed
 * @desc Airship movement speed.
 * Default: 6
 * @default 6
 *
 *@help This Plugin allows you to set default speeds for player, dashing, boat,
 *ship and airship.
 *
 *
 *
 *
 */
 (function() {

   Karberus.Parameters = PluginManager.parameters("SimpleSpeedManager");

   Karberus.SpeedManager.MoveSpeed = Number(Karberus.Parameters["Move Speed"]);
   Karberus.SpeedManager.DashSpeed = Number(Karberus.Parameters["Dash Speed"]);
   Karberus.SpeedManager.BoatMoveSpeed = Number(Karberus.Parameters["Boat Speed"]);
   Karberus.SpeedManager.ShipMoveSpeed = Number(Karberus.Parameters["Ship Speed"]);
   Karberus.SpeedManager.AirshipMoveSpeed = Number(Karberus.Parameters["Airship Speed"]);




_Karb_Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function() {

    _Karb_Game_CharacterBase_initMembers.call(this);
    this._moveSpeed = Karberus.SpeedManager.MoveSpeed;

};

Game_CharacterBase.prototype.realMoveSpeed = function() {
    return this._moveSpeed + (this.isDashing() ? Karberus.SpeedManager.DashSpeed : 0);
};

Game_Vehicle.prototype.initMoveSpeed = function() {
    if (this.isBoat()) {
        this.setMoveSpeed(Karberus.SpeedManager.BoatMoveSpeed);
    } else if (this.isShip()) {
        this.setMoveSpeed(Karberus.SpeedManager.ShipMoveSpeed);
    } else if (this.isAirship()) {
        this.setMoveSpeed(Karberus.SpeedManager.AirshipMoveSpeed);
    }
};

})();
