﻿define([
        "dojo/_base/declare",
        "geta-optimizely-indexcontentinfind/command/_IndexContentInFindCommandMixin",
        "epi/i18n!epi/cms/nls/geta.Optimizely.indexcontentinfind.indexcontentinfindcommand"
],
    function(
        declare,
        _IndexContentInFindCommandMixin,
        resources
    ) {
        return declare("geta-optimizely-indexcontentinfind/command/IndexContentInFindCommand", [_IndexContentInFindCommandMixin], {
            name: "IndexContentInFindCommand",
            label: resources.label,
            tooltip: resources.tooltip,
            includeDescendants: false,
            resources: resources
        });
    });