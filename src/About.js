import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './components/Title';

export default class About extends Component {
	render() {
		return (
			<React.Fragment>
				{/* title */}
				<div className="col-10 col-md-6 mx-auto mt-4 mb-0 text-center">
					<p className="text-title text-center mb-0">Chris Carter</p>
					<p className="text-center text-dull">Stories, art and journeys from an American born, African-raised vagabond</p>
				</div>


				<Container className="container">
					<div id="image-container" className="mt-5">
						<img src="img/cover.jpg" alt="cover" />
					</div>
					<div id="background">

						{/* arrow down */}
						<div className="row d-flex justify-content-center">
							<i className="fas fa-chevron-down fa-3x text-white pulse"></i>
						</div>
						{/* end about me */}
						

						{/* about me */}
						<div class="row text-center text-white px-2 px-md-5">
							<div id="bio-img-container" class="col-12 col-md-6">
								<img src="img/race-reports.jpg" className="img-fluid" alt="" />
							</div>
							<div class="col-12 col-lg-6">
								<Title name="about me" />
								<p>Hey guys! Thanks for checking out my page. I'm an American artist/ultra-runner/traveller who grew up as a missionary kid in Kenya, East Africa. I love drawing, painting, creating, running, climbing, backpacking ... basically anything that uses the right side of your brain and puts you in contact with nature on a deeper level. This is primarily a space to showcase/sell my artwork, but also to share race reports from my journey as an ultra-runner, memoirs from long distance thru-hikes, and details for trips and adventures coming up. Appreciate you giving it a look! </p>
							</div>
						</div>
						{/* end about me */}


						{ /* sponsors */}
						<div className="text-white my-5 border-top pt-5 mx-3">
							<Title name="Sponsors" />
						</div>
						
						<div className="row d-flex text-white text-center">
							<div className="col-10 col-lg-4 mx-auto">
								<div className="sponsor-logo-container">
									<img class="img-fluid d-block mx-auto" src="img/honey-stinger-logo.png" alt="Card cap" />
								</div>
								<h4>Honey Stinger Hive</h4>
								<p>Powerful, clean energy derived totally from natural, sustainably sourced honey. Honey Stinger has helped me power through some of the hardest challenges, and I couldn't recommend their organic energy, or racing apparel more!</p>
								<a href="https://www.honeystinger.com/" target="blank">
									<button className="btn btn-white text-white">
										details
									</button>
								</a>
							</div>
							<div className="col-10 col-lg-4 mx-auto">
								<div className="sponsor-logo-container">
									<img class="h-75 d-block mx-auto mt-4" src="img/ready-wise-logo.png" alt="Card cap" />
								</div>
								<h4>Ready Wise Meals</h4>
								<p>Incredibly lightweight and packed with clean energy, Readywise's freeze-dried meals are always delicious, and perfect for a haul up a 10 pitch wall, or a weeklong trip in the backwoods.</p>
								<a href="https://readywise.com/" target="blank">
									<button className="btn btn-white text-white">
										details
									</button>
								</a>
							</div>
							<div className="col-10 col-lg-4 mx-auto">
								<div className="sponsor-logo-container">
									<img class="img-fluid d-block mx-auto" src="img/simple-hydration-logo.png" alt="Card cap" />
								</div>
								<h4>Simple Hydration</h4>
								<p>Unique, functional water bottles designed to stay where you need them, when you need them. Simple Hydration has helped me carry enough fluids with me on days when an ultra-vest would be overkill, but the sun demands supplements!</p>
								<a href="https://www.simplehydration.com/" target="blank">
									<button className="btn btn-white text-white">
										details
									</button>
								</a>
							</div>
						</div>
						{ /* end sponsors */}

					</div>
				</Container>

			</React.Fragment>
			
		);
	}
}


const Container = styled.div`
i {
	margin-top:-10rem;
}
#image-container {
	background:var(--mainWhite);
	width:75%;
	height:20rem;
	margin:0 auto 0 auto;
	padding:1rem;
	z-index:2;
	position:relative;
}
#image-container img {
	width:100%;
	height:100%;
	display:block;
	margin:0 auto 0 auto;
	object-fit:cover;

}
#background {
	background:var(--backgroundBlue);
	height:auto;
	margin:-10rem 0rem 10rem 0;
	z-index:0;
	position:relative;
	padding:21rem 0rem 10rem 0rem;
}
.sponsor-logo-container {
	padding:1rem;
	height:15rem;
	margin-bottom:0;
	display:flex;
	justify-content:center;
}

`;












