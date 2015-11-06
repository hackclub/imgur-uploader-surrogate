var Uploader = Uploader || {};

Uploader.initDb = function() {
	Uploader.db = {};

	Uploader.db.init = function() {
		if (localStorage["phone-numbers"] === undefined) {
			var emptyObject = {};
			localStorage["phone-numbers"] = JSON.stringify(emptyObject);
		}
		var stringifiedObject = localStorage["phone-numbers"];
		Uploader.db.store = JSON.parse(stringifiedObject); // http://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/

		Object.keys(Uploader.db.store).forEach(function(phone) { // http://stackoverflow.com/questions/684672/loop-through-javascript-object#answer-5737136
			Uploader.db.onAdd(phone);
		});
	}

	Uploader.db.add = function(phone) {
		if (Uploader.db.store[phone]) {
			return false
		}
		else {
			Uploader.db.store[phone] = true;
			var stringifiedObject = JSON.stringify(Uploader.db.store); // http://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/
			localStorage["phone-numbers"] = stringifiedObject;
			Uploader.db.onAdd(phone);

			return true;
		}
	}

	Uploader.db.onAdd = function(phone) {
		Uploader.writePhone(phone);
	}

	Uploader.db.reset  = function() {
		localStorage.removeItem("phone-numbers"); // http://stackoverflow.com/questions/9943220/how-to-delete-a-localstorage-item-when-the-browser-window-tab-is-closed
		Uploader.initDb();
	}

	Uploader.db.init();
}

