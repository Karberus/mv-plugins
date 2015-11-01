//============================================================================
// Karberus - Simple Follower Control
// SimpleFollowerControl.js
// Version 1.0
// No credit required. Can be used commercially or non commercially
//============================================================================
//============================================================================
var Imported = Imported || {};
Imported.SimpleFollowerOptions = true;

var Karberus = Karberus || {};
Karberus.FollowerOpt = Karberus.FollowerOpt || {};
/*:
 * @plugindesc v1.0 Allows you simple control over your followers.
 * @author Karberus
 * @version 1.0
 *
 *
 *
 * @param Follower Collision
 * @desc Whether events collide with your followers.
 * Default: false
 * @default false
 *
 *
 *@help This Plugin allows you to have some control over your followers.
 *
 *After using the Plugin Command to choose which follower to move,
 *in an event, use the Set Movement Route: Player command.
 *
 *By default, your followers will go through walls and such. You must set
 *Through OFF in the set move route in order to disable this.
 *
 *If Through is set to OFF they will automatically skip if cannot move.
 *As of now, you can't change their speed or frequency.
 *You may only move one follower at a time.
 *
 *
 * //==============================================================================
 * //                  Plugin Commands
 * //==============================================================================
 *
 * //Overrides Set Move Route to allow you some control over your followers.
 *
 * MoveFollower x   // Where X equals: 0 = Player, 1 = First Follower, and so on.
 *
 * //Stops all follower movement, allowing you to move without them following you.
 *
 * StopFollowers true/false  //Example: StopFollowers true
 *
 * //==============================================================================
 * //==============================================================================
 *
 *
 */

Karberus.Parameters = PluginManager.parameters("SimpleFollowerControl");

Karberus.FollowerOpt.WhichFollower = 0;
Karberus.FollowerOpt.StopFollowers = false;
Karberus.FollowerOpt.FollowerCollision = String(Karberus.Parameters["Follower Collision"]);


var Karb_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        Karb_Game_Interpreter_pluginCommand.call(this, command, args);
         if (command === "MoveFollower") {
           Karberus.FollowerOpt.WhichFollower = args;
         }
         if (command === "StopFollowers") {
           Karberus.FollowerOpt.StopFollowers = String(args);
         }
};

Game_Player.prototype.isCollided = function(x, y) {
  if (eval(Karberus.FollowerOpt.FollowerCollision) === false) {
    if (this.isThrough()) {
        return false;
    } else {
        return this.pos(x, y);
    }
  }
  else {
    if (this.isThrough()) {
        return false;
    } else {
        return this.pos(x, y) || this._followers.isSomeoneCollided(x, y);
    }
  }
};


Game_Player.prototype.moveStraight = function(d) {
  if (eval(Karberus.FollowerOpt.StopFollowers) === false) {
    if (this.canPass(this.x, this.y, d)) {
        this._followers.updateMove();
    }
  }
    Game_Character.prototype.moveStraight.call(this, d);
};


Game_Followers.prototype.moveFollower = function(follower_direction) {
  this._data[Karberus.FollowerOpt.WhichFollower-1].moveStraight(follower_direction);
};
Game_Followers.prototype.moveDiagonallyFollower = function(follower_direction1, follower_direction2) {
  this._data[Karberus.FollowerOpt.WhichFollower-1].moveDiagonally(follower_direction1, follower_direction2);
};
Game_Followers.prototype.setDirectionFollower = function(follower_direction) {
  this._data[Karberus.FollowerOpt.WhichFollower-1].setDirection(follower_direction);
};
Game_Followers.prototype.jumpFollower = function(params, params) {
  this._data[Karberus.FollowerOpt.WhichFollower-1].jump(params, params);
};
Game_Followers.prototype.turnRight90Follower = function() {
  this._data[Karberus.FollowerOpt.WhichFollower-1].turnRight90();
};
Game_Followers.prototype.turnLeft90Follower = function() {
  this._data[Karberus.FollowerOpt.WhichFollower-1].turnLeft90();
};
Game_Followers.prototype.setThroughFollower = function(followerSwitch) {
  this._data[Karberus.FollowerOpt.WhichFollower-1].setThrough(followerSwitch);
};

