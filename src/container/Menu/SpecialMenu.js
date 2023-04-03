import React from "react";

import { MenuItem, SubHeading } from "../../components";
import { cocktails, wines } from "../../constants/data";
import { menu } from "../../constants/images";

import "./SpecialMenu.css";

const SpecialMenu = () => (
	<div className="app__specialMenu flex__center section__padding" id="menu">
		<div className="app__specialMenu-title">
			<SubHeading title={"Menu that fits you palatte"} />
			<h2 className="headtext__cormorant">Today’s Special</h2>
		</div>

		<div className="app__specialMenu-menu">
			<div className="app__specialMenu-menu_wine flex__center">
				<p className="app__specialMenu-menu_heading">Wine & Beer</p>
				<div className="app__specialMenu-menu_items">
					{wines.map((wine, index) => (
						<MenuItem
							key={wine.title + index}
							title={wine.title}
							tags={wine.tags}
							price={wine.price}
						/>
					))}
				</div>
			</div>

			<div className="app__specialMenu-menu_img">
				<img src={menu} alt="menu img" />
			</div>

			<div className="app__specialMenu-menu_cocktails flex__center">
				<p className="app__specialMenu-menu_heading">Cocktails</p>
				<div className="app__specialMenu-menu_items">
					{cocktails.map((cocktail, index) => (
						<MenuItem
							key={cocktail.title + index}
							title={cocktail.title}
							tags={cocktail.tags}
							price={cocktail.price}
						/>
					))}
				</div>
			</div>
		</div>
		<button className="custom__button">View More</button>
	</div>
);

export default SpecialMenu;
