//============================================================================
// Karberus - Battle Windows Customization
// BattleWindowsCustomization.js
// Version 1.0
// No credit required. Can be used commercially or non commercially
//============================================================================
//============================================================================
var Imported = Imported || {};
Imported.WindowEdit = true;

var Karberus = Karberus || {};
Karberus.WinEdit = Karberus.WinEdit || {};
//============================================================================
//============================================================================
/*:
 * @plugindesc v1.0 Allows you to fully customize battle windows.
 * @author Karberus
 * @version 1.0
 *
 *
 *
 *
 *
 * @param BattleStatus Default
 * @desc Set to false for your changes to take effect.
 * Default: true
 * @default true
 *
 *
 * @param BattleStatus Opacity
 * @desc Set the opacity of this window. 0 makes it transparent.
 * Default: 255
 * @default 255
 *
 * @param BattleStatus Font
 * @desc Set font size in this window.
 * Default: 28
 * @default 28
 *
 * @param BattleStatus Width
 * @desc Set Width of this window.
 * Default: 624
 * @default 624
 *
 *
 * @param BattleStatus Height
 * @desc Set Height of this window.
 * Default: 180
 * @default 180
 *
 * @param BattleStatus x
 * @desc Position x of window while Party Command is visible.
 * Default: 192
 * @default 192
 *
 * @param BattleStatus x 2
 * @desc Position x of window while Party Command is not visible.
 * Default: 96
 * @default 96
 *
 *
 * @param BattleStatus y
 * @desc Position x of window while Party Command is not visible.
 * Default: 444
 * @default 444
 *
 *
 * @param BattleStatus y 2
 * @desc Position x of window while Party Command is not visible.
 * Default: 444
 * @default 444
 *
 * @param ------------------
 * @desc -------------------------------
 * @default
 *
 *
 * @param PartyCommand Default
 * @desc Set to false for your changes to take effect.
 * Default: true
 * @default true
 *
 * @param PartyCommand Opacity
 * @desc Set the opacity of this window. 0 makes it transparent.
 * Default: 255
 * @default 255
 *
 * @param PartyCommand Font
 * @desc Set font size in this window.
 * Default: 28
 * @default 28
 *
 *
 * @param PartyCommand Width
 * @desc Set Width of this window.
 * Default: 192
 * @default 192
 *
 *
 * @param PartyCommand Rows
 * @desc Set how many rows are visible in this window. Affects height.
 * Default: 4
 * @default 4
 *
 * @param PartyCommand x
 * @desc Position x of this window.
 * Default: 0
 * @default 0
 *
 *
 * @param PartyCommand y
 * @desc Position y of this window.
 * Default: 444
 * @default 444
 *
 *
 * @param ------------------
 * @desc -------------------------------
 * @default
 *
 *
 * @param ActorCommand Default
 * @desc Set to false for your changes to take effect.
 * Default: true
 * @default true
 *
 *
 * @param ActorCommand Opacity
 * @desc Set the opacity of this window. 0 makes it transparent.
 * Default: 255
 * @default 255
 *
 * @param ActorCommand Font
 * @desc Set font size in this window.
 * Default: 28
 * @default 28
 *
 * @param ActorCommand Width
 * @desc Set Width of this window.
 * Default: 192
 * @default 192
 *
 *
 * @param ActorCommand Rows
 * @desc Set how many rows are visible in this window. Affects height.
 * Default: 4
 * @default 4
 *
 * @param ActorCommand x
 * @desc Position x of this window.
 * Default: 0
 * @default 0
 *
 *
 * @param ActorCommand y
 * @desc Position y of this window.
 * Default: 444
 * @default 444
 *
 *
 * @param ------------------
 * @desc -------------------------------
 * @default
 *
 *
 * @param EnemyWindow Default
 * @desc Set to false for your changes to take effect.
 * Default: true
 * @default true
 *
 *
 * @param EnemyWindow Opacity
 * @desc Set the opacity of this window. 0 makes it transparent.
 * Default: 255
 * @default 255
 *
 * @param EnemyWindow Font
 * @desc Set font size in this window.
 * Default: 28
 * @default 28
 *
 * @param EnemyWindow Width
 * @desc Set Width of this window.
 * Default: 624
 * @default 624
 *
 *
 * @param EnemyWindow Height
 * @desc Set Height of this window.
 * Default: 180
 * @default 180
 *
 * @param EnemyWindow x
 * @desc Position x of this window.
 * Default: 192
 * @default 192
 *
 *
 * @param EnemyWindow y
 * @desc Position y of this window.
 * Default: 444
 * @default 444
 *
 *
 * @param ------------------
 * @desc -------------------------------
 * @default
 *
 *
 * @param SkillWindow Default
 * @desc Set to false for your changes to take effect.
 * Default: true
 * @default true
 *
 *
 * @param SkillWindow Opacity
 * @desc Set the opacity of this window. 0 makes it transparent.
 * Default: 255
 * @default 255
 *
 * @param SkillWindow Font
 * @desc Set font size in this window.
 * Default: 28
 * @default 28
 *
 * @param SkillWindow Width
 * @desc Set Width of this window.
 * Default: 624
 * @default 624
 *
 *
 * @param SkillWindow Height
 * @desc Set Height of this window.
 * Default: 180
 * @default 180
 *
 * @param SkillWindow x
 * @desc Position x of this window.
 * Default: 192
 * @default 192
 *
 *
 * @param SkillWindow y
 * @desc Position y of this window.
 * Default: 444
 * @default 444
 *
 *
 * @param ------------------
 * @desc -------------------------------
 * @default
 *
 *
 * @param ItemWindow Default
 * @desc Set to false for your changes to take effect.
 * Default: true
 * @default true
 *
 *
 * @param ItemWindow Opacity
 * @desc Set the opacity of this window. 0 makes it transparent.
 * Default: 255
 * @default 255
 *
 * @param ItemWindow Font
 * @desc Set font size in this window.
 * Default: 28
 * @default 28
 *
 * @param ItemWindow Width
 * @desc Set Width of this window.
 * Default: 624
 * @default 624
 *
 *
 * @param ItemWindow Height
 * @desc Set Height of this window.
 * Default: 180
 * @default 180
 *
 * @param ItemWindow x
 * @desc Position x of this window.
 * Default: 192
 * @default 192
 *
 *
 * @param ItemWindow y
 * @desc Position y of this window.
 * Default: 444
 * @default 444
 *
 *
 * @param ------------------
 * @desc -------------------------------
 * @default
 *
 *
 *
 * @param HelpWindow Default
 * @desc Set to false for your changes to take effect.
 * Default: true
 * @default true
 *
 *
 * @param HelpWindow Opacity
 * @desc Set the opacity of this window. 0 makes it transparent.
 * Default: 255
 * @default 255
 *
 * @param HelpWindow Font
 * @desc Set font size in this window.
 * Default: 28
 * @default 28
 *
 * @param HelpWindow Width
 * @desc Set Width of this window.
 * Default: 816
 * @default 816
 *
 *
 * @param HelpWindow Height
 * @desc Set Height of this window.
 * Default: 100
 * @default 100
 *
 * @param HelpWindow x
 * @desc Position x of this window.
 * Default: 0
 * @default 0
 *
 *
 * @param HelpWindow y
 * @desc Position y of this window.
 * Default: 0
 * @default 0
 *
 * @param ------------------
 * @desc -------------------------------
 * @default
 *
 *
 * @param LogWindow Default
 * @desc Set to false for your changes to take effect.
 * Default: true
 * @default true
 *
 * @param LogWindow Font
 * @desc Set font size in this window.
 * Default: 28
 * @default 28
 *
 * @param LogWindow Width
 * @desc Set Width of this window.
 * Default: 816
 * @default 816
 *
 *
 * @param LogWindow Height
 * @desc Set Height of this window.
 * Default: 100
 * @default 100
 *
 * @param LogWindow x
 * @desc Position x of this window.
 * Default: 0
 * @default 0
 *
 *
 * @param LogWindow y
 * @desc Position y of this window.
 * Default: 0
 * @default 0
 *
 *
 *@help This plugin allows you to customize nearly everything about battle windows.
 *
 *This Plugin doesn't have any plugin commands.
 *
 */
 (function() {

Karberus.Parameters = PluginManager.parameters("BattleWindowsCustomization");

Karberus.WinEdit.BattleStatusDefault = eval(Karberus.Parameters["BattleStatus Default"]);
Karberus.WinEdit.BattleStatusOpacity = Number(Karberus.Parameters["BattleStatus Opacity"]);
Karberus.WinEdit.BattleStatusFont = Number(Karberus.Parameters["BattleStatus Font"]);
Karberus.WinEdit.BattleStatusWidth = Number(Karberus.Parameters["BattleStatus Width"]);
Karberus.WinEdit.BattleStatusHeight = Number(Karberus.Parameters["BattleStatus Height"]);
Karberus.WinEdit.BattleStatusXpos = Number(Karberus.Parameters["BattleStatus x"]);
Karberus.WinEdit.BattleStatusXpos2 = Number(Karberus.Parameters["BattleStatus x 2"]);
Karberus.WinEdit.BattleStatusYpos = Number(Karberus.Parameters["BattleStatus y"]);
Karberus.WinEdit.BattleStatusYpos2 = Number(Karberus.Parameters["BattleStatus y 2"]);

Karberus.WinEdit.BattleEnemyDefault = eval(Karberus.Parameters["EnemyWindow Default"])
Karberus.WinEdit.BattleEnemyOpacity = Number(Karberus.Parameters["EnemyWindow Opacity"]);
Karberus.WinEdit.BattleEnemyFont = Number(Karberus.Parameters["EnemyWindow Font"]);
Karberus.WinEdit.BattleEnemyXpos = Number(Karberus.Parameters["EnemyWindow x"]);
Karberus.WinEdit.BattleEnemyYpos = Number(Karberus.Parameters["EnemyWindow y"]);
Karberus.WinEdit.BattleEnemyWidth = Number(Karberus.Parameters["EnemyWindow Width"]);
Karberus.WinEdit.BattleEnemyHeight = Number(Karberus.Parameters["EnemyWindow Height"]);

Karberus.WinEdit.PartyCommandDefault = eval(Karberus.Parameters["PartyCommand Default"]);
Karberus.WinEdit.PartyCommandOpacity = Number(Karberus.Parameters["PartyCommand Opacity"]);
Karberus.WinEdit.PartyCommandFont = Number(Karberus.Parameters["PartyCommand Font"]);
Karberus.WinEdit.PartyCommandWidth = Number(Karberus.Parameters["PartyCommand Width"]);
Karberus.WinEdit.PartyCommandHeight = Number(Karberus.Parameters["PartyCommand Rows"]);
Karberus.WinEdit.PartyCommandXpos = Number(Karberus.Parameters["PartyCommand x"]);
Karberus.WinEdit.PartyCommandYpos = Number(Karberus.Parameters["PartyCommand y"]);

Karberus.WinEdit.ActorCommandDefault = eval(Karberus.Parameters["ActorCommand Default"]);
Karberus.WinEdit.ActorCommandOpacity = Number(Karberus.Parameters["ActorCommand Opacity"]);
Karberus.WinEdit.ActorCommandFont = Number(Karberus.Parameters["ActorCommand Font"]);
Karberus.WinEdit.ActorCommandWidth = Number(Karberus.Parameters["ActorCommand Width"]);
Karberus.WinEdit.ActorCommandHeight = Number(Karberus.Parameters["ActorCommand Rows"]);
Karberus.WinEdit.ActorCommandXpos = Number(Karberus.Parameters["ActorCommand x"]);
Karberus.WinEdit.ActorCommandYpos = Number(Karberus.Parameters["ActorCommand y"]);

Karberus.WinEdit.SkillWindowDefault = eval(Karberus.Parameters["SkillWindow Default"]);
Karberus.WinEdit.SkillWindowOpacity = Number(Karberus.Parameters["SkillWindow Opacity"]);
Karberus.WinEdit.SkillWindowFont = Number(Karberus.Parameters["SkillWindow Font"]);
Karberus.WinEdit.SkillWindowWidth = Number(Karberus.Parameters["SkillWindow Width"]);
Karberus.WinEdit.SkillWindowHeight = Number(Karberus.Parameters["SkillWindow Height"]);
Karberus.WinEdit.SkillWindowXpos = Number(Karberus.Parameters["SkillWindow x"]);
Karberus.WinEdit.SkillWindowYpos = Number(Karberus.Parameters["SkillWindow y"]);

Karberus.WinEdit.ItemWindowDefault = eval(Karberus.Parameters["ItemWindow Default"]);
Karberus.WinEdit.ItemWindowOpacity = Number(Karberus.Parameters["ItemWindow Opacity"]);
Karberus.WinEdit.ItemWindowFont = Number(Karberus.Parameters["ItemWindow Font"]);
Karberus.WinEdit.ItemWindowWidth = Number(Karberus.Parameters["ItemWindow Width"]);
Karberus.WinEdit.ItemWindowHeight = Number(Karberus.Parameters["ItemWindow Height"]);
Karberus.WinEdit.ItemWindowXpos = Number(Karberus.Parameters["ItemWindow x"]);
Karberus.WinEdit.ItemWindowYpos = Number(Karberus.Parameters["ItemWindow y"]);

Karberus.WinEdit.HelpWindowDefault = eval(Karberus.Parameters["HelpWindow Default"]);
Karberus.WinEdit.HelpWindowOpacity = Number(Karberus.Parameters["HelpWindow Opacity"]);
Karberus.WinEdit.HelpWindowFont = Number(Karberus.Parameters["HelpWindow Font"]);
Karberus.WinEdit.HelpWindowWidth = Number(Karberus.Parameters["HelpWindow Width"]);
Karberus.WinEdit.HelpWindowHeight = Number(Karberus.Parameters["HelpWindow Height"]);
Karberus.WinEdit.HelpWindowXpos = Number(Karberus.Parameters["HelpWindow x"]);
Karberus.WinEdit.HelpWindowYpos = Number(Karberus.Parameters["HelpWindow y"]);

Karberus.WinEdit.LogWindowDefault = eval(Karberus.Parameters["LogWindow Default"]);
Karberus.WinEdit.LogWindowFont = Number(Karberus.Parameters["LogWindow Font"]);
Karberus.WinEdit.LogWindowWidth = Number(Karberus.Parameters["LogWindow Width"]);
Karberus.WinEdit.LogWindowHeight = Number(Karberus.Parameters["LogWindow Height"]);
Karberus.WinEdit.LogWindowXpos = Number(Karberus.Parameters["LogWindow x"]);
Karberus.WinEdit.LogWindowYpos = Number(Karberus.Parameters["LogWindow y"]);

//Battle Status Window Size
Window_BattleStatus.prototype.windowWidth = function() {
  if (Karberus.WinEdit.BattleStatusDefault)  return Graphics.boxWidth - 192;
  if (!Karberus.WinEdit.BattleStatusDefault) return Karberus.WinEdit.BattleStatusWidth;
};

Window_BattleStatus.prototype.windowHeight = function() {
  if (Karberus.WinEdit.BattleStatusDefault)  return this.fittingHeight(this.numVisibleRows());
  if (!Karberus.WinEdit.BattleStatusDefault) return Karberus.WinEdit.BattleStatusHeight;
};

//Enemy Select Window Size
Window_BattleEnemy.prototype.windowWidth = function() {
  if (Karberus.WinEdit.BattleEnemyDefault)  return Graphics.boxWidth - 192;
  if (!Karberus.WinEdit.BattleEnemyDefault) return Karberus.WinEdit.BattleEnemyWidth;
};

Window_BattleEnemy.prototype.windowHeight = function() {
  if (Karberus.WinEdit.BattleEnemyDefault)  return this.fittingHeight(this.numVisibleRows());
  if (!Karberus.WinEdit.BattleEnemyDefault) return Karberus.WinEdit.BattleEnemyHeight;
};

//Party Command Window Size
Window_PartyCommand.prototype.windowWidth = function() {
  if (Karberus.WinEdit.PartyCommandDefault) return 192;
  if (!Karberus.WinEdit.PartyCommandDefault)  return Karberus.WinEdit.PartyCommandWidth;
};

Window_PartyCommand.prototype.numVisibleRows = function() {
  if (Karberus.WinEdit.PartyCommandDefault) return 4;
  if (!Karberus.WinEdit.PartyCommandDefault) return Karberus.WinEdit.PartyCommandHeight;
};

//Actor Command Window Size
Window_ActorCommand.prototype.windowWidth = function() {
  if (Karberus.WinEdit.ActorCommandDefault) return 192;
  if (!Karberus.WinEdit.ActorCommandDefault) return Karberus.WinEdit.ActorCommandWidth;
};

Window_ActorCommand.prototype.numVisibleRows = function() {
  if (Karberus.WinEdit.ActorCommandDefault)  return 4;
  if (!Karberus.WinEdit.ActorCommandDefault) return Karberus.WinEdit.ActorCommandHeight;
};


//Battle Status Window Position
Scene_Battle.prototype.updateWindowPositions = function() {
    var statusX = 0;
    if (!Karberus.WinEdit.BattleStatusDefault) {
    if (BattleManager.isInputting()) {
        statusX = Karberus.WinEdit.BattleStatusXpos;
        statusY = Karberus.WinEdit.BattleStatusYpos;
    } else {
        statusX = Karberus.WinEdit.BattleStatusXpos2;
        statusY = Karberus.WinEdit.BattleStatusYpos2;
    }
    this._statusWindow.x = statusX;
    this._statusWindow.y = statusY;
    this._statusWindow.opacity = Karberus.WinEdit.BattleStatusOpacity;
    this._statusWindow.contents.fontSize = Karberus.WinEdit.BattleStatusFont;
}
if(Karberus.WinEdit.BattleStatusDefault) {
    if (BattleManager.isInputting()) {
        statusX = this._partyCommandWindow.width;
    } else {
        statusX = this._partyCommandWindow.width / 2;
    }
    if (this._statusWindow.x < statusX) {
        this._statusWindow.x += 16;
        if (this._statusWindow.x > statusX) {
            this._statusWindow.x = statusX;
        }
    }
    if (this._statusWindow.x > statusX) {
        this._statusWindow.x -= 16;
        if (this._statusWindow.x < statusX) {
            this._statusWindow.x = statusX;
        }
    }
  }
};

Scene_Battle.prototype.createActorWindow = function() {
  if (!Karberus.WinEdit.BattleStatusDefault) {
    this._actorWindow = new Window_BattleActor(Karberus.WinEdit.BattleStatusXpos, Karberus.WinEdit.BattleStatusYpos);
    this._actorWindow.opacity = Karberus.WinEdit.BattleStatusOpacity;
    this._actorWindow.contents.fontSize = Karberus.WinEdit.BattleStatusFont;
    this._actorWindow.setHandler('ok',     this.onActorOk.bind(this));
    this._actorWindow.setHandler('cancel', this.onActorCancel.bind(this));
    this.addWindow(this._actorWindow);
  }
  if (Karberus.WinEdit.BattleStatusDefault) {
    this._actorWindow = new Window_BattleActor(0, this._statusWindow.y);
    this._actorWindow.setHandler('ok',     this.onActorOk.bind(this));
    this._actorWindow.setHandler('cancel', this.onActorCancel.bind(this));
    this.addWindow(this._actorWindow);
  }
};

//Party Command Window Position
Scene_Battle.prototype.createPartyCommandWindow = function() {
  if (!Karberus.WinEdit.PartyCommandDefault) {
    this._partyCommandWindow = new Window_PartyCommand();
    this._partyCommandWindow.x = Karberus.WinEdit.PartyCommandXpos;
    this._partyCommandWindow.y = Karberus.WinEdit.PartyCommandYpos;
    this._partyCommandWindow.opacity = Karberus.WinEdit.PartyCommandOpacity;
    this._partyCommandWindow.contents.fontSize = Karberus.WinEdit.PartyCommandFont;
    this._partyCommandWindow.setHandler('fight',  this.commandFight.bind(this));
    this._partyCommandWindow.setHandler('escape', this.commandEscape.bind(this));
    this._partyCommandWindow.deselect();
    this.addWindow(this._partyCommandWindow);
  }
  if (Karberus.WinEdit.PartyCommandDefault) {
    this._partyCommandWindow = new Window_PartyCommand();
    this._partyCommandWindow.setHandler('fight',  this.commandFight.bind(this));
    this._partyCommandWindow.setHandler('escape', this.commandEscape.bind(this));
    this._partyCommandWindow.deselect();
    this.addWindow(this._partyCommandWindow);
  }
};

//Actor Command Window Position
Scene_Battle.prototype.createActorCommandWindow = function() {
  if (!Karberus.WinEdit.ActorCommandDefault) {
    this._actorCommandWindow = new Window_ActorCommand();
    this._actorCommandWindow.x = Karberus.WinEdit.ActorCommandXpos;
    this._actorCommandWindow.y = Karberus.WinEdit.ActorCommandYpos;
    this._actorCommandWindow.opacity = Karberus.WinEdit.ActorCommandOpacity;
    this._actorCommandWindow.contents.fontSize = Karberus.WinEdit.ActorCommandFont;
    this._actorCommandWindow.setHandler('attack', this.commandAttack.bind(this));
    this._actorCommandWindow.setHandler('skill',  this.commandSkill.bind(this));
    this._actorCommandWindow.setHandler('guard',  this.commandGuard.bind(this));
    this._actorCommandWindow.setHandler('item',   this.commandItem.bind(this));
    this._actorCommandWindow.setHandler('cancel', this.selectPreviousCommand.bind(this));
    this.addWindow(this._actorCommandWindow);
  }
  if (Karberus.WinEdit.ActorCommandDefault) {
    this._actorCommandWindow = new Window_ActorCommand();
    this._actorCommandWindow.setHandler('attack', this.commandAttack.bind(this));
    this._actorCommandWindow.setHandler('skill',  this.commandSkill.bind(this));
    this._actorCommandWindow.setHandler('guard',  this.commandGuard.bind(this));
    this._actorCommandWindow.setHandler('item',   this.commandItem.bind(this));
    this._actorCommandWindow.setHandler('cancel', this.selectPreviousCommand.bind(this));
    this.addWindow(this._actorCommandWindow);
  }
};

//Enemy Window Position
Scene_Battle.prototype.createEnemyWindow = function() {
  if (Karberus.WinEdit.BattleEnemyDefault) {
    this._enemyWindow = new Window_BattleEnemy(0, this._statusWindow.y);
  }
  if (!Karberus.WinEdit.BattleEnemyDefault) {
    this._enemyWindow = new Window_BattleEnemy(Karberus.WinEdit.BattleEnemyXpos, Karberus.WinEdit.BattleEnemyYpos);
    this._enemyWindow.opacity = Karberus.WinEdit.BattleEnemyOpacity;
    this._enemyWindow.contents.fontSize = Karberus.WinEdit.BattleEnemyFont;
  }
    this._enemyWindow.x = Graphics.boxWidth - this._enemyWindow.width;
    this._enemyWindow.setHandler('ok',     this.onEnemyOk.bind(this));
    this._enemyWindow.setHandler('cancel', this.onEnemyCancel.bind(this));
    this.addWindow(this._enemyWindow);
};

//Skill Window Position and Size
Scene_Battle.prototype.createSkillWindow = function() {
  if (!Karberus.WinEdit.SkillWindowDefault) {
    var karb_x = Karberus.WinEdit.SkillWindowXpos;
    var karb_y = Karberus.WinEdit.SkillWindowYpos;
    var karb_w = Karberus.WinEdit.SkillWindowWidth;
    var karb_h = Karberus.WinEdit.SkillWindowHeight;
    this._skillWindow = new Window_BattleSkill(karb_x, karb_y, karb_w, karb_h);
    this._skillWindow.setHelpWindow(this._helpWindow);
    this._skillWindow.opacity = Karberus.WinEdit.SkillWindowOpacity;
    this._skillWindow.contents.fontSize = Karberus.WinEdit.SkillWindowFont;
    this._skillWindow.setHandler('ok',     this.onSkillOk.bind(this));
    this._skillWindow.setHandler('cancel', this.onSkillCancel.bind(this));
    this.addWindow(this._skillWindow);
  }
  if (Karberus.WinEdit.SkillWindowDefault) {
    var wy = this._helpWindow.y + this._helpWindow.height;
    var wh = this._statusWindow.y - wy;
    this._skillWindow = new Window_BattleSkill(0, wy, Graphics.boxWidth, wh);
    this._skillWindow.setHelpWindow(this._helpWindow);
    this._skillWindow.setHandler('ok',     this.onSkillOk.bind(this));
    this._skillWindow.setHandler('cancel', this.onSkillCancel.bind(this));
    this.addWindow(this._skillWindow);
  }
};

//Item Window Position and Size
Scene_Battle.prototype.createItemWindow = function() {
  if (!Karberus.WinEdit.ItemWindowDefault) {
    var karb_x = Karberus.WinEdit.ItemWindowXpos;
    var karb_y = Karberus.WinEdit.ItemWindowYpos;
    var karb_w = Karberus.WinEdit.ItemWindowWidth;
    var karb_h = Karberus.WinEdit.ItemWindowHeight;
    this._itemWindow = new Window_BattleItem(karb_x, karb_y, karb_w, karb_h);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.opacity = Karberus.WinEdit.ItemWindowOpacity;
    this._itemWindow.contents.fontSize = Karberus.WinEdit.ItemWindowFont;
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.addWindow(this._itemWindow);
  }
  if (Karberus.WinEdit.ItemWindowDefault) {
    var wy = this._helpWindow.y + this._helpWindow.height;
    var wh = this._statusWindow.y - wy;
    this._itemWindow = new Window_BattleItem(0, wy, Graphics.boxWidth, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.addWindow(this._itemWindow);
  }
};

//Help Window Position and Size
Scene_Battle.prototype.createHelpWindow = function() {
  if (!Karberus.WinEdit.HelpWindowDefault) {
    this._helpWindow = new Window_Help();
    this._helpWindow.x = Karberus.WinEdit.HelpWindowXpos;
    this._helpWindow.y = Karberus.WinEdit.HelpWindowYpos;
    this._helpWindow.width = Karberus.WinEdit.HelpWindowWidth;
    this._helpWindow.height = Karberus.WinEdit.HelpWindowHeight;
    this._helpWindow.opacity = Karberus.WinEdit.HelpWindowOpacity;
    this._helpWindow.contents.fontSize = Karberus.WinEdit.HelpWindowFont;
    this._helpWindow.visible = false;
    this.addWindow(this._helpWindow);
  }
  if (Karberus.WinEdit.HelpWindowDefault) {
    this._helpWindow = new Window_Help();
    this._helpWindow.visible = false;
    this.addWindow(this._helpWindow);
  }
};

//Log Window Position and Size
Scene_Battle.prototype.createLogWindow = function() {
  if (!Karberus.WinEdit.LogWindowDefault) {
    this._logWindow = new Window_BattleLog();
    this._logWindow.x = Karberus.WinEdit.LogWindowXpos;
    this._logWindow.y = Karberus.WinEdit.LogWindowYpos;
    this._logWindow.width = Karberus.WinEdit.LogWindowWidth;
    this._logWindow.height = Karberus.WinEdit.LogWindowHeight;
    this._logWindow.contents.fontSize = Karberus.WinEdit.LogWindowFont;
    this.addWindow(this._logWindow);
  }
  if (Karberus.WinEdit.LogWindowDefault) {
    this._logWindow = new Window_BattleLog();
    this.addWindow(this._logWindow);
  }
};

})();
//============================================================================================
//=======================================END FILE=============================================
//============================================================================================
