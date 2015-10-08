var React = require('react'); // Requiring the react module
var PlayerPanelList = require('./playerPanelList'); // Requiring the PlayerPanelCardList component form playerPanelCardList.js

// players object that holds an array of playerData objects
var players = {
	playerData: [
		//http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14880.png&w=350&h=254
		{
			name : "Kirk Cousins",
			number : 8,
			position : "QB",
			age : 27,
			experience : 4,
			college : "Michigan State",
			image : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14880.png&w=250&h=174"
		},
		{
			name : "Jamison Crowder",
			number : 80,
			position : "WR",
			age : 22,
			experience : "Rookie",
			college : "Duke",
			image : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2576716.png&w=250&h=174"
		},
		{
			name : "Pierre Garcon",
			number : 88,
			position : "WR",
			age : 29,
			experience : 8,
			college : "Mount Union",
			image :"http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/11439.png&w=250&h=174"
		},
		{
			name : "Chris Baker",
			number : 92,
			position : "DT",
			age : 28,
			experience : 4,
			college : "Hampton",
			image :"http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/12760.png&w=250&h=174"
		},
		{
			name : "Ryan Kerrigan",
			number : 91,
			position : "OLB",
			age : 24,
			experience : 4,
			college : "Purdue",
			image :"http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/13973.png&w=250&h=174"
		},
	]
};


// Using React's cerateElements() method to create the PlayerCard component and store the value in playerCardElement var
var playerCardElement = React.createElement(PlayerPanelList, players);

// The React render() method renders the playerCardElement to the specified target area within the html file.
React.render(playerCardElement, document.querySelector('.target'));
