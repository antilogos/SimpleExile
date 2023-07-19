// Navigation
const PAGES_WITHPARENT = {"character": "", "sheet": "character", "inventory": "character", "talent": "character", "gem": "character",
	"encounter": "", "quest": "encounter", "master": "encounter", "content": "encounter", 
	"hideout": "", "bench": "hideout", "stash": "hideout", "trade": "hideout", 
	"leaderboard": "", "guild": "leaderboard", "challenge": "leaderboard", "league": "leaderboard"};
const PAGES_WITHCHARACTER = ["sheet", "inventory", "talent", "gem", "quest", "content", "character"];
const PAGES_WITHLEAGUE = ["challenge", "hideout", "master", "stash"];
const PAGES_WITHGUILD = ["guild"];

function displayPage(currPage) {
	for(let page of Object.keys(PAGES_WITHPARENT)) {
		for(let element of document.getElementsByClassName("page_"+page)) {
			let isDisplay = (page == currPage || PAGES_WITHPARENT[currPage] == page);
			element.style.display = isDisplay ? "block" : "none";
		}
	}
	// Don't change hash of location if displaying loader or a build
	if(currPage != "loader" && currPage != "home") {
		window.location.hash = currPage;
	}
}

function displayInitialPage() {
	// Display current hash page
	if(window.location.hash) {
		displayPage(window.location.hash.substring(1));
	} else {
		displayPage("league");
	}
	changeStateDisplay(); // move to selected state
}

// Display only button that could be displayed
function changeStateDisplay() {
	for(let btn of PAGES_WITHCHARACTER) {
		document.getElementById("btn_"+btn).style.display = (stat.characterSelected === undefined) ? "none" : "block";
	}
	for(let btn of PAGES_WITHLEAGUE) {
		document.getElementById("btn_"+btn).style.display = (stat.leagueSelected === undefined) ? "none" : "block";
	}
	for(let btn of PAGES_WITHGUILD) {
		document.getElementById("btn_"+btn).style.display = (stat.guild === undefined) ? "none" : "block";
	}
	document.getElementById("btn_encounter").style.display = (stat.leagueSelected === undefined && stat.characterSelected === undefined) ? "none" : "block"; 
}


/* FORMS */

// 
function submitCreateCharacter(e) {
	console.log(e);
}