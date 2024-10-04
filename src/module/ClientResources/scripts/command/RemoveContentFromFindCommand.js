define([
    "dojo/_base/declare",
    "geta-optimizely-indexcontentinfind/command/_IndexContentInFindCommandMixin",
    "epi/i18n!epi/cms/nls/geta.Optimizely.indexcontentinfind.removecontentfromfindcommand"
],
    function (
        declare,
        _IndexContentInFindCommandMixin,
        resources
    ) {
        return declare("geta-optimizely-indexcontentinfind/command/RemoveContentFromFindCommand", [_IndexContentInFindCommandMixin], {
            name: "RemoveContentFromFindCommand",
            label: resources.label,
            tooltip: resources.tooltip,
            includeDescendants: false,
            resources: resources,
            removeFromIndex: true,
        });
    });