//============================================================================
// Karberus - Speed Manager
// SpeedManager.js
// Version 1.1
// No credit required. Can be used commercially or non commercially
//============================================================================
//============================================================================
var Imported = Imported || {};
Imported.SpeedManager = true;

var Karberus = Karberus || {};
Karberus.SpeedManager = Karberus.SpeedManager || {};
//============================================================================
//============================================================================
/*:
 * @plugindesc v1.1 Allows you to manage default movement speeds.
 * @author Karberus
 * @version 1.1
 *
 *
 *
 * @param Move Speed
 * @desc Player movement speed.
 * Default: 4
 * @default 4
 *
 * @param Dash Speed
 * @desc This value will be added to Move Speed when dashing.
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
 * @param Agility Based
 * @desc Whether the party leader's AGI plays a part in movement speed.
 * Default: false
 * @default false
 *
 * @param Distance Per Frame
 * @desc Change this only if you know what you are doing.
 * Default: Math.pow(2, this.realMoveSpeed()) / 256;
 * @default Math.pow(2, this.realMoveSpeed()) / 256;
 *
 *
 *
 *@help This Plugin allows you to set default speeds for player, dashing, boat,
 *ship and airship.
 *
 *==============================================================================
 * Agility Based (Experimental)
 *==============================================================================
 * I'm not completely sure how this will work, but basically the higher the
 * party leader's agility, the faster you will be able to move. Currently, this
 * should affect any movement, such as dashing or vehicles. I might change it
 * so that vehicles are unaffected (that makes more sense, right?).
 *
 * The way it works, the party leader's agility is divided by 2048 and then
 * added to the Distance Per Frame formula.
 *==============================================================================
 *
 *
 *==============================================================================
 * Distance Per Frame
 *==============================================================================
 * Math.pow(2, this.realMoveSpeed()) / 256;
 * this.realMoveSpeed depends on whether you are moving, dashing or on a vehicle.
 * For example, if you set Move Speed to 4(default), whenever you are moving, and
 * not dashing, this.realMoveSpeed will equal 4.
 * Therefore, the formula would equal Math.pow(2, 4) / 256;
 *
 * Now, Math.pow(2, 4) means 2*2*2*2 which in turn equals 16
 *
 * All that's left in the formula is 16 / 256 which equals 0.0625
 * This means that Distance Per Frame = 0.0625 when moving.
 *==============================================================================
 *
 *
 */
 (function() {

   Karberus.Parameters = PluginManager.parameters("SpeedManager");

   Karberus.SpeedManager.MoveSpeed = Number(Karberus.Parameters["Move Speed"]);
   Karberus.SpeedManager.DashSpeed = Number(Karberus.Parameters["Dash Speed"]);
   Karberus.SpeedManager.BoatMoveSpeed = Number(Karberus.Parameters["Boat Speed"]);
   Karberus.SpeedManager.ShipMoveSpeed = Number(Karberus.Parameters["Ship Speed"]);
   Karberus.SpeedManager.AirshipMoveSpeed = Number(Karberus.Parameters["Airship Speed"]);

   Karberus.SpeedManager.AgiBasedSpeed = String(Karberus.Parameters["Agility Based"]);

   Karberus.SpeedManager.DistancePerFrameFormula = Karberus.Parameters["Distance Per Frame"];


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

Game_CharacterBase.prototype.distancePerFrame = function() {
  if (Karberus.SpeedManager.AgiBasedSpeed === "false"){
    return eval(Karberus.SpeedManager.DistancePerFrameFormula);
  } else if (Karberus.SpeedManager.AgiBasedSpeed === "true") {
    return eval(Karberus.SpeedManager.DistancePerFrameFormula) + $gameParty.members()[0].agi / 2048;
  }
};

})();
