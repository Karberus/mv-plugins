//============================================================================
// Karberus - Simple Follower Control
// SimpleFollowerControl.js
// Version 1.1
// No credit required. Can be used commercially or non commercially
//============================================================================
//============================================================================
var Imported = Imported || {};
Imported.SimpleFollowerOptions = true;

var Karberus = Karberus || {};
Karberus.FollowerOpt = Karberus.FollowerOpt || {};
//============================================================================
//============================================================================
/*:
 * @plugindesc v1.1 Allows you simple control over your followers.
 * @author Karberus
 * @version 1.1
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
 * MoveFollower x   //Where x equals: 0 = Player, 1 = First Follower, and so on.
 *
 * //Stops all follower movement, allowing you to move without them following you.
 *
 * StopFollowers true/false  //Example: StopFollowers true
 *
 * //Allows you to show balloon animation on your followers
 *
 * BalloonFollower x  //Where x equals: 0 = player, 1 = First Follower, and so on.
 *
 * //==============================================================================
 * //==============================================================================
 *
 *
 */
 (function() {

Karberus.Parameters = PluginManager.parameters("SimpleFollowerControl");

Karberus.FollowerOpt.WhichFollower = 0;
Karberus.FollowerOpt.StopFollowers = false;
Karberus.FollowerOpt.FollowerCollision = String(Karberus.Parameters["Follower Collision"]);
Karberus.FollowerOpt.getIDforBalloon = 0;

var Karb_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        Karb_Game_Interpreter_pluginCommand.call(this, command, args);
         if (command === "MoveFollower") {
           Karberus.FollowerOpt.WhichFollower = args;
         }
         if (command === "StopFollowers") {
           Karberus.FollowerOpt.StopFollowers = String(args);
         }
         if (command === "BalloonFollower") {
           Karberus.FollowerOpt.getIDforBalloon = args[0];
         }
};

_karb_Game_Interpreter_command213 = Game_Interpreter.prototype.command213;
Game_Interpreter.prototype.command213 = function() {
  if (Karberus.FollowerOpt.getIDforBalloon > 0) {
    this._character = $gamePlayer._followers._data[Karberus.FollowerOpt.getIDforBalloon-1];
    if (this._character) {
        this._character.requestBalloon(this._params[1]);
        if (this._params[2]) {
            this.setWaitMode('balloon');
       }
    }
  }
  else {
    _karb_Game_Interpreter_command213.call(this);
  }
    return true;
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
Game_Followers.prototype.moveRandomFollower = function() {
  this._data[Karberus.FollowerOpt.WhichFollower-1].moveRandom();
};
Game_Followers.prototype.moveTowardPlayerFollower = function() {
  this._data[Karberus.FollowerOpt.WhichFollower-1].moveTowardPlayer();
};
Game_Followers.prototype.moveAwayFromPlayerFollower = function() {
  this._data[Karberus.FollowerOpt.WhichFollower-1].moveAwayFromPlayer();
};
Game_Followers.prototype.moveForwardFollower = function() {
  this._data[Karberus.FollowerOpt.WhichFollower-1].moveForward();
};
Game_Followers.prototype.moveBackwardFollower = function() {
  this._data[Karberus.FollowerOpt.WhichFollower-1].moveBackward();
};
Game_Followers.prototype.setThroughFollower = function(followerSwitch) {
  this._data[Karberus.FollowerOpt.WhichFollower-1].setThrough(followerSwitch);
};
Game_Followers.prototype.turn180Follower = function() {
  this._data[Karberus.FollowerOpt.WhichFollower-1].turn180();
};
Game_Followers.prototype.turnRightOrLeft90Follower = function() {
  this._data[Karberus.FollowerOpt.WhichFollower-1].turnRightOrLeft90();
};
Game_Followers.prototype.turnRandomFollower = function() {
  this._data[Karberus.FollowerOpt.WhichFollower-1].turnRandom();
};
Game_Followers.prototype.turnTowardPlayerFollower = function() {
  this._data[Karberus.FollowerOpt.WhichFollower-1].turnTowardPlayer();
};
Game_Followers.prototype.turnAwayFromPlayerFollower = function() {
  this._data[Karberus.FollowerOpt.WhichFollower-1].turnAwayFromPlayer();
};

_Karb_Game_Character_updateRoutineMove = Game_Character.prototype.updateRoutineMove;
Game_Character.prototype.updateRoutineMove = function() {
    if (this._waitCount > 0) {
        this._waitCount--;
    } else {
        this.setMovementSuccess(true);
        var command = this._moveRoute.list[this._moveRouteIndex];
        if (command && Karberus.FollowerOpt.WhichFollower > 0) {
            this.processMoveFollowerCommand(command);
            this.advanceMoveRouteIndex();
        }
        else if (command) {
            _Karb_Game_Character_updateRoutineMove.call(this);
        }
    }
};

Game_Character.prototype.processMoveFollowerCommand = function(command) {
    var gc = Game_Character;
    var params = command.parameters;
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
        this._followers.moveRandomFollower();
        this._waitCount = 16;
        break;
    case gc.ROUTE_MOVE_TOWARD:
        this._followers.moveTowardPlayerFollower();
        this._waitCount = 16;
        break;
    case gc.ROUTE_MOVE_AWAY:
        this._followers.moveAwayFromPlayerFollower();
        this._waitCount = 16;
        break;
    case gc.ROUTE_MOVE_FORWARD:
        this._followers.moveForwardFollower();
        this._waitCount = 16;
        break;
    case gc.ROUTE_MOVE_BACKWARD:
        this._followers.moveBackwardFollower();
        this._waitCount = 16;
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
        this._followers.turn180Follower();
        this._waitCount = 16;
        break;
    case gc.ROUTE_TURN_90D_R_L:
        this._followers.turnRightOrLeft90Follower();
        this._waitCount = 16;
        break;
    case gc.ROUTE_TURN_RANDOM:
        this._followers.turnRandomFollower();
        this._waitCount = 16;
        break;
    case gc.ROUTE_TURN_TOWARD:
        this._followers.turnTowardPlayerFollower();
        this._waitCount = 16;
        break;
    case gc.ROUTE_TURN_AWAY:
        this._followers.turnAwayFromPlayerFollower();
        this._waitCount = 16;
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
};

})();
//============================================================================================
//=======================================END FILE=============================================
//============================================================================================
