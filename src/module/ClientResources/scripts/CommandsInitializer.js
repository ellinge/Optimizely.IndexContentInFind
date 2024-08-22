define([
    "dojo",
    "dojo/_base/declare",
    "epi/_Module",
    "epi/dependency",
    "epi/routes",
    "geta-optimizely-indexcontentinfind/command/ToolsMenuCommandProvider"
], function (
    dojo,
    declare,
    _Module,
    dependency,
    routes,
    ToolsMenuCommandProvider
) {
    return declare("geta-optimizely-indexcontentinfind/CommandsInitializer", [_Module], {
        initialize: function () {
            this.inherited(arguments);
            var commandregistry = dependency.resolve("epi.globalcommandregistry");
            var area = "epi.cms.contentdetailsmenu";
            commandregistry.registerProvider(area, new ToolsMenuCommandProvider());

            var storeRegistry = this.resolveDependency("epi.storeregistry");
            storeRegistry.create("indexcontentstore", this._getRestPath("indexcontentstore"));
        },

        _getRestPath: function (name) {
            return routes.getRestPath({ moduleArea: "Geta.Optimizely.IndexContentInFind", storeName: name });
        }
    });
});