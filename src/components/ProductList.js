import React, { Component } from 'react';
import Title from './Title';
import Product from './Product';
import {ProductConsumer} from '../context';
import Modal from './Modal';

export default class ProductList extends Component {
	render() {
		
		return (
			
			<React.Fragment>
			<Modal />
				<div className="py-5">
					<div className="container">
						<Title name="marketplace" />

						<div className="row">

							<ProductConsumer>
								{(value)=>{
									return value.products.map(product =>{
										return <Product key={product.id} product={product}/>
									})
								}}
							</ProductConsumer>

						</div>
					</div>
				</div>

  				
	
			</React.Fragment>

		);
	}
}
