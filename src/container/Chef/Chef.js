import SubHeading from "../../components/SubHeading/SubHeading";
import { chef, quote, sign } from "../../constants/images";
import "./Chef.css";

const Chef = () => (
	<div className="app__bg app__wrapper section__padding">
		<div className="app__wrapper_img app__wrapper_img-reverse">
			<img src={chef} alt="chef img" />
		</div>

		<div className="app__wrapper_info">
			<SubHeading title={"Chef’s Word"} />
			<h2 className="headtext__cormorant">What we believe in</h2>

			<div className="app__chef-content">
				<div className="app__chef-content_quote">
					<img src={quote} alt="quote" />
					<p className="p__opensans">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dignissimos.
					</p>
				</div>
				<p className="p__opensans">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem,
					repellat, veritatis, a libero asperiores at molestias nostrum iusto
					quo placeat! Eaque non soluta omnis fuga adipisci illo ea placeat!
				</p>
			</div>

			<div className="app__chef-sign">
				<p>Kevin Luo</p>
				<p className="p__opensans">Chef & Founder</p>
				<img src={sign} alt="sign" />
			</div>
		</div>
	</div>
);

export default Chef;
