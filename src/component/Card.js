import Clock from "../data/clock.svg";
import Calender from "../data/calender.svg";
import "../css/card.css";

const Card = ({ props }) => {
	return (
		<div className="Card-Container">
			<div className="Card-top">
				<img
					className="Card-image"
					src={props.cardImage}
					alt="Course"
				/>
				<p className="Card-type">{props.cardType}</p>
			</div>
			<div className="Card-bottom">
				<h2 className="Card-title">{props.title}</h2>
				<p className="Card-enrolled">
					<strong style={{ fontStyle: "normal" }}>
						{props.numOfEnrolled}
					</strong>{" "}
					Student
				</p>
				<div className="flex space-between">
					<p className="Card-time">
						<img className="icons" src={Clock} alt="clock" />
						{props.time}
					</p>
					<p className="Card-numOfLec">
						<img className="icons" src={Calender} alt="calender" />
						{props.numOfLectures} Lectures
					</p>
				</div>
				<hr className="line-break" />
				<div className="flex space-between">
					<div className="flex space-between">
						<img
							className="Card-user"
							src={props.userImage}
							alt="User"
						/>
						<span className="Card-userName">{props.userName}</span>
					</div>
					<div>
						<span className="Card-price">&#8377;{props.price}</span>
						<span className="Card-initialPrice">
							&#8377;{props.initialPrice}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
