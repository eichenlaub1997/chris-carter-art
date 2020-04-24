import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
	render() {
		const {id, title, img, price, inCart} = this.props.product;
 
		return (
			
			<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-4 my-3">
				<div className="card">

				<ProductConsumer>
					{(value) => (
						//anything which needs access to the specific functions residing in the context.js file needs to be placed in here. functins will be accessed in with the sytax "value.MyFunction()"
						<div className="img-container" onClick={()=> value.handleDetail(id)} >
							<Link to="/details">
								<img src={img} className="card-img-top" alt="artwork"/>
							</Link>
							<button className="card-btn" disabled={inCart ? true : false} 
								onClick={() => {
									value.addToCart(id);
									value.openModal(id);
								}}>

								{inCart ? (<p className="text-capitalize mb-0 in-cart" disabled>
								{""}
								in cart
								</p>
								) : (
								<i className="fas fa-cart-plus"/>)}

								</button>
						</div>
						)}
				</ProductConsumer>
					

					<div className="card-footer d-flex justify-content-between p-3">
						<h6 className="text-capitalize">{title}</h6>
						<h5 className="ml-auto">${price}</h5>
					</div>
				</div>
			</ProductWrapper>
		);
	}
}

Product.propTypes = {
	product:PropTypes.shape({
		id:PropTypes.number,
		img:PropTypes.string,
		title:PropTypes.string,
		price:PropTypes.number,
		inCart:PropTypes.bool
	}).isRequired
}

const ProductWrapper = styled.div`
.card:hover {
	box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
}
.card-btn {
	right:0;
}
.img-container:hover .card-img-top {
	opacity:0.5;
	cursor:pointer;
}

.card-footer {
	background: #ffffff;
}
.img-container {
	position:relative;
	overflow:hidden;
}
.card-btn {
	position:absolute;
	bottom:0;
	right:0;
	padding:0.2rem 0.4rem;
	background:#516c82;
	border:none;
	color:var(--mainWhite);
	opacity:0.85;
	font-size:2rem;
	border-radius:0.5rem 0 0 0;
	transform:translate(100%, 100%);
	transition: transform .4s ease-in-out;
}
.card-btn:hover {
	opacity:1;
	cursor:pointer;
}
.img-container:hover .card-btn {
	transform:translate(0,0);
}
.in-cart {
	font-size:1.3rem;
}
`



