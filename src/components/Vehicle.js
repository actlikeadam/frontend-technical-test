import React, { Component } from 'react';
import { getVehicle } from '../api';

export default
	class Vehicle extends Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		const vehicle = this.props.vehicle;

		getVehicle(vehicle.id, json => {
			this.setState({
				data: JSON.parse(json)
			});
		});
	}

	render() {
		const vehicle = this.props.vehicle;
		const data = this.state.data;
		const media = vehicle.media[0];

		return <div className="col-sm-12 col-md-6 col-lg-3 tt-v">
			<img className="tt-v-image" src={`${media.url}`} />
			<div className="details-container">
				<div className="details">
					{
						!data ? <h1>...</h1> :
							<section className="tt-v-overview">
								<h2 className="tt-v-name">
									Jaguar {data.id}
								</h2>
								<div className="tt-v-price">
									From {data.price}
								</div>
								<div className="tt-v-description">
									{data.description}
								</div>
							</section>
					}
				</div>
			</div>
		</div>;
	}
}