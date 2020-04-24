import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import ButtonContainer from './Button';
import {Link} from 'react-router-dom';
import Modal from './Modal';

export default class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					const { id, title, img, price, medium, info, inCart} = value.detailProduct;
					return (
						<React.Fragment>
							<Modal />
							{/* title */}
							<div className="row">
								<div className="col-10 mx-auto text-center text-slanted text-blue my-4 text-capitalize">
									<h1>{title}</h1>
								</div>
							</div>
							{/* end title */}

							{/* product info */}
							<div className="row mb-5">
								<div className="col-12 mx-auto col-md-5 my-3 px-5">
									<img src={img} className="img-fluid" alt="product"/>
								</div>

								{/* product text */}
								<div className="col-10 mx-auto col-md-6 my-3 text-capitalize ml-0 mb-5">
									<h3 className="text-muted">medium: {medium}</h3>
									<h4 className="text-blue">
										<strong>
										price : <span>$</span>
										{price}
										</strong>
									</h4>
									<p className="text-capitalize font-weight-bold mt-3 mb-0">
										some info about the product
									</p>
									<p className="text-muted">
										{info}
									</p>

									{/* buttons */}
									<Link to="/store" >
										<ButtonContainer>
											Back to Products
										</ButtonContainer>
									</Link>
									<ButtonContainer 
									cart
									disabled = {inCart ? true : false}
									onClick={() =>{
										value.addToCart(id);
										value.openModal(id);
									}} >
										{inCart ? 'inCart' : 'add to cart'}
									</ButtonContainer>
								</div>

							
							</div>
						</React.Fragment>
					)
				}}
				
			</ProductConsumer>
		);
	}
}
