define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/_base/array",
    "dijit/layout/_LayoutWidget",
    "dijit/_TemplatedMixin",
    "epi/i18n!epi/cms/nls/geta.Optimizely.indexcontentinfind.indexcontentinfindinfo",
    "dojo/text!./templates/IndexContentInFindInfo.html"
],
    function (
        declare,
        lang,
        array,
        _LayoutWidget,
        _TemplatedMixin,
        resources,
        template
    ) {
        return declare("geta-optimizely-indexcontentinfind/widget/IndexContentInFindInfo", [_LayoutWidget, _TemplatedMixin], {
            name: "IndexContentInFindCommand",
            recursive: false,
            text: resources.text,
            textNode: null,
            templateString: template,
            removeFromIndex: false,
            postCreate: function () {
                this.inherited(arguments);

                if (this.removeFromIndex) {
                    this.set('text', resources.removaltext);
                } else if (this.recursive) {
                    this.set('text', resources.recursivetext);
                }
            },

            showResult: function (indexingResult) {
                if (this.removeFromIndex) {
                    if (indexingResult.ok) {
                        this.set('text', resources.removalsuccess)
                    } else {
                        this.set('text', resources.removalfail)
                    }
                } else {
                    var successfulCount = 0,
                        excludedCount = 0,
                        errorCount = 0;
                    array.forEach(indexingResult, function (item) {
                        if (item.ok) {
                            successfulCount++;
                        }
                        else if (item.excludedByConventions === false) {
                            errorCount++;
                        }

                        if (item.excludedByConventions) {
                            excludedCount++;
                        }
                    }, this);

                    var resultText = resources.resulttext;
                    resultText = resultText.replace('{0}', successfulCount);
                    resultText = resultText.replace('{1}', excludedCount);
                    resultText = resultText.replace('{2}', errorCount);

                    this.set('text', resultText);
                }
            },

            _setTextAttr: function (text) {
                this.textNode.innerHTML = text;
            }
        });
    });