// Initialization of the stat
var stat = new Stat();
// On load, try to get back the stat from local storage
function loadStorage() {
	// Load saved state if exists
	if(localStorage.getItem("stat")) {
		stat = JSON.parse( localStorage.getItem("stat"));
		stat.loadedFromStorage = true;
	} else {
		stat = new Stat();
	}
	selectLang(stat.lang);
	selectStyle(stat.theme);
}

// Auto save stat when tab goes hidden
document.addEventListener('visibilitychange', 
	function() {
		if (document.visibilityState == 'hidden' && stat.loadedFromStorage == false) { 
			localStorage.setItem("stat",JSON.stringify(stat, null, 0));
		} else {
			// If multiple opened tab ? do nothing
		}
	}
);

// Start the ticker
var intervalId = setInterval(function() {
	/* 
	determine what you consume 
	determine automatic market trading
	determine what you drop
	refresh ui
	*/
	stat.elapsed += 1; 
	update_display_character();
}, 50);