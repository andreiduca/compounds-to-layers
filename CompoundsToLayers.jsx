var docRef = app.activeDocument;

var compoundsToLayers = {
	init: function() {

		// get initial layers name
		var initialLayers = [];
		for(var i=0; i < docRef.layers.length; i++) {
			if (docRef.layers[i].visible) {
				initialLayers.push(docRef.layers[i].name);
			}
		}

		// iterate only through the initial layers
		for (i = 0; i < initialLayers.length; i++) {
			var currentLayer = docRef.layers[initialLayers[i]];

			var nItems = currentLayer.pageItems.length;

			for (var j=nItems-1; j >= 0; j--) {
				var currentItem = docRef.layers[initialLayers[i]].pageItems[j];
				var newLayer = docRef.layers.add();

				newLayer.name = compoundsToLayers.cleanString(currentItem.name);

				currentItem.move(newLayer, ElementPlacement.PLACEATBEGINNING);
			}
		}
	},

	cleanString: function(string) {
		var clean = string;

		// optional: convert the name to lowercase and replace spaces with dashes:
		clean = clean.replace(/\s/gi, '-').toLowerCase();

		// TODO: Add your own alterations to the original string

		return clean;
	}
};

compoundsToLayers.init();
