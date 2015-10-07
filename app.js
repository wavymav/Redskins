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

// Using React's createClass method to create a PlayerCard component class
var PlayerCard = React.createClass({displayName: "PlayerCard",
	// Using the render method to return this info
	render: function() {
		return (
			React.createElement("div", {className: "col-sm-6 col-md-4"}, 
				React.createElement("div", {className: "thumbnail"}, 
					React.createElement("img", {src: this.props.image, alt: this.props.name}), 
					React.createElement("div", {className: "caption"}, 
						React.createElement("h3", null, this.props.name, React.createElement("strong", null, React.createElement("i", null, "#", this.props.number))), 
			    	React.createElement("p", null, React.createElement("strong", null, "Position: "), this.props.position), 
			    	React.createElement("p", null, React.createElement("strong", null, "Age: "), this.props.age), 
			    	React.createElement("p", null, React.createElement("strong", null, "Experince: "), this.props.experience, " year(s)"), 
			    	React.createElement("p", null, React.createElement("strong", null, "College: "), this.props.college)
					)
				)
			)
		);
	}
});

// Using React's createClass method to create a PlayerPanelCardList component class
var PlayerPanelCardList = React.createClass({displayName: "PlayerPanelCardList",
	render: function() {
		var playerList = this.props.playerData.map(function(playerProps) {
			// ... gives me all of the property values in the playersData array
			return (
				React.createElement(PlayerCard, React.__spread({},  playerProps))
			);
		});

		return (
			React.createElement("div", null, 
				playerList
			)
		);
	}
});
