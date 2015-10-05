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

				// option 1. keep original name
				newLayer.name = currentItem.name;
				// option 2. convert the name to lowercase and replace spaces with dashes:
				// newLayer.name = currentItem.name.replace(/\s/gi, '-').toLowerCase();

				currentItem.move(newLayer, ElementPlacement.PLACEATBEGINNING);
			}
		}

	}
};

compoundsToLayers.init();
