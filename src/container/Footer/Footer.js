import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { spoon } from "../../constants/images";

import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";

const Footer = () => (
	<div className="app__footer section__padding">
		<FooterOverlay />
		<Newsletter />

		<div className="app__footer-links">
			<div className="app__footer-links_contact">
				<h3 className="app__footer-headtext">Contact Us</h3>
				<p className=" p__opensans " style={{ color: "#AAA" }}>
					9 W 53rd St, New York, NY 10019, USA
				</p>
				<p className=" p__opensans" style={{ color: "#AAA" }}>
					+1 212-555-1230
				</p>
				<p className=" p__opensans" style={{ color: "#AAA" }}>
					+1 212-555-1230
				</p>
			</div>

			<div className="app__footer-links_logo">
				<h2 className="footer__logo ">Gerícht</h2>
				<p className=" p__opensans">
					"The best way to find yourself is to lose yourself in the service of
					others.”
				</p>
				<img src={spoon} alt="spoon" className="spoon__img" />
				<div className="app__footer-links_logo-icons">
					<FiFacebook />
					<FiTwitter />
					<FiInstagram />
				</div>
			</div>

			<div className="app__footer-links_work">
				<h3 className="app__footer-headtext">Working Hours</h3>
				<p className=" p__opensans " style={{ color: "#AAA" }}>
					Monday-Friday:
				</p>
				<p className=" p__opensans" style={{ color: "#AAA" }}>
					08:00 am -12:00 am
				</p>
				<p className=" p__opensans" style={{ color: "#AAA" }}>
					Saturday-Sunday:
				</p>
				<p className=" p__opensans" style={{ color: "#AAA" }}>
					07:00am -11:00 pm
				</p>
			</div>
		</div>

		<div className="footer__copyright">
			<p className=" p__opensans">2021 Gerícht. All Rights reserved.</p>
		</div>
	</div>
);

export default Footer;
