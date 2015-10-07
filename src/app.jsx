// players object that holds an array of playerData objects
var players = {
	playerData: [
		{
			name : "Jordan Reed",
			number : 86,
			position : "TE",
			age : 25,
			experience : 2,
			college : "Florida",
			image : "https://cbswashington.files.wordpress.com/2015/10/gettyimages-491323934.jpg?w=620&h=349&crop=1"
		},
		{
			name : "Pierre Garcon",
			number : 88,
			position : "WR",
			age : 29,
			experience : 8,
			college : "Mount Union",
			image :"http://www.rantsports.com/nfl/files/2015/09/slide41.jpg"
		},
		{
			name : "DeSean Jackson",
			number : 11,
			position : "WR",
			age : 28,
			experience : 8,
			college : "Cal Berkeley",
			image :"http://isportsweb.com/wp-content/uploads//2014/10/jack.jpg"
		},
		{
			name : "Ryan Kerrigan",
			number : 91,
			position : "OLB",
			age : 24,
			experience : 4,
			college : "Purdue",
			image :"http://s3media.247sports.com/Uploads/Assets/830/618/6_3618830.jpg"
		},
	]
};

// Using React's cerateElements() method to create the PlayerCard component and store the value in playerCardElement var
var playerCardElement = React.createElement(PlayerPanelCardList, players);

// The React render() method renders the playerCardElement to the specified target area within the html file.
React.render(playerCardElement, document.querySelector('.target'));
