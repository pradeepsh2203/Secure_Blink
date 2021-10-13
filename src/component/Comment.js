import IMG from "../data/Group 12142.svg";
import Comment2 from "../data/user1.webp";
import Comment1 from "../data/Comment1.webp";
import Quote from "../data/right-quotation-sign.svg";
import "../css/comment.css";

const comments = [
	{
		content:
			"It's a comprehensive online learning platform for everyone looking to learn and course pro. provinding this platform which is very beneficial for practicals. Students can revise everything at home like dissection and slides",
		img: Comment1,
		name: "Anshul Jain",
		time: "Yesterday",
	},
	{
		content:
			"It's A Comprehensive Online Learning Platform For Everyone Looking To Learn And Course Pro. Provinding This Platform Which Is Very Beneficial For Practicals. Students Can Revise Everything At Home Like Dissection And Slides",
		img: Comment2,
		name: "Rajkumar Jain",
		time: "Yesterday",
	},
];

const Comment = () => {
	return (
		<>
			<div className="my-40 mx-30">
				<h2 className="Comment-title">Refer</h2>
				<p className="Comment-content">How it's work</p>
			</div>
			<img className="Comment-graphics" src={IMG} alt="Graphics" />
			<div className="my-40 mx-30">
				<h2 className="Comment-title">Testimonial</h2>
				<p className="Comment-content">Check Out What our</p>
				<p className="Comment-content">Students think about us</p>
				<div className="Comment-card-container">
					{comments.map((comment) => {
						return (
							<div className="Comment-card">
								<p className="Comment-card-content">
									{comment.content}
								</p>
								<div className="flex space-between">
									<div className="flex center">
										<img
											className="Comment-card-image"
											src={comment.img}
											alt="user"
										/>
										<div className="Comment-card-section">
											<p className="Comment-card-user">
												{comment.name}
											</p>
											<p className="Comment-card-time">
												{comment.time}
											</p>
										</div>
									</div>
									<img
										className="Comment-quotation"
										src={Quote}
										alt="quotation mark"
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Comment;
