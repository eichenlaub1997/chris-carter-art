import React from 'react';

export default function Title({name}) {

		return (
				<div className="row">
					<div 
					className="col-12 col-md-10 mx-auto my-2 text-center text-title">
						<h1 className="text-capitalize" style={{fontSize:"2.3rem"}}>
							{name}
						</h1>
					</div>
				</div>
		);
}
