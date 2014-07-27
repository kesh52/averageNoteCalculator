var frameWithInfo = window.frames["inhalt"];

var tableWithNotes = frameWithInfo.document.getElementsByTagName('table')[1];

var tds = tableWithNotes.querySelectorAll('td.tabelle1');

// Get notes
var notes = new Array();
var idxNotes = 0;
for(i = 4; i < tds.length; i+=10) {
	notes[idxNotes] = parseInt(tds[i].innerText, 10);
	idxNotes++;
}

// Get credit points
var crps = new Array();
var idxCrps = 0;
for(i=6; i < tds.length; i+=10) {
	crps[idxCrps] = parseInt(tds[i].innerText, 10);
	idxCrps++;
}

console.log(notes);
console.log(crps);

// Get number of subjects
var curNumbSubj = notes.length;
// Get sum of credit points
var crpNumb = crps.reduce(function(pv, cv) { return pv + cv; }, 0);

// Calculate average note
var tempNote = 0;
for(i=0; i < notes.length; i++) {
	tempNote += notes[i] == 0 ? 100 * crps[i] : notes[i] * crps[i];
}

// Final part
var averageNote = tempNote / crpNumb;
alert("Your note is: " + averageNote);
console.log(averageNote);