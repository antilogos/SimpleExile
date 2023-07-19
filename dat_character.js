// MAIN CHARACTER OBJECT
var character_stat = {
	"experience": 0,
	"level": 1,
	"gear_base_rating": 0.8,
	"skill_base_rating": 0.2,
	"talent_base_rating": 0.2,
	"skill_point": 0
}
function experience_to_level(experience) {
	//return Math.pow(experience, 1/1.8);
}
function experience_to_nex_level(experience) {
	//return Math.pow(experience, 1/1.8);
}

// MAIN LOOP UPDATE
function update_display_character() {
	update_display_character_level();
	update_display_character_nextlevel();
	update_display_character_expperhour();
	update_display_character_arealevelpenalty();
	update_display_character_areapowerratio();
	update_display_character_talentrating();
}

function update_display_character_level() {
	document.getElementById("character_level_div").textContent = "Character level: " + character_stat.level;
}

function update_display_character_nextlevel() {
	document.getElementById("character_nextlevel_div").textContent = "Experience to next level: ???" + character_stat.level;
}

function update_display_character_expperhour() {
	// Compute xp per hour 
	document.getElementById("character_expperhour_div").textContent = "Experience per hour: ???" + character_stat.level;
}

function update_display_character_arealevelpenalty() {
	// Compute area level penalty if character level is too far away from zone level
	document.getElementById("character_arealevelpenalty_div").textContent = "Experience area penalty: ???" + character_stat.level;
}

function update_display_character_areapowerratio() {
	// Compute ratio with current character power rating (< 1 mean death take xp, > 1 mean high clearspeed )
	document.getElementById("character_areapowerratio_div").textContent = "Experience area power ratio: ???" + character_stat.level;
}

function update_display_character_talentrating() {
	// Increased with gear
	document.getElementById("character_passiverating_div").textContent = "Passive skill efficiency: ???" + character_stat.talent_base_rating;
}