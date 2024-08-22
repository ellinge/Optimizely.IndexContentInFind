define([
    "dojo",
    "dojo/_base/declare",
    "epi/shell/command/_CommandProviderMixin",
    "geta-optimizely-indexcontentinfind/command/IndexContentInFindCommand",
    "geta-optimizely-indexcontentinfind/command/IndexContentInFindDescendantsCommand",
    "geta-optimizely-indexcontentinfind/command/IndexContentInFindForceCommand",
    "geta-optimizely-indexcontentinfind/command/IndexContentInFindDescendantsForceCommand"
],
function (
    dojo,
    declare,
    _CommandProviderMixin,
    IndexContentInFindCommand,
    IndexContentInFindDescendantsCommand,
    IndexContentInFindForceCommand,
    IndexContentInFindDescendantsForceCommand
) {
    return declare("geta-optimizely-indexcontentinfind/command/ToolsMenuCommandProvider", [_CommandProviderMixin], {

        constructor: function () {
            this.inherited(arguments);

            this.add("commands", new IndexContentInFindCommand());
            this.add("commands", new IndexContentInFindForceCommand());
            this.add("commands", new IndexContentInFindDescendantsCommand());
            this.add("commands", new IndexContentInFindDescendantsForceCommand());
        }
    });
});