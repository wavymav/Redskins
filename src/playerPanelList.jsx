var React = require('react'); // Requiring the react module
var PlayerListItem = require('./playerListItem'); // Requiring the PlayerCard component form playerCard.js

// Using React's createClass method to create a PlayerPanelCardList component class
// Setting module.exports to this React.createClass method
module.exports = React.createClass({
	render: function() {
		var playerList = this.props.playerData.map(function(playerProps) {
			// ... gives me all of the property values in the playersData array
			return (
				<PlayerListItem {...playerProps}/>
			);
		});

		return (
			<div className="panel panel-default">
				<div className="panel-heading">Top 5 Redskin Players</div>
				<div className="panel-body">
					<p>This is a list consisting of the top 5 Washington Redskin players from week 4 vs. the Philadelphia Eagles</p>
				</div>
				<ul className="list-group">
					{playerList}
				</ul>
			</div>
		);
	}
});
