import React, {Component} from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish'

import sampleFishes from '../sample-fishes';

class App extends Component {
	constructor() {
		super(); //this pretty much has to happen so that React.Component is called before the component.
		this.addFish = this.addFish.bind(this); //this binds the addFish() method to the component. 
		this.loadSamples = this.loadSamples.bind(this); //this binds the loadSamples() method to the component. 
		//getInitialState
		this.state = {
			fishes: {}, //set the initial item state to an empty object.
			order: {}  //set the item order state to an empty object.
		};
	}

	addFish(fish) {
		// update our state or make a copy of the existing state
		const fishes = {...this.state.fishes}; //it takes each item in the fish object and spreads them into a new object.
		//add in our new item
		const timeStamp = Date.now(); //create unique timeStamp for that item
		fishes[`fish-${timeStamp}`] = fish; //add the timestamp to the item to create a unique item ID.
		//set state
		this.setState({ fishes }) //set the new state of the item by passing the item to this.setState() method
	} //Now we will pass this method to the child component <Inventory/>. See line 35. 
	  //This will make the addFish method available in Inventory.js (see line 10 in Inventory.js) so we can pass it to the <AddFishForm/> component thus trickling data downstream.

	loadSamples() {
		this.setState({
			fishes: sampleFishes
		})
	}

	render() {
		return (
		 <div className="catch-of-the-day">
		 	<div className="menu">
		 		<Header tagline="Fresh Seafood Market"/>
				<ul className="list-of-fishes">
		 			{
		 				Object
		 					.keys(this.state.fishes)
		 					.map(key => <Fish key={key} details={this.state.fishes[key]} />)
		 			}
		 		</ul>
		 	</div>
		 	<Order/>
		 	<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
		 </div>
		)
	}
}

export default App;