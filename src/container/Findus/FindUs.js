import React from "react";

import { SubHeading } from "../../components";
import { awards } from "../../constants/data";
import { findus } from "../../constants/images";

const FindUs = () => (
	<div className="app__bg app__wrapper section__padding" id="contact">
		<div className="app__wrapper_info">
			<SubHeading title={"Contact"} />
			<h2 className=" headtext__cormorant">Find Us</h2>
			<div className="app__wrapper-content">
				<p className="p__opensans" style={{ color: "#AAA" }}>
					Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
				</p>
				<p
					className=" p__cormorant"
					style={{ color: "#DCCA87", margin: "2rem 0" }}
				>
					Opening Hours
				</p>
				<p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
				<p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
			</div>
			<button className=" custom__button" style={{ margin: "2rem 0" }}>
				View Us
			</button>
		</div>
		<div className="app__wrapper_img">
			<img src={findus} alt="findus" />
		</div>
	</div>
);

export default FindUs;
