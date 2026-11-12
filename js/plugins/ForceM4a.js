//=============================================================================
// ForceM4a.js
//=============================================================================
/*:
 * @plugindesc Always load .m4a audio. This build only ships .rpgmvm (m4a)
 * files, but RPG Maker MV asks for .ogg on desktop browsers.
 */
(function() {
    AudioManager.audioFileExt = function() {
        return '.m4a';
    };
})();
