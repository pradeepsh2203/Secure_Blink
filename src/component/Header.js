import React from "react";
import IMG from "../data/CourseHero.svg";
import "../css/header.css";

const Header = () => {
	return (
		<div className="header-flex">
			<img className="header-img" alt="Company Logo" src={IMG} />
			<div className="header--list">
				<a className="header--login">Login</a>
				<a className="header--register">Register</a>
			</div>
		</div>
	);
};

export default Header;
