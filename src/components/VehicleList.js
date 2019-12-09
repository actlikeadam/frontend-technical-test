import React, { Component } from 'react';
import { getVehiclesData } from '../api';
import Vehicle from './Vehicle';

export default
	class VehicleList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null
		}
	}

	componentDidMount() {
		getVehiclesData((json) => {
			const obj = JSON.parse(json);

			this.setState({
				data: obj.vehicles ? obj.vehicles : []
			})
		});
	}

	render() {
		if (this.state.data != null) {
			var vehicles = this.state.data.map(vehicle => {
				return <Vehicle key={`vehicle_${vehicle.id}`} vehicle={vehicle} />;
			});

			return <div className="row no-gutters text-center">
				{vehicles}
			</div>;
		}

		return (<h1>Loading...</h1>);
	}
}