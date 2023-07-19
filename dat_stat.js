function Stat() {
	this.elapsed = 0;
	this.lang = "fr";
	this.style = "dark";
	this.loadedFromStorage = false;
	
	this.characterList = [];
	this.characterSelected;
	this.leagueList = [];
	this.leagueSelected;
	this.guild;
}

function League(leagueId) {
	this.leagueId = leagueId;
}

function Character(name, leagueId) {
	this.name = name;
	this.leagueId = leagueId;
}

function Guild(guildName) {
	this.guildName = guildName;
	this.guildTag = "";
}