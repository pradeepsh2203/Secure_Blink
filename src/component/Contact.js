import Mail from "../data/Mail.svg";
import Call from "../data/Call.svg";
import Location from "../data/Location.svg";
import Facebook from "../data/Facebook.svg";
import Twitter from "../data/Twitter.svg";
import LinkedIn from "../data/Linkedin.svg";
import Github from "../data/Github.svg";
import ContactForm from "./ContactForm";
import "../css/contact.css";

const Contact = () => {
	return (
		<div className="ContactUs">
			<h2 className="Contact-title">Contact Us</h2>
			<p className="Contact-content">Reach Out With Any</p>
			<p className="Contact-content">Question You Have</p>
			<div className="Contact-Info-Container">
				<div className="Contact-Info-sec1">
					<h3 className="Contact-Info-title">Contact Information</h3>
					<div className="Contact-Info-method">
						<img
							className="Contact-icon-image"
							src={Mail}
							alt="icon"
						/>
						<p className="Contact-Info">contact@coursepro.com</p>
					</div>
					<div className="Contact-Info-method">
						<img
							className="Contact-icon-image"
							src={Call}
							alt="icon"
						/>
						<p className="Contact-Info">
							1800-562-895, 1800-869-877
						</p>
					</div>
					<div className="Contact-Info-method Contact-Info-method-last">
						<img
							className="Contact-icon-image"
							src={Location}
							alt="icon"
						/>
						<p className="Contact-Info">102 Street, India</p>
					</div>
					<h3 className="Contact-Info-title">Social Media Channel</h3>
					<div className="flex space-between">
						<img
							className="Contact-social-icon"
							src={Facebook}
							alt="social-icon"
						/>
						<img
							className="Contact-social-icon"
							src={Twitter}
							alt="social-icon"
						/>
						<img
							className="Contact-social-icon"
							src={LinkedIn}
							alt="social-icon"
						/>
						<img
							className="Contact-social-icon"
							src={Github}
							alt="social-icon"
						/>
					</div>
				</div>
				<ContactForm />
			</div>
		</div>
	);
};
export default Contact;
