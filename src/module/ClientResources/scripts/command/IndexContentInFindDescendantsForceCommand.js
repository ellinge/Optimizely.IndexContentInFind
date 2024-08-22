define([
        "dojo/_base/declare",
        "geta-optimizely-indexcontentinfind/command/_IndexContentInFindCommandMixin",
        "epi/i18n!epi/cms/nls/geta.Optimizely.indexcontentinfind.indexcontentinfinddescendantsforcecommand"
],
    function (
        declare,
        _IndexContentInFindCommandMixin,
        resources
    ) {
        return declare("geta-optimizely-indexcontentinfind/command/IndexContentInFindDescendantsForceCommand", [_IndexContentInFindCommandMixin], {
            name: "IndexContentInFindDescendantsForceCommand",
            label: resources.label,
            tooltip: resources.tooltip,
            includeDescendants: true,
            force: true,
            resources: resources
        });
    });