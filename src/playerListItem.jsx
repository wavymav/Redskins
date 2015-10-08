var React = require('react'); // Requiring the react module

// Using React's createClass method to create a PlayerCard component class
// Setting module.exports to this React.createClass method
module.exports = React.createClass({
	// Using the render method to return this info
	render: function() {
		return (
			<li className="list-group-item list-item">
				<img className="media-object" src={this.props.image} alt={this.props.name} />
				<div className="player-info">
					<h3 className="list-group-item-heading">{this.props.name} <strong>#{this.props.number}</strong></h3>
					<hr/>
					<p className="list-group-item-text"><strong>Age: </strong>{this.props.age}</p>
					<p className="list-group-item-text"><strong>Postion: </strong>{this.props.position}</p>
					<p className="list-group-item-text"><strong>Experince: </strong>{this.props.experience} year(s)</p>
					<p className="list-group-item-text"><strong>College: </strong>{this.props.college}</p>
				</div>
			</li>
		);
	}
});
