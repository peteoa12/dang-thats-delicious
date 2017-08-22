 import React, {Component} from 'react';
 import AddFishForm from './AddFishForm'

//Now the addFish method is available. Pass it to <AddFishForm/> via props. 
 class Inventory extends Component {

 	constructor() {
 		super();
 		this.renderInventory = this.renderInventory.bind(this);
 		this.handleChange = this.handleChange.bind(this);
 	}

 	handleChange(e, key) {
 		const fish = this.props.fishes[key];
 

 		//take a copy of the fish and update with the new data
 		const updateFish = {...fish,
 			[e.target.name]: [e.target.value]
 		}
 		this.props.updateFish(key, updateFish);
 	}

 	renderInventory(key) {
 		const fish = this.props.fishes[key];
 		return(
 			<div className="fish-edit" key={key}>
 				<input type="text" name="name" value={fish.name} placeholder="Fish Name" 
 					onChange={(e) => this.handleChange(e, key)}/>
 				<input type="text" name="price" value={fish.price} placeholder="Fish Price"
 					onChange={(e) => this.handleChange(e, key)}/>
 				<select type="text" name="status" value={fish.status} placeholder="Fish Status"
 					onChange={(e) => this.handleChange(e, key)}>
 				  <option value="available">Fresh!</option>
 				  <option value="unavailable">Sold Out!</option>
 				</select>
 				<textarea type="text" name="desc" value={fish.desc} placeholder="Fish Desc"
 					onChange={(e) => this.handleChange(e, key)}/>
 				<input type="text" name="image" value={fish.image} placeholder="Fish Image"
 					onChange={(e) => this.handleChange(e, key)}/>
 			</div>
 		)
 	}
 	
 	render() {
 		return (
 			<div>
 				{Object.keys(this.props.fishes).map(this.renderInventory)}
 				<h2>Inventory</h2>
 				<AddFishForm addFish={this.props.addFish}/>
 				<button onClick={this.props.loadSamples}>Load Sample Fishes</button>
 			</div>
 		)
 	}
 }

 export default Inventory;