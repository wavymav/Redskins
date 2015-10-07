var React = require('react'); // Requiring the react module
var PlayerCard = require('./playerCard'); // Requiring the PlayerCard component form playerCard.js

// Using React's createClass method to create a PlayerPanelCardList component class
// Setting module.exports to this React.createClass method
module.exports = React.createClass({
	render: function() {
		var playerList = this.props.playerData.map(function(playerProps) {
			// ... gives me all of the property values in the playersData array
			return (
				<PlayerCard {...playerProps}/>
			);
		});

		return (
			<div>
				{playerList}
			</div>
		);
	}
});