Game_Character.prototype.processMoveCommand = function(command) {
    var gc = Game_Character;
    var params = command.parameters;
    if (Karberus.FollowerOpt.WhichFollower > 0) {
    switch (command.code) {
    case gc.ROUTE_END:
        this.processRouteEnd();
        break;
    case gc.ROUTE_MOVE_DOWN:
        this._followers.moveFollower(2);
        this._waitCount = 16;
        break;
    case gc.ROUTE_MOVE_LEFT:
        this._followers.moveFollower(4);
        this._waitCount = 16;
        break;
    case gc.ROUTE_MOVE_RIGHT:
        this._followers.moveFollower(6);
        this._waitCount = 16;
        break;
    case gc.ROUTE_MOVE_UP:
        this._followers.moveFollower(8);
        this._waitCount = 16;
        break;
    case gc.ROUTE_MOVE_LOWER_L:
        this._followers.moveDiagonallyFollower(4,2);
        this._waitCount = 16;
        break;
    case gc.ROUTE_MOVE_LOWER_R:
        this._followers.moveDiagonallyFollower(6,2);
          this._waitCount = 16;
        break;
    case gc.ROUTE_MOVE_UPPER_L:
        this._followers.moveDiagonallyFollower(4,8);
        this._waitCount = 16;
        break;
    case gc.ROUTE_MOVE_UPPER_R:
        this._followers.moveDiagonallyFollower(6,8);
        this._waitCount = 16;
        break;
    case gc.ROUTE_MOVE_RANDOM:
        this.moveRandom();
        break;
    case gc.ROUTE_MOVE_TOWARD:
        this.moveTowardPlayer();
        break;
    case gc.ROUTE_MOVE_AWAY:
        this.moveAwayFromPlayer();
        break;
    case gc.ROUTE_MOVE_FORWARD:
        this.moveForward();
        break;
    case gc.ROUTE_MOVE_BACKWARD:
        this.moveBackward();
        break;
    case gc.ROUTE_JUMP:
        this._followers.jumpFollower(params[0], params[1]);
        this._waitCount = 16;
        break;
    case gc.ROUTE_WAIT:
        this._waitCount = params[0] - 1;
        break;
    case gc.ROUTE_TURN_DOWN:
        this._followers.setDirectionFollower(2);
        this._waitCount = 16;
        break;
    case gc.ROUTE_TURN_LEFT:
        this._followers.setDirectionFollower(4);
        this._waitCount = 16;
        break;
    case gc.ROUTE_TURN_RIGHT:
        this._followers.setDirectionFollower(6);
        this._waitCount = 16;
        break;
    case gc.ROUTE_TURN_UP:
        this._followers.setDirectionFollower(8);
        this._waitCount = 16;
        break;
    case gc.ROUTE_TURN_90D_R:
        this._followers.turnRight90Follower();
        this._waitCount = 16;
        break;
    case gc.ROUTE_TURN_90D_L:
        this._followers.turnLeft90Follower();
        this._waitCount = 16;
        break;
    case gc.ROUTE_TURN_180D:
        this.turn180();
        break;
    case gc.ROUTE_TURN_90D_R_L:
        this.turnRightOrLeft90();
        break;
    case gc.ROUTE_TURN_RANDOM:
        this.turnRandom();
        break;
    case gc.ROUTE_TURN_TOWARD:
        this.turnTowardPlayer();
        break;
    case gc.ROUTE_TURN_AWAY:
        this.turnAwayFromPlayer();
        break;
    case gc.ROUTE_SWITCH_ON:
        $gameSwitches.setValue(params[0], true);
        break;
    case gc.ROUTE_SWITCH_OFF:
        $gameSwitches.setValue(params[0], false);
        break;
    case gc.ROUTE_CHANGE_SPEED:
        this.setMoveSpeed(params[0]);
        break;
    case gc.ROUTE_CHANGE_FREQ:
        this.setMoveFrequency(params[0]);
        break;
    case gc.ROUTE_WALK_ANIME_ON:
        this.setWalkAnime(true);
        break;
    case gc.ROUTE_WALK_ANIME_OFF:
        this.setWalkAnime(false);
        break;
    case gc.ROUTE_STEP_ANIME_ON:
        this.setStepAnime(true);
        break;
    case gc.ROUTE_STEP_ANIME_OFF:
        this.setStepAnime(false);
        break;
    case gc.ROUTE_DIR_FIX_ON:
        this.setDirectionFix(true);
        break;
    case gc.ROUTE_DIR_FIX_OFF:
        this.setDirectionFix(false);
        break;
    case gc.ROUTE_THROUGH_ON:
        this._followers.setThroughFollower(true);
        break;
    case gc.ROUTE_THROUGH_OFF:
        this._followers.setThroughFollower(false);
        break;
    case gc.ROUTE_TRANSPARENT_ON:
        this.setTransparent(true);
        break;
    case gc.ROUTE_TRANSPARENT_OFF:
        this.setTransparent(false);
        break;
    case gc.ROUTE_CHANGE_IMAGE:
        this.setImage(params[0], params[1]);
        break;
    case gc.ROUTE_CHANGE_OPACITY:
        this.setOpacity(params[0]);
        break;
    case gc.ROUTE_CHANGE_BLEND_MODE:
        this.setBlendMode(params[0]);
        break;
    case gc.ROUTE_PLAY_SE:
        AudioManager.playSe(params[0]);
        break;
    case gc.ROUTE_SCRIPT:
        eval(params[0]);
        break;
    }
  }
  else {
    switch (command.code) {
    case gc.ROUTE_END:
        this.processRouteEnd();
        break;
    case gc.ROUTE_MOVE_DOWN:
        this.moveStraight(2);
        break;
    case gc.ROUTE_MOVE_LEFT:
        this.moveStraight(4);
        break;
    case gc.ROUTE_MOVE_RIGHT:
        this.moveStraight(6);
        break;
    case gc.ROUTE_MOVE_UP:
        this.moveStraight(8);
        break;
    case gc.ROUTE_MOVE_LOWER_L:
        this.moveDiagonally(4, 2);
        break;
    case gc.ROUTE_MOVE_LOWER_R:
        this.moveDiagonally(6, 2);
        break;
    case gc.ROUTE_MOVE_UPPER_L:
        this.moveDiagonally(4, 8);
        break;
    case gc.ROUTE_MOVE_UPPER_R:
        this.moveDiagonally(6, 8);
        break;
    case gc.ROUTE_MOVE_RANDOM:
        this.moveRandom();
        break;
    case gc.ROUTE_MOVE_TOWARD:
        this.moveTowardPlayer();
        break;
    case gc.ROUTE_MOVE_AWAY:
        this.moveAwayFromPlayer();
        break;
    case gc.ROUTE_MOVE_FORWARD:
        this.moveForward();
        break;
    case gc.ROUTE_MOVE_BACKWARD:
        this.moveBackward();
        break;
    case gc.ROUTE_JUMP:
        this.jump(params[0], params[1]);
        break;
    case gc.ROUTE_WAIT:
        this._waitCount = params[0] - 1;
        break;
    case gc.ROUTE_TURN_DOWN:
        this.setDirection(2);
        break;
    case gc.ROUTE_TURN_LEFT:
        this.setDirection(4);
        break;
    case gc.ROUTE_TURN_RIGHT:
        this.setDirection(6);
        break;
    case gc.ROUTE_TURN_UP:
        this.setDirection(8);
        break;
    case gc.ROUTE_TURN_90D_R:
        this.turnRight90();
        break;
    case gc.ROUTE_TURN_90D_L:
        this.turnLeft90();
        break;
    case gc.ROUTE_TURN_180D:
        this.turn180();
        break;
    case gc.ROUTE_TURN_90D_R_L:
        this.turnRightOrLeft90();
        break;
    case gc.ROUTE_TURN_RANDOM:
        this.turnRandom();
        break;
    case gc.ROUTE_TURN_TOWARD:
        this.turnTowardPlayer();
        break;
    case gc.ROUTE_TURN_AWAY:
        this.turnAwayFromPlayer();
        break;
    case gc.ROUTE_SWITCH_ON:
        $gameSwitches.setValue(params[0], true);
        break;
    case gc.ROUTE_SWITCH_OFF:
        $gameSwitches.setValue(params[0], false);
        break;
    case gc.ROUTE_CHANGE_SPEED:
        this.setMoveSpeed(params[0]);
        break;
    case gc.ROUTE_CHANGE_FREQ:
        this.setMoveFrequency(params[0]);
        break;
    case gc.ROUTE_WALK_ANIME_ON:
        this.setWalkAnime(true);
        break;
    case gc.ROUTE_WALK_ANIME_OFF:
        this.setWalkAnime(false);
        break;
    case gc.ROUTE_STEP_ANIME_ON:
        this.setStepAnime(true);
        break;
    case gc.ROUTE_STEP_ANIME_OFF:
        this.setStepAnime(false);
        break;
    case gc.ROUTE_DIR_FIX_ON:
        this.setDirectionFix(true);
        break;
    case gc.ROUTE_DIR_FIX_OFF:
        this.setDirectionFix(false);
        break;
    case gc.ROUTE_THROUGH_ON:
        this.setThrough(true);
        break;
    case gc.ROUTE_THROUGH_OFF:
        this.setThrough(false);
        break;
    case gc.ROUTE_TRANSPARENT_ON:
        this.setTransparent(true);
        break;
    case gc.ROUTE_TRANSPARENT_OFF:
        this.setTransparent(false);
        break;
    case gc.ROUTE_CHANGE_IMAGE:
        this.setImage(params[0], params[1]);
        break;
    case gc.ROUTE_CHANGE_OPACITY:
        this.setOpacity(params[0]);
        break;
    case gc.ROUTE_CHANGE_BLEND_MODE:
        this.setBlendMode(params[0]);
        break;
    case gc.ROUTE_PLAY_SE:
        AudioManager.playSe(params[0]);
        break;
    case gc.ROUTE_SCRIPT:
        eval(params[0]);
        break;
    }
  }
};
//============================================================================================
//=======================================END FILE=============================================
//============================================================================================
