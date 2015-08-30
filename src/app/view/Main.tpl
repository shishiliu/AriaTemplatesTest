{Template {
    $classpath:'app.view.Main',
    $hasScript: true,
    $css: ['app.view.MainStyle'],
    $wlibs : {
		'custom' : 'app.widgets.CustomWidgetLib'
	}
}}

  {macro main()}
    {@aria:AutoComplete {
	    label : "Enter a name:",
	    resourcesHandler : getHandler(2)
	}/}

	<hr>
	{@aria:MultiAutoComplete {
	    label : "Enter a name:",
	    resourcesHandler : getHandler(2)
	}/}
	<hr>
	{@custom:AutoComplete {
		label : "Enter a name:",
	    resourcesHandler : getHandler(2)
	}/}
  {/macro}

{/Template}

