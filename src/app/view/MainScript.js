Aria.tplScriptDefinition({
  $classpath : 'app.view.MainScript',
  $dependencies : [
		"aria.resources.handlers.LCResourcesHandler"],  
  $prototype : {
		getHandler : function (threshold) {
			var handler = new aria.resources.handlers.LCResourcesHandler();
			var nationList = [{
	            label : "Austria",
	            code : "AT"
	            }, {
	            label : "Belgium",
	            code : "BE"
	            }, {
	            label : "Bulgaria",
	            code : "BG"
	            }, {
	            label : "Cyprus",
	            code : "CY"
	            }, {
	            label : "Czech Republic",
	            code : "CZ"
	            }, {
	            label : "Denmark",
	            code : "DK"
	            }, {
	            label : "Estonia",
	            code : "EE"
	            }, {
	            label : "Finland",
	            code : "FI"
	            }, {
	            label : "France",
	            code : "FR"
	            }, {
	            label : "Germany",
	            code : "DE"
	            }, {
	            label : "Greece",
	            code : "EL"
	            }, {
	            label : "Hungary",
	            code : "HU"
	            }, {
	            label : "Ireland",
	            code : "IE"
	            }, {
	            label : "Italy",
	            code : "IT"
	            }, {
	            label : "Latvia",
	            code : "LV"
	            }, {
	            label : "Lithuania",
	            code : "LT"
	            }, {
	            label : "Luxembourg",
	            code : "LU"
	            }, {
	            label : "Malta",
	            code : "MT"
	            }, {
	            label : "Netherlands",
	            code : "NL"
	            }, {
	            label : "Poland",
	            code : "PL"
	            }, {
	            label : "Portugal",
	            code : "PT"
	            }, {
	            label : "Romania",
	            code : "RO"
	            }, {
	            label : "Slovakia",
	            code : "SK"
	            }, {
	            label : "Slovenia",
	            code : "SI"
	            }, {
	            label : "Spain",
	            code : "ES"
	            }, {
	            label : "Sweden",
	            code : "SE"
	            }, {
	            label : "United Kingdom",
	            code : "UK"
        	}];
			handler.threshold = threshold;
			handler.setSuggestions(nationList);
			return handler;
		}	
  }
});