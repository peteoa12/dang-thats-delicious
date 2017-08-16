import React, {Component} from 'react';
import { formatPrice } from '../helpers';

class Fish extends Component {
	render() {
		const { details } = this.props;
		return (
		 	<li className="menu-fish">
		 		<img src={details.image} alt={details.name}/>
		 		<h4 className="fish-name">
		 			{details.name}
		 			<span className="price">{formatPrice(details.price)}</span>
		 		</h4>
	 			<p>{details.desc}</p>
	 			<button>Add To Order</button>
		 	</li>
		)
	}
}

export default Fish;