 Aria.classDefinition({
    $classpath : "app.widgets.CustomAutoComplete",
    $extends : "aria.widgets.form.AutoComplete",
    $dependencies : [
    	"app.widgets.CustomAutoCompleteController"
    ],
    $constructor : function (cfg, ctxt, lineNumber,controllerInstance) {
        var controller = controllerInstance || new app.widgets.CustomAutoCompleteController();

        this.$AutoComplete.constructor.call(this, cfg, ctxt, lineNumber, controller);

        if (!cfg.expandButton) {
            this._hideIconNames = ["dropdown"];
        }
        controller.maxOptions = cfg.maxOptions;

        this._freePopupWidth = true;
    },
    $prototype : {
    }
});