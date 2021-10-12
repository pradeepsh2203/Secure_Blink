import IMG from "../data/CourseHero.svg";
import "../css/header.css";

const Header = () => {
	return (
		<div className="header-flex">
			<img className="header-img" alt="Company Logo" src={IMG} />
			<div className="header--list">
				<a className="header--login" href="/">
					Login
				</a>
				<a className="header--register" href="/">
					Register
				</a>
			</div>
		</div>
	);
};

export default Header;
