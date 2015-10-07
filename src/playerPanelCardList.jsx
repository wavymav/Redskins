// Using React's createClass method to create a PlayerPanelCardList component class
var PlayerPanelCardList = React.createClass({
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
