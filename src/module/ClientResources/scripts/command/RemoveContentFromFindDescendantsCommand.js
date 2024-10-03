define([
    "dojo/_base/declare",
    "geta-optimizely-indexcontentinfind/command/_IndexContentInFindCommandMixin",
    "epi/i18n!epi/cms/nls/geta.Optimizely.indexcontentinfind.removecontentfromfinddescendantscommand"
],
    function (
        declare,
        _IndexContentInFindCommandMixin,
        resources
    ) {
        return declare("geta-optimizely-indexcontentinfind/command/RemoveContentFromFindDescendantsCommand", [_IndexContentInFindCommandMixin], {
            name: "RemoveContentFromFindDescendantsCommand",
            label: resources.label,
            tooltip: resources.tooltip,
            includeDescendants: true,
            resources: resources,
            removeFromIndex: true,
        });
    });