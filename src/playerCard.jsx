// Using React's createClass method to create a PlayerCard component class
var PlayerCard = React.createClass({
	// Using the render method to return this info
	render: function() {
		return (
			<div className="col-sm-6 col-md-4">
				<div className="thumbnail">
					<img src={this.props.image} alt={this.props.name} />
					<div className="caption">
						<h3>{this.props.name}<strong><i>#{this.props.number}</i></strong></h3>
			    	<p><strong>Position: </strong>{this.props.position}</p>
			    	<p><strong>Age: </strong>{this.props.age}</p>
			    	<p><strong>Experince: </strong>{this.props.experience} year(s)</p>
			    	<p><strong>College: </strong>{this.props.college}</p>
					</div>
				</div>
			</div>
		);
	}
});
