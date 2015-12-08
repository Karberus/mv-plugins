//============================================================================
// Karberus - Random Battle BGM
// RandomBattleBGM.js
// Version 2.0
// No credit required. Can be used commercially or non commercially
//============================================================================
//============================================================================
var Imported = Imported || {};
Imported.RandomBattleBGM = true;

var Karberus = Karberus || {};
Karberus.RandBgm = Karberus.RandBgm || {};
//============================================================================
//============================================================================
/*:
 * @plugindesc v2.0 Plays a different BGM randomly each battle.
 * @author Karberus
 * @version 2.0
 *
 *
 *
 * @param Volume
 * @desc Change the volume of battle bgm
 * Default: 90
 * @default 90
 *
 * @param Pitch
 * @desc Change the pitch of battle bgm
 * Default: 100
 * @default 100
 *
 * @param Pan
 * @desc Change the pan of battle bgm
 * Default: 0
 * @default 0
 *
 * @param BGM 1
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default: Battle1
 * @default Battle1
 *
 * @param BGM 2
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default: Battle2
 * @default Battle2
 *
 * @param BGM 3
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default: Battle3
 * @default Battle3
 *
 *
 * @param BGM 4
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 5
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 6
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 7
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 8
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 9
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 10
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 11
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 12
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 13
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 14
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 15
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 16
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 17
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 18
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 19
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 20
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 21
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 22
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 23
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 24
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 25
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 26
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 27
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 28
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 29
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *
 * @param BGM 30
 * @desc Filname of the BGM that will be chosen at random for battle.
 * Default:
 * @default
 *
 *@help This plugin will randomly play one of the BGM's you choose in battle.
 *
 *If you are going to set the battle bgm through an event, I recommend turning
 *the plugin off using the plugin command, and then turn it back on whenever
 *you want the random bgm to take place again.
 *
 *This is not necessary, but keep in mind that if you change the battle bgm
 *through an event, and then the player opens and closes the menu, a random
 *battle bgm will take place over the one you previously set. This is because
 *a random battle bgm is set every time the map scene loads.
 *
 * //==============================================================================
 * //                  Plugin Commands
 * //==============================================================================
 *
 * //Turns this plugin on or off
 *
 * RandomBGM on/off   //Example: RandomBGM off
 *
 *
 * //==============================================================================
 */
//===========================================================================
//===========================================================================

(function() {

//Initialize parameter values
Karberus.Parameters = PluginManager.parameters("RandomBattleBGM");
//============================================================================
// Override
//============================================================================
_Karb_Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
//============================================================================
//                      Initialize Variables
//============================================================================
var audio_bgm = {};
var randBgm;
var rbgm_argument_name;
var bbgm_pitch = (Karberus.Parameters["Pitch"]);
var bbgm_volume = (Karberus.Parameters["Volume"]);
var bbgm_pan = (Karberus.Parameters["Pan"]);
Karberus.RandBgm.OnOrOff = "on";

//============================================================================
//             Array that holds the parameter values
//============================================================================
var randBgm_parameters = [];
randBgm_parameters[0] = String(Karberus.Parameters["BGM 1"]);
randBgm_parameters[1] = String(Karberus.Parameters["BGM 2"]);
randBgm_parameters[2] = String(Karberus.Parameters["BGM 3"]);
randBgm_parameters[3] = String(Karberus.Parameters["BGM 4"]);
randBgm_parameters[4] = String(Karberus.Parameters["BGM 5"]);
randBgm_parameters[5] = String(Karberus.Parameters["BGM 6"]);
randBgm_parameters[6] = String(Karberus.Parameters["BGM 7"]);
randBgm_parameters[7] = String(Karberus.Parameters["BGM 8"]);
randBgm_parameters[8] = String(Karberus.Parameters["BGM 9"]);
randBgm_parameters[9] = String(Karberus.Parameters["BGM 10"]);
randBgm_parameters[10] = String(Karberus.Parameters["BGM 11"]);
randBgm_parameters[11] = String(Karberus.Parameters["BGM 12"]);
randBgm_parameters[12] = String(Karberus.Parameters["BGM 13"]);
randBgm_parameters[13] = String(Karberus.Parameters["BGM 14"]);
randBgm_parameters[14] = String(Karberus.Parameters["BGM 15"]);
randBgm_parameters[15] = String(Karberus.Parameters["BGM 16"]);
randBgm_parameters[16] = String(Karberus.Parameters["BGM 17"]);
randBgm_parameters[17] = String(Karberus.Parameters["BGM 18"]);
randBgm_parameters[18] = String(Karberus.Parameters["BGM 19"]);
randBgm_parameters[19] = String(Karberus.Parameters["BGM 20"]);
randBgm_parameters[20] = String(Karberus.Parameters["BGM 21"]);
randBgm_parameters[21] = String(Karberus.Parameters["BGM 22"]);
randBgm_parameters[22] = String(Karberus.Parameters["BGM 23"]);
randBgm_parameters[23] = String(Karberus.Parameters["BGM 24"]);
randBgm_parameters[24] = String(Karberus.Parameters["BGM 25"]);
randBgm_parameters[25] = String(Karberus.Parameters["BGM 26"]);
randBgm_parameters[26] = String(Karberus.Parameters["BGM 27"]);
randBgm_parameters[27] = String(Karberus.Parameters["BGM 28"]);
randBgm_parameters[28] = String(Karberus.Parameters["BGM 29"]);
randBgm_parameters[29] = String(Karberus.Parameters["BGM 30"]);
//============================================================================
//                       Plugin Commands
//============================================================================
var Karb_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        Karb_Game_Interpreter_pluginCommand.call(this, command, args);
         if (command === "RandomBGM") {
           Karberus.RandBgm.OnOrOff = String(args);
           if (String(args) === "on") {
             randBgm = randBgm_array[Math.floor(Math.random() * randBgm_array.length)];
           	 audio_bgm = {name: randBgm, pitch: bbgm_pitch, volume: bbgm_volume, pan: bbgm_pan};
             $gameSystem.setBattleBgm(audio_bgm);
           }
         }
};

//=============================================================================
//Whenever Map Scene is loaded, Battle Bgm changes
//=============================================================================

Scene_Map.prototype.onMapLoaded = function() {

  _Karb_Scene_Map_onMapLoaded.call(this);

if (Karberus.RandBgm.OnOrOff === "on") {
  randBgm = randBgm_array[Math.floor(Math.random() * randBgm_array.length)];
	audio_bgm = {name: randBgm, pitch: bbgm_pitch, volume: bbgm_volume, pan: bbgm_pan};
  $gameSystem.setBattleBgm(audio_bgm);
 }
};

//============================================================================
// Array that holds any declared BGM's by the user in the parameter settings
//============================================================================
var randBgm_array = [];
//============================================================================
// Adds only the declared BGM's into randBgm_array
//============================================================================
for(i = 0; i < randBgm_parameters.length; i++) {
	if (randBgm_parameters[i] !== "") {
		randBgm_array.splice(0, 0, randBgm_parameters[i])
	}
};

})();
//============================================================================================
//=======================================END FILE=============================================
//============================================================================================
