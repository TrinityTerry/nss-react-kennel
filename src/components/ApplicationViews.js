import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './home/Home';
import AnimalList from './animal/AnimalList';
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList';
import EmployeeList from './employee/EmployeeList';
import OwnerList from './owner/OwnerList';
import AnimalDetail from './animal/AnimalDetail'

class ApplicationViews extends Component {
	render() {
		return (
			<React.Fragment>
				<Route
					exact
					path='/'
					render={props => {
						return <Home />;
					}}
				/>
				<Route
					path='/animals'
					render={props => {
						return <AnimalList />;
					}}
				/>
				<Route
					path='/animals/:animalId'
					render={props => {
						return (
							<AnimalDetail
								animalId={parseInt(props.match.params.animalId)}
							/>
						);
					}}
				/>
				<Route
					path='/location'
					render={props => {
						return <LocationList />;
					}}
				/>
				<Route
					path='/employee'
					render={props => {
						return <EmployeeList />;
					}}
				/>
				<Route
					path='/owner'
					render={props => {
						return <OwnerList />;
					}}
				/>
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
