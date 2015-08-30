  Aria.classDefinition({
    $classpath : "app.widgets.CustomAutoCompleteController",
    $extends : "aria.widgets.controllers.AutoCompleteController",
    $onload : function () {
//        typeUtil = ariaUtilsType;
//        arrayUtil = ariaUtilsArray;
    },
    $onunload : function () {
        typeUtil = null;
        arrayUtil = null;
    },
    $constructor : function () {
        this.$AutoCompleteController.constructor.call(this);

	    /**
        * Freetext allowed, if it is set to true suggestion can be edited on double click
        * @type Boolean
        */
        this.freeText = false;

        /**
         * All the selected suggestions
         * @type Array
        */
        this.selectedSuggestions = [];

        /**
         * Check if expando is enabled
         * @type Boolean
         */
        this._isExpanded = false;
        /**
        * Edited Suggestion Index
        * @type Integer
        */
        this._editedSuggestionIndex = -1;

        // Inherited from aria.html.controllers.Suggestions
        this._init();
        },
    $prototype : {
    }
});