import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { ProductConsumer } from '../../context';


export default class Navbar extends Component {

	expandedNav(expanded) {
		if(expanded) {
			return (
				<React.Fragment>
					<ProductConsumer>
						{value => (
							<div className="list-container">
							<div className="exit" onClick={() => value.onToggleButtonClick()}><i className="fas fa-times fa-4x"></i></div>
							
							<ul className="text-capitalize" onClick={() => value.onToggleButtonClick()}>
								<Link to="/">
									<Logo src="cca-logo.svg" className="navbar-brand mt-3 ml-3" 
										alt="logo"/>
								</Link>
								<Link to="/blog" onClick={() => value.onToggleButtonClick()}><li>blog</li></Link>
								<Link to="/store"><li>store</li></Link>
								<Link to="/contact"><li>contact</li></Link>
								<Link to="/cart">
									<button className="btn btn-black">
										<span className="mr-2">
											<i className="fas fa-cart-plus"></i> 
										</span>
									cart
									</button>
								</Link>
							</ul>
						</div>
						)}
					</ProductConsumer>
				</React.Fragment>
			)
		}	else {
				return null;
		}
  	};

	render() {
		return (
			<React.Fragment>
				<MobileNavWrapper>
				<ProductConsumer>
				{value => (
					<div className="nav-mobile">
		        		<div className="btn-mobile" onClick={value.onToggleButtonClick}><i className="fas fa-bars fa-3x"></i></div>
		        		{this.expandedNav(value.expanded)}
		      		</div>
				)}
		      		</ProductConsumer>
				</MobileNavWrapper>


				<DesktopNavWrapper className="navbar px-sm-5">
					<Link to="/">
						<Logo src="cca-logo.svg" className="navbar-brand mt-3 ml-3" 
						alt="logo"/>
					</Link>
					<div class="spacer" />
					<ul className="navbar-nav ml-auto mr-4">
						<li className="nav-item ml-sm-5 ml-2 pt-2 ">
							<Link to="/blog" className="nav-link"> 
							blog
							</Link>
						</li>
						<li className="nav-item ml-sm-5 ml-2  pt-2">
							<Link to="/store" className="nav-link"> 
							store
							</Link>
						</li>
						<li className="nav-item ml-sm-5 ml-2 mr-5 pt-2">
							<Link to="/contact" className="nav-link"> 
							contact
							</Link>
						</li>
						<Link to="/cart">
							<button className="btn btn-black">
								<span className="mr-2">
									<i className="fas fa-cart-plus"></i> 
								</span>
								cart
							</button>
						</Link>
					</ul>	
				</DesktopNavWrapper>

			</React.Fragment>
		);
	}
}

const Logo = styled.img`

width:8rem;
`;

const MobileNavWrapper = styled.div`
	@media (min-width: 481px) {
		display:none;
	}
`;

const DesktopNavWrapper = styled.nav`
@media (max-width:480px) {
	display:none;
}
.spacer {
	flex:1;
}
.nav-link{
	color:var(--mainDark)!important;
	font-size:1rem;
	text-transform:capitalize;
	display: inline;
}
.nav-link:hover {
	text-decoration:underline;
}
.navbar-nav {
	flex-direction:row !important;
}
`;



