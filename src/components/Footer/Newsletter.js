import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
	<div className="app__newsletter">
		<div className="app__newsletter-heading">
			<SubHeading title={"Newsletter"} />
			<h2 className=" headtext__cormorant"> Subscribe to Our Newsletter</h2>
			<p className=" p__opensans ">And never miss latest Updates!</p>
			<div className="app__newsletter-input ">
				<input type="email" placeholder="Email Address" />
				<button className="custom__button">Subscribe</button>
			</div>
		</div>
	</div>
);

export default Newsletter;
